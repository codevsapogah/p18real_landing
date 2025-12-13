import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 60px;
  }
`;

const Logo = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 6px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const LanguageToggleButton = styled(motion.button)`
  background: white;
  border: 2px solid rgba(107, 70, 193, 0.3);
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #6B46C1;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(107, 70, 193, 0.1);
  
  &:hover {
    background: rgba(107, 70, 193, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
`;

const Header = () => {
  const { language, toggleLanguage, isMounted } = useLanguage();
  
  return (
    <HeaderContainer>
      <Logo href="/">
        <span>P18</span>
      </Logo>
      <Nav>
        <LanguageToggleButton
          onClick={toggleLanguage}
          whileHover={isMounted ? { scale: 1.05 } : {}}
          whileTap={isMounted ? { scale: 0.95 } : {}}
        >
          {language === 'kz' ? "🇰🇿 KZ → 🇷🇺 RU" : "🇷🇺 RU → 🇰🇿 KZ"}
        </LanguageToggleButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 