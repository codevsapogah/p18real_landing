# Technical Context

## Core Technologies
- React
- styled-components
- Framer Motion for animations
- React Icons (specifically Fi icons for status bar)

## Development Setup
- Project structure follows component-based architecture
- Mobile-first responsive design
- Supports both Kazakh and Russian languages

## Component Architecture

### PhoneMockup Component
The centerpiece of our application is a sophisticated 3D phone mockup that displays test results:

#### Design Specifications
- Modern iPhone-style design with notch and status bar
- Dimensions:
  - Desktop: 340px width, 580px height
  - Tablet: 300px width, 500px height
  - Mobile: 280px width, 460px height
- 3D Transform: rotateY(-30deg) rotateX(15deg) base angle
- Violet background frame (#7c3aed)

#### Interactive Features
1. Desktop:
   - Hover animation: rotates from (-30deg Y, 15deg X) to (-35deg Y, 12deg X)
   - Smooth 0.3s transition
   
2. Mobile:
   - Continuous slow rotation animation
   - 10-second cycle, alternating between:
     - Base: rotateY(-30deg) rotateX(15deg)
     - Peak: rotateY(-25deg) rotateX(18deg)

3. Universal:
   - Floating animation using translateZ/translateY
   - Initial fade-in animation

#### Content Structure
1. Status Bar
   - WiFi and Battery icons
   - Centered notch design

2. Header
   - P18 logo
   - Language toggle (KZ/RU)

3. Results Card
   - Purple background (#6B46C1)
   - User info and date
   - View toggle (List/Grid)
   - PDF download button

4. Results Display
   - High scores section (2-column grid)
   - All results section (3-column grid)
   - Color-coded score indicators
   - Interactive info icons

## Styling System
- styled-components for component styling
- Responsive breakpoints:
  - Mobile: max-width 480px
  - Tablet: max-width 768px
  - Desktop: above 768px
- Color scheme:
  - Primary: #6B46C1 (Purple)
  - Background: #7c3aed (Violet)
  - Score colors:
    - Red: #DC2626 (≥75%)
    - Orange: #FF6100 (≥50%)
    - Yellow: #FFD900 (≥25%)
    - Green: #16A34A (<25%)

## Performance Considerations
- Transform-style: preserve-3d for proper 3D rendering
- Hardware acceleration through transform3d
- Optimized animations using Framer Motion
- Efficient re-renders through proper component structure

## Future Technical Considerations
- API integration for test results
- Analytics implementation
- Expanded language support
- Enhanced accessibility features
- PDF generation optimization

## Dependencies
```json
{
  "react": "^18.x",
  "styled-components": "^6.x",
  "framer-motion": "^10.x",
  "react-icons": "^4.x"
}
```

## VPS Deployment Configuration

### Server Details
- VPS IP: 78.40.108.81
- User: dias
- Domain: kulan.kz/p18

### Nginx Configuration
The React app is deployed at kulan.kz/p18 using Nginx. The configuration is stored at `/etc/nginx/sites-available/kulanp18`:

```nginx
server {
    server_name kulan.kz www.kulan.kz;

    # Root directory
    root /var/www;

    # Main app location
    location /p18/ {
        alias /var/www/kulanp18/;
        index index.html;
        try_files $uri $uri/ /kulanp18/index.html;
    }

    # Redirect /p18 to /p18/
    location = /p18 {
        return 301 https://$host/p18/;
    }

    # Static files handling
    location ~* ^/p18/static/.*\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        root /var/www;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }

    # SSL configuration
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/kulan.kz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kulan.kz/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.kulan.kz) {
        return 301 https://$host$request_uri;
    }

    if ($host = kulan.kz) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name kulan.kz www.kulan.kz;
    return 404;
}
```

### File Structure
The React app files are stored at `/var/www/kulanp18/` on the server. This includes:
- HTML, CSS, and JavaScript files
- Static assets like images and fonts
- The main index.html entry point

### SSL Certificates
SSL is handled by Let's Encrypt with auto-renewal through Certbot.

### Deployment Process
To deploy updates to the app:

1. Ensure the React app is built with the correct homepage:
   ```json
   // package.json
   {
     "homepage": "/p18"
   }
   ```

2. Build the app locally:
   ```bash
   npm run build
   ```

3. Upload to the server:
   ```bash
   scp -r build/* dias@78.40.108.81:/var/www/kulanp18/
   ```

4. No further server configuration is needed unless the paths change.

### Troubleshooting
- Check Nginx error logs: `sudo tail -n 100 /var/log/nginx/error.log`
- Check Nginx access logs: `sudo tail -n 100 /var/log/nginx/access.log`
- Test Nginx config: `sudo nginx -t`
- Reload Nginx: `sudo systemctl reload nginx`

### Common Issues
- 404 errors for static files: Check Nginx static files location configuration
- Redirect loops: Check try_files directive in location blocks
- Blank page with JavaScript errors: Check browser console for specific file loading errors 

## Critical Server Configurations

### Nginx Configurations
- `p18v32` is the main project configuration and MUST NEVER be modified or removed
- Other configurations should be adapted to work alongside p18v32 without conflicts
- Protocol options and server configurations should comply with p18v32's settings

## Project Dependencies
```json
{
  "react": "^18.x",
  "styled-components": "^6.x",
  "framer-motion": "^10.x",
  "react-icons": "^4.x"
}
``` 