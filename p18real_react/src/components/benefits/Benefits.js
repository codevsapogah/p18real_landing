import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../app/SharedStyles';

// Import SVG icons
import personalizationIcon from '../../assets/images/icon-personalization.svg';
import progressIcon from '../../assets/images/icon-progress.svg';
import convenienceIcon from '../../assets/images/icon-convenience.svg';

const BenefitsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-alt);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #666;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const benefitsData = [
  {
    id: 1,
    title: 'Дәл өзіңізге сәйкес',
    description: 'Бағдарлама тесті әрбір адамның жеке ерекшеліктерін анықтайды және өзіндік психологиялық профиль жасайды.',
    icon: personalizationIcon
  },
  {
    id: 2,
    title: 'Үздіксіз даму',
    description: 'Бағдарламаларыңызды біліп, оларды түзету арқылы өзіңізді жақсы түсініп, қарым-қатынастарыңызды жақсартыңыз.',
    icon: progressIcon
  },
  {
    id: 3,
    title: 'Қолжетімді және жылдам',
    description: 'Тестті кез-келген уақытта, кез-келген құрылғыдан онлайн тапсырып, бірден нәтижелерін алыңыз.',
    icon: convenienceIcon
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Benefits = () => {
  return (
    <BenefitsSection id="benefits">
      <Container>
        <SectionTitle>П18 тестінің артықшылықтары</SectionTitle>
        <SectionDescription>
          Джеффри Янгтың бағдарлама терапиясына негізделген тестіміз нақты не береді?
        </SectionDescription>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FeaturesGrid>
            {benefitsData.map(benefit => (
              <FeatureCard key={benefit.id} variants={cardVariants}>
                <IconContainer>
                  <img src={benefit.icon} alt={benefit.title} />
                </IconContainer>
                <FeatureTitle>{benefit.title}</FeatureTitle>
                <FeatureDescription>{benefit.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </motion.div>
      </Container>
    </BenefitsSection>
  );
};

export default Benefits; 