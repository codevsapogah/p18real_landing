/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { useLanguage } from '../../context/LanguageContext';
import TestCounter from '../TestCounter';

// Translations
const translations = {
  kz: {
    heroTitle: "Өзіңізді шынайы танығыңыз келе ме?",
    heroSubtext: "Санадан тыс сенімдеріңіздің өміріңізге әсерін анықтап, дәл қазір өзгерісті бастаңыз!",
    ctaButton: "Тестті дәл қазір өтемін!",
    aboutHeading: "Санадан тыс бағдарламаларыңызды дәл қазір анықтаңыз",
    aboutText: "Бұл тест сіздің бала кезден қалыптасқан санадан тыс бағдарламаларыңызды анықтап, олардың сіздің өміріңізге, қарым-қатынасыңызға және шешімдеріңізге қалай әсер ететінін көрсетеді.",
    benefits: [
      'Өзіңізді шектеп тұрған сенімдерді анықтау',
      'Қайталанатын мәселелердің себебін табу',
      'Дамудың нақты бағытын айқындау'
    ],
    howItWorksHeading: "Тест қалай өтеді?",
    steps: [
      {
        number: '1',
        title: '15 минут уақыт алады',
        description: 'Өз сезімдеріңізге сүйене отырып, тез жауап беріңіз.'
      },
      {
        number: '2',
        title: 'Нәтижесі бірден шығады',
        description: 'Және поштаңызға барады.'
      },
      {
        number: '3',
        title: 'Коучпен талдаңыз немесе өзіңіз зерттеңіз',
        description: 'Нақты әрекеттер арқылы өзгерістер бастаңыз.'
      }
    ],
    languageFeatureHeading: "Тіл ауыстыру мүмкіндігі",
    languageFeatureDescription: "Тест барысында сұрақтарды қазақша\nнемесе орысша көре аласыз",
    languageToggleButton: "🇰🇿 KZ → 🇷🇺 RU",
    exampleQuestionKZ: "Адамдар менің өзгелер үшін тым көп нәрсе жасайтынымды, ал өзім үшін жеткіліксіз қамқорлық танытатынымды айтады",
    exampleAnswersKZ: [
      "Мүлдем сәйкес келмейді",
      "Көбінесе сәйкес келмейді",
      "Сәйкес келмейтін сияқты",
      "Сәйкес келетін сияқты",
      "Көбінесе сәйкес келеді",
      "Толық сәйкес келеді"
    ],
    arrowText: "Басыңыз",
    answerOptions: [
      'Мүлдем сәйкес келмейді',
      'Көбінесе сәйкес келмейді',
      'Сәйкес келмейтін сияқты',
      'Сәйкес келетін сияқты',
      'Көбінесе сәйкес келеді',
      'Толық сәйкес келеді'
    ]
  },
  ru: {
    heroTitle: "Хотите по-настоящему познать себя?",
    heroSubtext: "Определите влияние ваших подсознательных убеждений на вашу жизнь и начните перемены прямо сейчас!",
    ctaButton: "Пройти тест сейчас!",
    aboutHeading: "Определите ваши подсознательные схемы прямо сейчас",
    aboutText: "Этот тест выявляет ваши подсознательные схемы, сформированные с детства, и показывает, как они влияют на вашу жизнь, отношения и решения.",
    benefits: [
      'Выявление убеждений, которые вас ограничивают',
      'Поиск причин повторяющихся проблем',
      'Определение конкретного направления развития'
    ],
    howItWorksHeading: "Как проходит тест?",
    steps: [
      {
        number: '1',
        title: 'Займет 15 минут',
        description: 'Отвечайте быстро, полагаясь на свои чувства.'
      },
      {
        number: '2',
        title: 'Результат сразу',
        description: 'И отправляется на вашу почту.'
      },
      {
        number: '3',
        title: 'Анализируйте с коучем или сами',
        description: 'Начните изменения через конкретные действия.'
      }
    ],
    languageFeatureHeading: "Возможность переключения языка",
    languageFeatureDescription: "Во время теста вы можете видеть вопросы на казахском или русском языке",
    languageToggleButton: "🇷🇺 RU → 🇰🇿 KZ",
    exampleQuestionRU: "Люди считают, что я делаю слишком много для других и недостаточно для себя",
    exampleAnswersRU: [
      "Абсолютно не соответствует",
      "По большей части не соответствует",
      "Скорее не соответствует, чем соответствует",
      "Скорее соответствует",
      "По большей части соответствует",
      "Полностью соответствует"
    ],
    arrowText: "Нажмите",
    answerOptions: [
      'Абсолютно не соответствует',
      'По большей части не соответствует',
      'Скорее не соответствует, чем соответствует',
      'Скорее соответствует',
      'По большей части соответствует',
      'Полностью соответствует'
    ]
  }
};

