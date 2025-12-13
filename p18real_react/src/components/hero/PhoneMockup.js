/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { FaArrowDown, FaChevronDown, FaExchangeAlt } from "react-icons/fa";
import { useLanguage } from '../../context/LanguageContext';

// Keep the language toggle components for use in separate section
const LanguageToggleButton = styled(motion.button)`
  background: white;
  border: 1px solid rgba(107, 70, 193, 0.3);
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #6B46C1;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(107, 70, 193, 0.1);
  
  &:hover {
    background: rgba(107, 70, 193, 0.05);
  }
`;

const QuestionBubble = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const QuestionText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

// Export the results content for reuse
export const ResultsContent = () => (
  <div style={{ padding: '20px', textAlign: 'left' }}>
    <h3 style={{ 
      fontSize: '1.5rem', 
      fontWeight: '700', 
      color: '#6B46C1', 
      marginBottom: '16px' 
    }}>
      Сіздің нәтижелеріңіз:
    </h3>
    
    <div style={{ 
      background: 'white', 
      borderRadius: '12px', 
      padding: '16px', 
      marginBottom: '16px',
      boxShadow: '0 2px 8px rgba(107, 70, 193, 0.1)'
    }}>
      <h4 style={{ 
        fontSize: '1.1rem', 
        fontWeight: '600', 
        color: '#2D3748', 
        marginBottom: '8px' 
      }}>
        Жоғары көрсеткіштер:
      </h4>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0 
      }}>
        <li style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '8px' 
        }}>
          <span style={{ color: '#6B46C1' }}>●</span>
          Жетістікке жету (85%)
        </li>
        <li style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '8px' 
        }}>
          <span style={{ color: '#6B46C1' }}>●</span>
          Өзін-өзі құрбан ету (78%)
        </li>
        <li style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <span style={{ color: '#6B46C1' }}>●</span>
          Мінсіздікке ұмтылу (72%)
        </li>
      </ul>
    </div>
    
    <div style={{ 
      background: 'white', 
      borderRadius: '12px', 
      padding: '16px',
      boxShadow: '0 2px 8px rgba(107, 70, 193, 0.1)'
    }}>
      <h4 style={{ 
        fontSize: '1.1rem', 
        fontWeight: '600', 
        color: '#2D3748', 
        marginBottom: '8px' 
      }}>
        Даму бағыттары:
      </h4>
      <p style={{ 
        fontSize: '1rem', 
        color: '#4A5568', 
        lineHeight: '1.6', 
        margin: 0 
      }}>
        Сіздің негізгі бағдарламаларыңыз өзіңізге деген жоғары талаптармен байланысты. Бұл жетістіктерге жетуге көмеkтескенімен, эмоционалды шаршауға әкелуі мүмкін.
      </p>
    </div>
  </div>
);

const PhoneFrame = styled(motion.div)`
  position: relative;
  height: 580px;
  width: 340px;
  border-radius: 24px;
  border: 2px solid white;
  border-bottom-width: 4px;
  border-right-width: 4px;
  border-left-color: #e5e5e5;
  border-top-color: #e5e5e5;
  background: #171717;
  padding: 1px 1px 1px 3px;

  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 460px;
  }
`;

const PhoneContainer = styled(motion.div)`
  transform-style: preserve-3d;
  transform: rotateY(-30deg) rotateX(15deg);
  background: #7c3aed;
  border-radius: 24px;
  padding: 0;
  transition: transform 0.3s ease;

  @media (hover: hover) {
    &:hover {
      transform: rotateY(-35deg) rotateX(12deg);
    }
  }

  @media (max-width: 992px) {
    animation: slowRotate 10s infinite alternate ease-in-out;
  }

  @keyframes slowRotate {
    0% {
      transform: rotateY(-30deg) rotateX(15deg);
    }
    100% {
      transform: rotateY(-25deg) rotateX(18deg);
    }
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  overflow-y: auto;
  position: relative;
  z-index: 0;
`;

const HeaderBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotchContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: 64px;
  height: 8px;
  background: #171717;
  border-radius: 6px;
  z-index: 10;
