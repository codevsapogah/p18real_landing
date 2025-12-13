import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { highScores, allScores } from './PhoneMockup';
import { useLanguage } from '../../context/LanguageContext';

// Translations
const translations = {
  kz: {
    heading: "Тест нәтижесін осылай көресіз",
    ctaButton: "Тестті дәл қазір өтемін!",
    addressBar: "p18.kz/results",
    topResults: "Жоғары нәтижелер",
    allResults: "Барлық нәтижелер",
    levels: {
      veryHigh: "Өте жоғары",
      high: "Жоғары",
      medium: "Орташа",
      low: "Төмен"
    }
  },
  ru: {
    heading: "Так вы увидите результаты теста",
    ctaButton: "Пройти тест сейчас!",
    addressBar: "p18.kz/results",
    topResults: "Высокие результаты",
    allResults: "Все результаты",
    levels: {
      veryHigh: "Высокий",
      high: "Повышенный",
      medium: "Средний",
      low: "Пониженный"
    }
  }
};

const FinalSectionWrapper = styled.section`
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #6B46C1;
  line-height: 1.2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
    line-height: 1.3;
  }
`;

const BrowserMockup = styled.div`
  max-width: 1200px;
  margin: 0 auto 24px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 auto 16px;
    border-radius: 8px;
  }
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

const LanguageToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
`;

const LanguageToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background: rgba(107, 70, 193, 0.05);
  }
`;

const BrowserContent = styled.div`
  background: white;
  padding: 40px 20px;
  min-height: 400px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 15px 5px;
    min-height: auto;
  }
`;

const ResultsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 100%;
    overflow-x: hidden;
    padding: 0 5px;
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
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    margin-bottom: 15px;
  }
`;

const AllResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 3px;
    margin-bottom: 15px;
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
    padding: ${props => props.small ? '3px' : '4px'};
    border-radius: 4px;
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
    font-size: ${props => props.small ? '10px' : '12px'};
    margin-bottom: 1px;
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
    font-size: ${props => props.small ? '6px' : '7px'};
    padding: 1px 3px;
    margin-bottom: 1px;
    border-radius: 6px;
  }
`;

const ProgramName = styled.div`
  font-size: ${props => props.small ? '10px' : '12px'};
  color: ${props => props.textColor};
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: ${props => props.small ? '6px' : '7px'};
    line-height: 1;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: #6B46C1;
  color: white;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  margin-top: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.25);
  min-width: 200px;
  text-align: center;
  position: relative;
  isolation: isolate;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(107, 70, 193, 0.3);
    background: #5b35b5;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    padding: 14px 28px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
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
  const t = translations[language];
  if (score >= 75) return t.levels.veryHigh;
  if (score >= 50) return t.levels.high;
  if (score >= 25) return t.levels.medium;
  return t.levels.low;
};

const FinalSection = () => {
  const { language, isMounted, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  return (
    <FinalSectionWrapper>
      <Container>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.heading}
        </Heading>

        <BrowserMockup>
          <BrowserHeader>
            <BrowserDot color="#FF5F57" />
            <BrowserDot color="#FEBC2E" />
            <BrowserDot color="#28C840" />
            <BrowserAddressBar>{t.addressBar}</BrowserAddressBar>
          </BrowserHeader>
          
          <BrowserContent>
            <ResultsWrapper>
              <LanguageToggleContainer>
                <LanguageToggle onClick={toggleLanguage}>
                  {language === 'kz' ? '🇰🇿 KZ → 🇷🇺 RU' : '🇷🇺 RU → 🇰🇿 KZ'}
                </LanguageToggle>
              </LanguageToggleContainer>
              
              <TopResultsSection>
                <SectionHeading>{t.topResults}</SectionHeading>
                <TopResultsGrid>
                  {highScores.map((item, index) => {
                    const color = getColorByScore(item.score);
                    const textColor = getTextColorByScore(item.score);
                    return (
                      <ResultSquare
                        key={index}
                        color={color}
                      >
                        <Percentage textColor={textColor}>{item.score}%</Percentage>
                        <Level textColor={textColor}>{getLevelByScore(item.score, language)}</Level>
                        <ProgramName textColor={textColor}>{language === 'kz' ? item.name_kz : item.name_ru}</ProgramName>
                      </ResultSquare>
                    );
                  })}
                </TopResultsGrid>
                
                <SectionHeading>{t.allResults}</SectionHeading>
                <AllResultsGrid>
                  {allScores.map((item, index) => {
                    const color = getColorByScore(item.score);
                    const textColor = getTextColorByScore(item.score);
                    return (
                      <ResultSquare
                        key={index}
                        color={color}
                        small
                      >
                        <Percentage textColor={textColor} small>{item.score}%</Percentage>
                        <Level textColor={textColor} small>{getLevelByScore(item.score, language)}</Level>
                        <ProgramName textColor={textColor} small>{language === 'kz' ? item.name_kz : item.name_ru}</ProgramName>
                      </ResultSquare>
                    );
                  })}
                </AllResultsGrid>
              </TopResultsSection>
            </ResultsWrapper>
          </BrowserContent>
        </BrowserMockup>
        
        <CTAButton
          href={`https://p18.kz/?lang=${language}&utm_source=landing&utm_medium=results&utm_campaign=p18test`}
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
      </Container>
    </FinalSectionWrapper>
  );
};

export default FinalSection; 