// Language Toggle Button for Header
const HeaderLanguageToggle = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
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
  z-index: 1000;
  user-select: none;
  
  &:hover {
    background: rgba(107, 70, 193, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 12px;
    top: 10px;
    right: 10px;
  }
`;

// New component for language toggle info
const LanguageToggleInfo = styled(motion.div)`
  background: rgba(107, 70, 193, 0.1);
  border-left: 3px solid #6B46C1;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 12px;
    gap: 8px;
  }
`;

const LanguageToggleIcon = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6B46C1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const LanguageToggleText = styled.div`
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.5;
`;

const HeroSection = styled.section`
  padding: 80px 0;
  background: #f8f7ff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0 20px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 580px;

  @media (max-width: 992px) {
    max-width: 100%;
    margin-bottom: 50px;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-top: 0;
  }
`;

const HeroSubtext = styled(motion.h2)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 20px;
  opacity: 0.9;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 15px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-block;
  background: #6B46C1;
  color: white;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.25);
  position: relative;
  isolation: isolate;
  min-width: 200px;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    background: #6B46C1;
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(107, 70, 193, 0.3);
    background: #5b35b5;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    padding: 14px 28px;
    margin: 0 auto;
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background: transparent;
  color: var(--primary-color);
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(88, 86, 214, 0.1);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: 12px 20px;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 97, 0, 0.4), rgba(255, 217, 0, 0.4));
  filter: blur(25px);
  z-index: 1;
  right: -20px;
  bottom: 30px;

  @media (max-width: 992px) {
    right: auto;
    left: -20px;
    bottom: 0;
  }

  @media (max-width: 576px) {
    width: 120px;
    height: 120px;
    filter: blur(20px);
  }
`;

const FloatingElement2 = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 86, 214, 0.5), rgba(22, 163, 74, 0.5));
  filter: blur(20px);
  z-index: 1;
  left: 20px;
  top: 30px;

  @media (max-width: 992px) {
    left: auto;
    right: -20px;
    top: 0;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
    filter: blur(15px);
  }
`;

const PhoneMockupWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const AboutSection = styled.section`
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const AboutHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #111827;
  line-height: 1.2;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
    line-height: 1.3;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BenefitsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BenefitItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 1.5;
  text-align: left;

  span {
    flex-shrink: 0;
    font-size: 24px;
    line-height: 1;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 16px;
    gap: 10px;

    span {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 14px;
    gap: 8px;
    margin-bottom: 12px;

    span {
      font-size: 18px;
    }
  }
`;

const Emoji = styled(motion.span)`
  font-size: 4rem;
  margin-top: 48px;
  margin-bottom: 0;
  padding-bottom: 0;
  display: block;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-top: 32px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const HowItWorksSection = styled.section`
  padding: 80px 0;
  background: #f8f7ff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const HowItWorksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const HowItWorksHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #6B46C1;
  line-height: 1.2;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
    line-height: 1.3;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  padding: 20px 0;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: calc(16.666% + 40px);
    right: calc(16.666% + 40px);
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      rgba(107, 70, 193, 0.2) 0px,
      rgba(107, 70, 193, 0.2) 8px,
      transparent 8px,
      transparent 16px
    );
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;

    &::before {
      display: none;
    }
  }
`;

const Step = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.1);
  z-index: 1;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    z-index: -1;
    background: ${props => props.$isMiddle ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))' : 'white'};
    backdrop-filter: ${props => props.$isMiddle ? 'blur(10px)' : 'none'};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  background: #6B46C1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.25);
`;

const StepContent = styled.div`
  text-align: left;
  width: 100%;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #6B46C1;
  }

  p {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

const StepGradient = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background: linear-gradient(
    135deg,
    rgba(255, 97, 0, 0.15),
    rgba(255, 217, 0, 0.15),
    rgba(107, 70, 193, 0.15),
    rgba(0, 255, 255, 0.15)
  );
  filter: blur(20px);
  border-radius: 20px;
  z-index: -2;
  opacity: 0.8;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: #6B46C1;
  color: white;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  margin-top: 48px;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.25);
  min-width: 200px;
  text-align: center;
  position: relative;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    background: #6B46C1;
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(107, 70, 193, 0.3);
    background: #5b35b5;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    padding: 14px 28px;
    margin-top: 24px;
  }
`;

// New div to center the CTA button
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

const FinalSection = styled.section`
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;
`;

const FinalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const FinalHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #6B46C1;
  line-height: 1.2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const BrowserMockup = styled.div`
  max-width: 900px;
  margin: 0 auto 48px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  background: white;
`;

const BrowserHeader = styled.div`
  background: #f1f1f1;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BrowserDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const BrowserAddressBar = styled.div`
  background: white;
  border-radius: 8px;
  padding: 8px 16px;
  margin-left: 16px;
  flex: 1;
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '🔒';
    font-size: 12px;
  }
