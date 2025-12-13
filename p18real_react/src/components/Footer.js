import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const FooterContainer = styled.footer`
  padding: 24px 0;
  text-align: center;
  border-top: 1px solid rgba(107, 70, 193, 0.1);
`;

const CopyrightText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const translations = {
  kz: {
    copyright: "Copyright ©P18 Test, 2025. Барлық құқықтар қорғалған"
  },
  ru: {
    copyright: "Copyright ©P18 Test, 2025. Все права защищены"
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <FooterContainer>
      <CopyrightText>
        {t.copyright}
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer; 