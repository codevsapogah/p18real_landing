/* eslint-disable no-unused-vars, react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import TestCounter from '../TestCounter';

// Translations
const translations = {
  kz: {
    heading: "Біздің қатысушылардың пікірлері",
    counter: "адам тестті өтті",
    ctaButton: "Тестті дәл қазір өтемін!",
    testimonials: [
      {
        text: "Бұл тест менің өмірімдегі қайталанатын мәселелердің себебін ашып берді. Енді мен оларды қалай шешу керектігін түсіндім!",
        author: "Айнұр",
        age: "32 жас"
      },
      {
        text: "Нәтижелері дәл келді! Бұрын мән бермеген жарақаттарым қазіргі өміріме әсер етіп жатқанын түсіндім.",
        author: "Ержан",
        age: "28 жас"
      },
      {
        text: "Құлан мырза тест 🔥🔥🔥\nҚойылып жатқан сұрақтардың өзінен өзімді танып қалдым гой",
        author: "Қатысушы",
        age: "25 жас"
      },
      {
        text: "Галлап қазақша вариант қой 👍🏼, сұрақтары жақсы екен, тапсырып отырып өзімді бақылап, параллельно кейбір тұстарда тереңірек танып отырғандай сезім болды, дәл мені көріп сұрақ қойып жатқандай ✅",
        author: "Қатысушы",
        age: "34 жас"
      }
    ]
  },
  ru: {
    heading: "Отзывы наших участников",
    counter: "человек прошли тест",
    ctaButton: "Пройти тест сейчас!",
    testimonials: [
      {
        text: "Этот тест раскрыл причины повторяющихся проблем в моей жизни. Теперь я понимаю, как их решить!",
        author: "Айнур",
        age: "32 года"
      },
      {
        text: "Результаты оказались точными! Я понял, что травмы, на которые я раньше не обращал внимания, влияют на мою нынешнюю жизнь.",
        author: "Ержан",
        age: "28 лет"
      },
      {
        text: "Тест Кулан мырзы 🔥🔥🔥\nЯ узнал себя уже в самих вопросах, которые задавались",
        author: "Участник",
        age: "25 лет"
      },
      {
        text: "Казахская версия Галлапа 👍🏼, хорошие вопросы, проходя тест, я наблюдал за собой и параллельно чувствовал, что в некоторых местах узнавал себя глубже, как будто видели меня и задавали вопросы ✅",
        author: "Участник",
        age: "34 года"
      }
    ]
  }
};

const TestimonialsSection = styled.section`
  padding: 80px 0;
  background: #f8f7ff;
  position: relative;
  overflow: visible;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const TestimonialsHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #6B46C1;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const TestimonialCard = styled(motion.div)`
  flex: 0 0 300px;
  height: 320px;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.1);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &.active {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(107, 70, 193, 0.2);
  }
  
  &.side {
    opacity: 0.6;
    filter: blur(1px);
    transform: scale(0.9);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 280px;
    height: 340px;
    padding: 20px;
    
    &.active {
      transform: scale(1);
      box-shadow: 0 8px 24px rgba(107, 70, 193, 0.2);
    }
    
    &.side {
      display: none;
    }
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #2D3748;
  margin: 0;
  white-space: pre-line;
`;

const TestimonialAuthorInfo = styled.div`
  margin-top: auto;
  border-top: 1px solid rgba(107, 70, 193, 0.1);
  padding-top: 12px;
`;

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: #6B46C1;
`;

const TestimonialAge = styled.div`
  color: #718096;
  font-size: 0.9rem;
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
  }
`;

const TestimonialsWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: visible;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 60px;
  }
`;

const TestimonialsTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  color: #6B46C1;
  
  &:hover {
    background: #f8f7ff;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    background: white;
    box-shadow: 0 4px 12px rgba(107, 70, 193, 0.2);
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  }
`;

const Testimonials = () => {
  const { language, isMounted } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const visibleTestimonials = useMemo(() => {
    const total = t.testimonials.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [
      t.testimonials[prev],
      t.testimonials[currentIndex],
      t.testimonials[next]
    ];
  }, [currentIndex, t.testimonials]);
  
  const slideLeft = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= t.testimonials.length) {
        return 0;
      }
      return newIndex;
    });
  };
  
  const slideRight = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return t.testimonials.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.heading}
        </TestimonialsHeading>
        
        <TestCounter language={language} />
        
        <TestimonialsWrapper>
          <NavigationButton className="prev" onClick={slideRight}>
            ←
          </NavigationButton>
          
          <TestimonialsTrack
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, { offset, velocity }) => {
              setIsDragging(false);
              if (Math.abs(velocity.x) > 400) {
                if (velocity.x > 0) {
                  slideRight();
                } else {
                  slideLeft();
                }
              }
            }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                className={index === 1 ? 'active' : 'side'}
                whileHover={!isDragging && index === 1 ? { scale: 1.12 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TestimonialContent>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                </TestimonialContent>
                <TestimonialAuthorInfo>
                  <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
                  <TestimonialAge>{testimonial.age}</TestimonialAge>
                </TestimonialAuthorInfo>
              </TestimonialCard>
            ))}
          </TestimonialsTrack>
          
          <NavigationButton className="next" onClick={slideLeft}>
            →
          </NavigationButton>
        </TestimonialsWrapper>
        
        <CTAButton
          href={`https://p18.kz/?lang=${language}&utm_source=landing&utm_medium=testimonials&utm_campaign=p18test`}
          initial={{ scale: 1 }}
          animate={isMounted ? { 
            scale: [1, 1.03, 1],
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
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials; 