`;

const BrowserContent = styled.div`
  background: white;
  padding: 40px 20px;
  min-height: 400px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 20px 10px;
    min-height: auto;
  }
`;

const ResultsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const TopResultsSection = styled.div`
  margin-bottom: 48px;
`;

const TopResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }
`;

const AllResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
`;

const ResultSquare = styled.div`
  aspect-ratio: 1;
  background: ${props => props.color};
  border-radius: 8px;
  padding: ${props => props.small ? '12px' : '16px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: ${props => props.small ? '8px' : '12px'};
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.small ? '6px' : '10px'};
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
  text-align: center;
`;

const Percentage = styled.div`
  font-size: ${props => props.small ? '24px' : '32px'};
  font-weight: bold;
  color: ${props => props.textColor};
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: ${props => props.small ? '18px' : '24px'};
  }
  
  @media (max-width: 480px) {
    font-size: ${props => props.small ? '16px' : '20px'};
  }
`;

const Level = styled.div`
  font-size: ${props => props.small ? '10px' : '12px'};
  font-weight: 500;
  color: ${props => props.textColor};
  border: 1px solid ${props => props.textColor};
  border-radius: 12px;
  padding: 2px 8px;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: ${props => props.small ? '8px' : '10px'};
    padding: 2px 6px;
  }
`;

const ProgramName = styled.div`
  font-size: ${props => props.small ? '10px' : '12px'};
  color: ${props => props.textColor};
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: ${props => props.small ? '8px' : '10px'};
  }
`;

const InfoIcon = styled.span`
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: ${props => props.small ? '10px' : '12px'};
  color: ${props => props.textColor};
  opacity: 0.7;
`;

const FreeLabel = styled.div`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 20px;
  margin-top: 16px;
  font-size: 1.1rem;
  box-shadow: 0 2px 10px rgba(76, 175, 80, 0.3);
`;

const getColorByScore = (score) => {
  if (score >= 75) return '#DC2626'; // Red
  if (score >= 50) return '#FF6100'; // Orange
  if (score >= 25) return '#FFD900'; // Yellow
  return '#16A34A'; // Green
};

const getTextColorByScore = (score) => {
  if (score >= 25 && score < 50) return '#000000'; // Black text for yellow
  return '#FFFFFF'; // White text for others
};

const getLevelByScore = (score) => {
  if (score >= 75) return 'Өте жоғары';
  if (score >= 50) return 'Жоғары';
  if (score >= 25) return 'Орташа';
  return 'Төмен';
};

// New components for language toggle example
const LanguageExampleSection = styled.section`
  padding: 60px 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ExampleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ExampleHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #6B46C1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ExampleDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 40px;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
    min-height: 80px;
  }
`;

const ExampleBox = styled(motion.div)`
  background: #f8f7ff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LanguageToggleButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const AnimatedArrow = styled(motion.div)`
  position: absolute;
  color: #6B46C1;
  font-size: 24px;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${props => props.position === 'left' && `
    right: calc(100% + 16px);
  `}
  
  ${props => props.position === 'right' && `
    left: calc(100% + 16px);
  `}

  @media (max-width: 768px) {
    font-size: 20px;
    
    ${props => props.position === 'left' && `
      right: calc(100% + 8px);
    `}
    
    ${props => props.position === 'right' && `
      left: calc(100% + 8px);
    `}
  }
`;

const ArrowText = styled.span`
  font-size: 14px;
  color: #6B46C1;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const LanguageToggleButton = styled(motion.button)`
  background: white;
  border: 2px solid rgba(107, 70, 193, 0.3);
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 1.1rem;
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
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