`;

const StatusIcons = styled.div`
  position: absolute;
  right: 12px;
  top: 8px;
  display: flex;
  gap: 8px;
  z-index: 10;
  color: #666;
`;

export const Header = styled.div`
  width: 100%;
  padding: 12px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoText = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  background: transparent;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: rgba(107, 70, 193, 0.05);
  }

  span.current {
    color: #000;
  }

  span.arrow {
    color: #9CA3AF;
  }
`;

// Update LanguageContainer to position the sticker to the far right
const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ResultCardContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 8px;
`;

export const ResultCard = styled.div`
  width: 100%;
  background: #6B46C1;
  padding: 16px;
  color: white;
  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const InfoText = styled.p`
  font-size: 11px;
  line-height: 16px;
  margin: 2px 0;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  margin: 12px 0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const ViewButton = styled.button`
  flex: 1;
  height: 32px;
  border: none;
  background: ${props => props.active ? '#fff' : 'transparent'};
  color: ${props => props.active ? '#6B46C1' : '#fff'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
`;

export const DownloadButton = styled.button`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: white;
  border: none;
  border-radius: 6px;
  color: #6B46C1;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const ResultsSection = styled.div`
  padding: 16px 0;
  max-width: 100%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 8px 0;
  color: #111827;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 16px;
  padding: 0 8px;
`;

const SmallResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding: 0 8px;
  margin-bottom: 16px;
`;

const ResultSquare = styled.div`
  aspect-ratio: 1;
  background: ${props => props.color};
  border-radius: 8px;
  padding: ${props => props.small ? '6px' : '8px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const Percentage = styled.div`
  font-size: ${props => props.small ? '16px' : '24px'};
  font-weight: bold;
  color: ${props => props.textColor};
  margin-bottom: 2px;
`;

const Level = styled.div`
  font-size: ${props => props.small ? '8px' : '10px'};
  font-weight: 500;
  color: ${props => props.textColor};
  border: 1px solid ${props => props.textColor};
  border-radius: 12px;
  padding: 1px 6px;
  margin-bottom: 2px;
`;

const ProgramName = styled.div`
  font-size: ${props => props.small ? '7px' : '10px'};
  color: ${props => props.textColor};
  text-align: center;
  line-height: 1.1;
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

const getLevelByScore = (score, language) => {
  const t = translations[language || 'kz'];
  if (score >= 75) return t.levels.veryHigh;
  if (score >= 50) return t.levels.high;
  if (score >= 25) return t.levels.medium;
  return t.levels.low;
};

// Export the data arrays
export const highScores = [
  { 
    id: 1, 
    score: 76, 
    name_kz: 'Басқаға еру', 
    name_ru: 'Растворение'
  },
  { 
    id: 2, 
    score: 68, 
    name_kz: 'Бағыну', 
    name_ru: 'Подчинение'
  },
  { 
    id: 3, 
    score: 68, 
    name_kz: 'Ережелер', 
    name_ru: 'Инструкции'
  },
  { 
    id: 4, 
    score: 64, 
    name_kz: 'Қабылданбау', 
    name_ru: 'Отверженность'
  },
  { 
    id: 5, 
    score: 64, 
    name_kz: 'Мойындалуды іздеу', 
    name_ru: 'Поиск признания'
  }
];

