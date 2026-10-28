#!/bin/bash

# P18 Landing Page Deployment Script

# Configuration
SERVER_USER="dias"
SERVER_IP="78.40.108.81"
REMOTE_PATH="/var/www/html/p18"
BUILD_PATH="./p18real_react/build"
TEMP_DIR="/tmp/p18_build"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting P18 Landing Page deployment...${NC}"

# Step 1: Build the React app
echo -e "${YELLOW}Building React application...${NC}"
cd p18real_react && npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Aborting deployment.${NC}"
    exit 1
fi
cd ..

echo -e "${GREEN}Build successful!${NC}"

# Step 2: Notify about deployment
echo -e "${YELLOW}Starting deployment to server...${NC}"
echo -e "${YELLOW}You will need to enter the server password multiple times during deployment.${NC}"

# Step 3: Upload build files directly to server
echo -e "${YELLOW}Uploading build files to server...${NC}"
scp -r $BUILD_PATH/* $SERVER_USER@$SERVER_IP:$TEMP_DIR/
if [ $? -ne 0 ]; then
    # If the temp directory doesn't exist, try to create it first
    echo -e "${YELLOW}Creating temporary directory and trying again...${NC}"
    ssh $SERVER_USER@$SERVER_IP "mkdir -p $TEMP_DIR"
    
    # Try the upload again
    scp -r $BUILD_PATH/* $SERVER_USER@$SERVER_IP:$TEMP_DIR/
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to upload files. Aborting deployment.${NC}"
        exit 1
    fi
fi

# Step 4: Run deployment commands on server with proper terminal allocation
echo -e "${YELLOW}Deploying files to web directory...${NC}"
echo -e "${YELLOW}You will be prompted for your password to execute sudo commands${NC}"

# Use -tt to force terminal allocation for sudo password prompt
ssh -tt $SERVER_USER@$SERVER_IP "
    echo 'Removing old files...'
    sudo rm -rf $REMOTE_PATH/*
    
    echo 'Copying new files...'
    sudo mkdir -p $REMOTE_PATH
    sudo cp -r $TEMP_DIR/* $REMOTE_PATH/
    
    echo 'Setting permissions...'
    sudo chown -R www-data:www-data $REMOTE_PATH/
    
    echo 'Cleaning up...'
    rm -rf $TEMP_DIR
    
    echo 'Checking Nginx configuration...'
    sudo nginx -t && sudo systemctl reload nginx
    
    echo 'Deployment completed!'
    exit
"

if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed.${NC}"
    exit 1
fi

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}The website is now available at https://kulan.kz/p18/${NC}"
echo -e "${GREEN}Deployment process completed!${NC}" 