import styled from 'styled-components';
import { motion } from 'framer-motion';

// Layout Components
export const Section = styled.section`
  padding: 100px 0;
  position: relative;
  background-color: ${props => props.background || 'var(--background-color)'};

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '30px'};

  @media (max-width: 992px) {
    grid-template-columns: repeat(${props => props.tabletColumns || 2}, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(${props => props.mobileColumns || 1}, 1fr);
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap || 'nowrap'};

  @media (max-width: 768px) {
    flex-direction: ${props => props.responsiveDirection || props.direction || 'column'};
  }
`;

// Typography Components
export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: ${props => props.marginBottom || '20px'};
  text-align: ${props => props.align || 'center'};
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: ${props => props.marginBottom || '40px'};
  text-align: ${props => props.align || 'center'};
  color: var(--text-secondary);
  max-width: ${props => props.maxWidth || '700px'};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

// UI Components
export const Button = styled.a`
  display: inline-block;
  background: ${props => props.primary ? 'linear-gradient(to right, var(--primary-color), var(--accent-color))' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  font-weight: 600;
  padding: ${props => props.small ? '10px 20px' : '14px 28px'};
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.3s ease;
  border: ${props => props.primary ? 'none' : '2px solid var(--primary-color)'};
  box-shadow: ${props => props.primary ? '0 4px 12px rgba(88, 86, 214, 0.25)' : 'none'};
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.primary ? '0 8px 20px rgba(88, 86, 214, 0.3)' : 'none'};
    background: ${props => props.primary ? 'linear-gradient(to right, var(--primary-color), var(--accent-color))' : 'rgba(88, 86, 214, 0.1)'};
  }
`;

export const Card = styled.div`
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: ${props => props.padding || '30px'};
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

// Animation Variants
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export const slideIn = (direction = "left") => {
  return {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
}; 