export const allScores = [
  { 
    id: 1, 
    score: 56, 
    name_kz: 'Эмоционалды аштық', 
    name_ru: 'Эмоциональный голод'
  },
  { 
    id: 2, 
    score: 20, 
    name_kz: 'Тастанды', 
    name_ru: 'Покинутость'
  },
  { 
    id: 3, 
    score: 48, 
    name_kz: 'Пайдалану', 
    name_ru: 'Использование'
  },
  { 
    id: 4, 
    score: 64, 
    name_kz: 'Қабылданбау', 
    name_ru: 'Отверженность'
  },
  { 
    id: 5, 
    score: 48, 
    name_kz: 'Сынық', 
    name_ru: 'Поломанность'
  },
  { 
    id: 6, 
    score: 44, 
    name_kz: 'Сәтсіздік', 
    name_ru: 'Провал'
  },
  { 
    id: 7, 
    score: 56, 
    name_kz: 'Дәрменсіздік', 
    name_ru: 'Беспомощность'
  },
  { 
    id: 8, 
    score: 4, 
    name_kz: 'Болжам', 
    name_ru: 'Пророчество'
  },
  { 
    id: 9, 
    score: 76, 
    name_kz: 'Басқаға еру', 
    name_ru: 'Растворение'
  },
  { 
    id: 10, 
    score: 68, 
    name_kz: 'Бағыну', 
    name_ru: 'Подчинение'
  },
  { 
    id: 11, 
    score: 40, 
    name_kz: 'Өзін құрбан ету', 
    name_ru: 'Самопожертвование'
  },
  { 
    id: 12, 
    score: 48, 
    name_kz: 'Эмоцияны ұстау', 
    name_ru: 'Эмоциональная ингибиция'
  },
  { 
    id: 13, 
    score: 44, 
    name_kz: 'Перфекционизм', 
    name_ru: 'Перфекционизм'
  },
  { 
    id: 14, 
    score: 48, 
    name_kz: 'Менмендік', 
    name_ru: 'Надменность'
  },
  { 
    id: 15, 
    score: 32, 
    name_kz: 'Дисциплина жоқтығы', 
    name_ru: 'Отсутствие дисциплины'
  },
  { 
    id: 16, 
    score: 64, 
    name_kz: 'Мойындалуды іздеу', 
    name_ru: 'Поиск признания'
  },
  { 
    id: 17, 
    score: 44, 
    name_kz: 'Пессимизм', 
    name_ru: 'Пессимизм'
  },
  { 
    id: 18, 
    score: 68, 
    name_kz: 'Ережелер', 
    name_ru: 'Инструкции'
  }
];

// Add the translations for phone mockup UI elements
const translations = {
  kz: {
    greeting: "Сәлем, сіздің P18 тестінің нәтижелері",
    date: "1 сәуір 2025 ж.",
    coachLabel: "Коуч:",
    coachName: "Құлан",
    listView: "Тізім",
    gridView: "Торлы көрініс",
    downloadPdf: "PDF жүктеу",
    topResults: "Жоғары нәтижелер",
    allResults: "Барлық нәтижелер",
    free: "Тегін!",
    levels: {
      veryHigh: "Өте жоғары",
      high: "Жоғары",
      medium: "Орташа",
      low: "Төмен"
    }
  },
  ru: {
    greeting: "Привет, вот ваши результаты теста P18",
    date: "1 марта 2025 г.",
    coachLabel: "Коуч:",
    coachName: "Кулан",
    listView: "Список",
    gridView: "Сетка",
    downloadPdf: "Скачать PDF",
    topResults: "Высокие результаты",
    allResults: "Все результаты",
    free: "Бесплатно!",
    levels: {
      veryHigh: "Высокий",
      high: "Повышенный",
      medium: "Средний",
      low: "Пониженный"
    }
  }
};

// Update FREE sticker position and style
const FreeSticker = styled(motion.div)`
  position: relative;
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.4);
`;

// Modify scroll prompt 
const ScrollPrompt = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 10;
`;

const ArrowContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6B46C1;
  font-size: 16px;
  filter: drop-shadow(0 0 5px rgba(107, 70, 193, 0.8));
`;