const QuestionBox = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  min-height: 180px;
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #2D3748;
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 80px;
`;

const AnswerOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

const AnswerOption = styled.button`
  background: ${props => props.selected ? 'rgba(107, 70, 193, 0.1)' : 'white'};
  border: 2px solid ${props => props.selected ? '#6B46C1' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 8px;
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  color: ${props => props.selected ? '#6B46C1' : '#2D3748'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(107, 70, 193, 0.05);
    border-color: #6B46C1;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Hero = () => {
  // Use the updated language hook
  const { language, toggleLanguage, isMounted } = useLanguage();
  
  // Get translations based on current language
  const t = translations[language];
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroHeading
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {t.heroTitle}
            </HeroHeading>
            <HeroSubtext
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.heroSubtext}
            </HeroSubtext>
            
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PrimaryButton
                href={`https://p18.kz/?lang=${language}&utm_source=landing&utm_medium=hero_main&utm_campaign=p18test`}
                initial={{ scale: 1 }}
                animate={isMounted ? { 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 4px 12px rgba(107, 70, 193, 0.25)",
                    "0 8px 20px rgba(107, 70, 193, 0.4)",
                    "0 4px 12px rgba(107, 70, 193, 0.25)"
                  ]
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {t.ctaButton}
              </PrimaryButton>
            </ButtonGroup>
          </HeroContent>
          <HeroImageContainer>
            <FloatingElement
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            <FloatingElement2
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <PhoneMockupWrapper>
              <PhoneMockup />
            </PhoneMockupWrapper>
          </HeroImageContainer>
        </HeroContainer>
      </HeroSection>
      
      <AboutSection>
        <AboutContainer>
          <AboutHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.aboutHeading}
          </AboutHeading>
          
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.aboutText}
          </AboutText>
          
          <BenefitsList>
            {t.benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={isMounted ? { opacity: 1, x: 0 } : {}}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={isMounted ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatDelay: 1.5,
                    delay: index * 0.5
                  }}
                >
                  ✅
                </motion.span>
                {benefit}
              </BenefitItem>
            ))}
          </BenefitsList>
          
          <Emoji
            initial={{ opacity: 0 }}
            whileInView={isMounted ? { opacity: 1 } : {}}
            viewport={{ once: true }}
            animate={isMounted ? { 
              scale: [1, 1.15, 1],
              rotate: [0, 8, 0, -8, 0]
            } : {}}
            transition={{
              scale: { duration: 2.5, repeat: Infinity, repeatDelay: 1 },
              rotate: { duration: 2.5, repeat: Infinity, repeatDelay: 1 }
            }}
          >
            😌
          </Emoji>
        </AboutContainer>
      </AboutSection>

      <HowItWorksSection>
        <HowItWorksContainer>
          <HowItWorksHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.howItWorksHeading}
          </HowItWorksHeading>

          <StepsContainer>
            {t.steps.map((step, index) => (
              <Step
                key={index}
                $isMiddle={index === 1}
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={isMounted ? {
                  opacity: 1,
                  y: 0,
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 4px 20px rgba(107, 70, 193, 0.1)",
                    "0 8px 30px rgba(107, 70, 193, 0.2)",
                    "0 4px 20px rgba(107, 70, 193, 0.1)"
                  ]
                } : {}}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.2 },
                  y: { duration: 0.6, delay: index * 0.2 },
                  scale: { 
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 1
                  },
                  boxShadow: {
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 1
                  }
                }}
                viewport={{ once: true }}
              >
                {index === 1 && <StepGradient />}
                <StepNumber>
                  {step.number}
                </StepNumber>
                <StepContent>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </StepContent>
              </Step>
            ))}
          </StepsContainer>
        </HowItWorksContainer>
      </HowItWorksSection>
      
      {/* Language toggle example section */}
      <LanguageExampleSection>
        <ExampleContainer>
          <ExampleHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.languageFeatureHeading}
          </ExampleHeading>
          
          <ExampleDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.languageFeatureDescription}
          </ExampleDescription>
          
          <ExampleBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <LanguageToggleButtonContainer>
              <AnimatedArrow
                position="left"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <ArrowText>{t.arrowText} →</ArrowText>
              </AnimatedArrow>
              
              <LanguageToggleButton
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'kz' ? "🇰🇿 KZ → 🇷🇺 RU" : "🇷🇺 RU → 🇰🇿 KZ"}
              </LanguageToggleButton>
              
              <AnimatedArrow
                position="right"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <ArrowText>← {t.arrowText}</ArrowText>
              </AnimatedArrow>
            </LanguageToggleButtonContainer>
            
            <QuestionBox
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionText>
                {language === 'kz' ? t.exampleQuestionKZ : t.exampleQuestionRU}
              </QuestionText>
              <AnswerOptions>
                {t.answerOptions.map((option, index) => (
                  <AnswerOption
                    key={index}
                    selected={selectedAnswer === index}
                    onClick={() => setSelectedAnswer(index)}
                  >
                    {option}
                  </AnswerOption>
                ))}
              </AnswerOptions>
            </QuestionBox>
          </ExampleBox>
          
          {/* CTA button with proper centering */}
          <ButtonContainer>
            <CTAButton
              href={`https://p18.kz/?lang=${language}&utm_source=landing&utm_medium=how_it_works&utm_campaign=p18test`}
              initial={{ scale: 1 }}
              animate={isMounted ? { 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 12px rgba(107, 70, 193, 0.25)",
                  "0 8px 20px rgba(107, 70, 193, 0.4)",
                  "0 4px 12px rgba(107, 70, 193, 0.25)"
                ]
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              {t.ctaButton}
            </CTAButton>
          </ButtonContainer>
        </ExampleContainer>
      </LanguageExampleSection>
    </>
  );
};

export default Hero; 