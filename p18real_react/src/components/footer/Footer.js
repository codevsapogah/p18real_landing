import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';

const FooterSection = styled.footer`
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  padding: 80px 0 40px;
  
  @media (max-width: 768px) {
    padding: 60px 0 30px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: var(--footer-title-color);
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  
  a {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--footer-logo-color);
    text-decoration: none;
    
    span {
      color: var(--primary-color);
    }
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--primary-color);
      transform: translateY(-3px);
    }
    
    svg {
      width: 18px;
      height: 18px;
      
      path {
        fill: var(--footer-icon-color);
      }
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  
  a {
    color: var(--footer-link-color);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    display: inline-block;
    opacity: 0.8;
    
    &:hover {
      color: var(--primary-color);
      transform: translateX(3px);
      opacity: 1;
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 12px;
  
  p {
    display: flex;
    align-items: flex-start;
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0 0 12px;
  }
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    margin-top: 3px;
    
    path {
      fill: var(--footer-icon-color);
    }
  }
`;

const Copyright = styled.div`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.7;
    margin: 0;
  }
  
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    
    li a {
      font-size: 0.9rem;
      color: var(--footer-link-color);
      text-decoration: none;
      opacity: 0.7;
      transition: all 0.2s ease;
      
      &:hover {
        color: var(--primary-color);
        opacity: 1;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterGrid>
          <FooterColumn>
            <LogoContainer>
              <a href="/">P18<span>Test</span></a>
            </LogoContainer>
            <Description>
              P18 - Джеффри Янгтың бағдарлама терапиясына негізделген тест. 
              Өзіңізді жақсырақ түсінуге және өміріңізді жақсартуға көмектеседі.
            </Description>
            <SocialLinks>
              <a href="https://facebook.com/p18test" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://twitter.com/p18test" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href="https://instagram.com/p18test" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Қызметтер</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="/тест">Тест жасау</a></FooterLink>
              <FooterLink><a href="/нәтижелер">Нәтижелерді талдау</a></FooterLink>
              <FooterLink><a href="/мамандар">Маман табу</a></FooterLink>
              <FooterLink><a href="/тестілеу">Кеңейтілген нұсқа</a></FooterLink>
              <FooterLink><a href="/кәсіпорындар">Кәсіпорындарға</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Компания</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="/біз-туралы">Біз туралы</a></FooterLink>
              <FooterLink><a href="/ғылыми-негіз">Ғылыми негіз</a></FooterLink>
              <FooterLink><a href="/блог">Блог</a></FooterLink>
              <FooterLink><a href="/мансап">Мансап</a></FooterLink>
              <FooterLink><a href="/байланыс">Байланыс</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Байланыс</ColumnTitle>
            <ContactInfo>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +7 (727) 123-45-67
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@p18.kz
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Алматы қ., Достық даңғ. 71, 4-қабат
              </p>
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          <p>© 2023 P18 Test. Барлық құқықтар қорғалған.</p>
          <ul>
            <li><a href="/құпиялылық-саясаты">Құпиялылық саясаты</a></li>
            <li><a href="/қолдану-шарттары">Қолдану шарттары</a></li>
          </ul>
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer; 