const PhoneMockup = () => {
  // Add ref and animation controls
  const phoneScreenRef = useRef(null);
  const scrollControls = useAnimationControls();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language || 'kz'];
  
  // Create scroll animation 
  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        // Wait a bit before starting the animation
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Only animate if user hasn't scrolled yet
        if (phoneScreenRef.current && !hasScrolled) {
          await scrollControls.start({
            y: 60,
            transition: { duration: 1, ease: "easeInOut" }
          });
          
          // Wait a moment
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Scroll back up
          await scrollControls.start({
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          });
        }
      }
    };
    
    animateScroll();
  }, [scrollControls, hasScrolled]);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (phoneScreenRef.current && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    
    const phoneScreen = phoneScreenRef.current;
    if (phoneScreen) {
      phoneScreen.addEventListener('scroll', handleScroll);
      
      return () => {
        phoneScreen.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasScrolled]);

  return (
    <PhoneContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PhoneFrame
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <NotchContainer />
        <StatusIcons>
          <FiWifi />
          <FiBatteryCharging />
        </StatusIcons>
        
        <PhoneScreen ref={phoneScreenRef}>
          <Header>
            <LogoContainer>
              <LogoText>P18</LogoText>
            </LogoContainer>
            <LanguageContainer>
              <LanguageButton onClick={toggleLanguage}>
                <span className="current">{language === 'kz' ? '🇰🇿 KZ' : '🇷🇺 RU'}</span>
                <span className="arrow">{language === 'kz' ? '→ 🇷🇺 RU' : '→ 🇰🇿 KZ'}</span>
              </LanguageButton>
              <FreeSticker
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  scale: { duration: 0.5, delay: 0.8 },
                  opacity: { duration: 0.5, delay: 0.8 }
                }}
              >
                {t.free}
              </FreeSticker>
            </LanguageContainer>
          </Header>
          
          <motion.div animate={scrollControls}>
            <ResultCardContainer>
              <ResultCard>
                <Title>{t.greeting}</Title>
                <InfoText>{t.date}</InfoText>
                <InfoText>example@gmail.com</InfoText>
                <InfoText>{t.coachLabel} {t.coachName}</InfoText>
                <ButtonGroup>
                  <ViewButton>{t.listView}</ViewButton>
                  <ViewButton active>{t.gridView}</ViewButton>
                </ButtonGroup>
                <DownloadButton>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 13.3333L10 16.6667M10 16.6667L6.66667 13.3333M10 16.6667V3.33333" stroke="#6B46C1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.downloadPdf}
                </DownloadButton>
              </ResultCard>
            </ResultCardContainer>
            
            <ResultsSection>
              <SectionTitle>{t.topResults}</SectionTitle>
              <ResultsGrid>
                {highScores.map(score => (
                  <ResultSquare 
                    key={score.id} 
                    color={getColorByScore(score.score)}
                  >
                    <Percentage textColor={getTextColorByScore(score.score)}>
                      {score.score}%
                    </Percentage>
                    <Level textColor={getTextColorByScore(score.score)}>
                      {getLevelByScore(score.score, language)}
                    </Level>
                    <ProgramName textColor={getTextColorByScore(score.score)}>
                      {language === 'kz' ? score.name_kz : score.name_ru}
                    </ProgramName>
                  </ResultSquare>
                ))}
              </ResultsGrid>
              <SectionTitle>{t.allResults}</SectionTitle>
              <SmallResultsGrid>
                {allScores.map(score => (
                  <ResultSquare 
                    key={score.id} 
                    color={getColorByScore(score.score)}
                    small
                  >
                    <Percentage small textColor={getTextColorByScore(score.score)}>
                      {score.score}%
                    </Percentage>
                    <Level small textColor={getTextColorByScore(score.score)}>
                      {getLevelByScore(score.score, language)}
                    </Level>
                    <ProgramName small textColor={getTextColorByScore(score.score)}>
                      {language === 'kz' ? score.name_kz : score.name_ru}
                    </ProgramName>
                  </ResultSquare>
                ))}
              </SmallResultsGrid>
            </ResultsSection>
          </motion.div>
        </PhoneScreen>
        
        {/* Only show scroll prompt if user hasn't scrolled yet */}
        {!hasScrolled && (
          <ScrollPrompt
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ArrowContainer
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <FaChevronDown />
              <FaChevronDown style={{ marginTop: -10 }} />
              <FaChevronDown style={{ marginTop: -10 }} />
            </ArrowContainer>
          </ScrollPrompt>
        )}
      </PhoneFrame>
    </PhoneContainer>
  );
};

export default PhoneMockup;