import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Button } from '../app/SharedStyles';
import { AiOutlineCheck } from 'react-icons/ai';

const PricingSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa, #e9edf2);
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

const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const PricingCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  
  ${props => props.popular && `
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    z-index: 1;
    
    @media (max-width: 768px) {
      transform: scale(1);
      margin: 2rem 0;
    }
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  background-color: #FF9500;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0 0 8px 8px;
  z-index: 2;
`;

const PricingHeader = styled.div`
  padding: 2rem;
  background: ${props => props.color || '#5856D6'};
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.2), transparent 70%);
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    position: relative;
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
    
    .currency {
      font-size: 1.2rem;
      vertical-align: super;
      font-weight: 600;
      margin-right: 0.2rem;
    }
  }
  
  .price-period {
    font-size: 0.9rem;
    opacity: 0.9;
    position: relative;
  }
`;

const PricingContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex-grow: 1;
  
  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #555;
    
    svg {
      color: ${props => props.color || '#5856D6'};
      margin-right: 0.8rem;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
  }
`;

const PricingButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${props => props.color || '#5856D6'};
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const pricingData = [
  {
    id: 1,
    title: 'Әуесқой',
    price: '0',
    color: '#3498DB',
    popular: false,
    features: [
      'Базалық 5 бағдарлама тестісі',
      'Қысқаша нәтиже талдауы',
      'Мобильді құрылғыда қолжетімді',
      'Тест тапсырғаннан кейін 3 күн қол жетімді'
    ]
  },
  {
    id: 2,
    title: 'Стандарт',
    price: '1990',
    color: '#5856D6',
    popular: true,
    features: [
      'Толық 18 бағдарлама тестісі',
      'Егжей-тегжейлі нәтиже талдауы',
      'Жеке даму стратегиясы',
      'Мобильді құрылғыда қолжетімді',
      'Тест нәтижелеріне 1 жыл қол жетімділік'
    ]
  },
  {
    id: 3,
    title: 'Премиум',
    price: '4990',
    color: '#2ECC71',
    popular: false,
    features: [
      'Толық 18 бағдарлама тестісі',
      'Егжей-тегжейлі нәтиже талдауы',
      'Жеке даму стратегиясы',
      'Психологпен 1 сағат консультациясы',
      'Жеке прогресті бақылау',
      'Өмір бойы қол жетімділік'
    ]
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

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <Container>
        <SectionTitle>Қол жетімді жоспарлар</SectionTitle>
        <SectionDescription>
          Өзіңізге сәйкес келетін жоспарды таңдаңыз. Біз әрқайсысыңызға сапалы тест тәжірибесін ұсынамыз.
        </SectionDescription>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <PricingCards>
            {pricingData.map(plan => (
              <PricingCard 
                key={plan.id} 
                variants={cardVariants}
                popular={plan.popular}
              >
                {plan.popular && <PopularBadge>Ең танымал</PopularBadge>}
                <PricingHeader color={plan.color}>
                  <h3>{plan.title}</h3>
                  <div className="price">
                    <span className="currency">₸</span>
                    {plan.price}
                  </div>
                  <div className="price-period">
                    {plan.price === '0' ? 'Тегін' : 'Бір реттік төлем'}
                  </div>
                </PricingHeader>
                <PricingContent>
                  <FeatureList color={plan.color}>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <AiOutlineCheck />
                        {feature}
                      </li>
                    ))}
                  </FeatureList>
                  <PricingButton color={plan.color}>
                    {plan.price === '0' ? 'Қазір бастау' : 'Сатып алу'}
                  </PricingButton>
                </PricingContent>
              </PricingCard>
            ))}
          </PricingCards>
        </motion.div>
      </Container>
    </PricingSection>
  );
};

export default Pricing; 