import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Section = styled.section`
  padding: 4rem 0;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(88, 86, 214, 0.3);

  &:hover {
    background-color: #4745c7;
    transform: translateY(-2px);
  }

  &.pulse {
    animation: pulse 2s infinite;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'space-between'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '1rem'};

  @media (max-width: 768px) {
    flex-direction: ${props => props.mobiledirection || props.direction || 'column'};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '1.5rem'};

  @media (max-width: 992px) {
    grid-template-columns: repeat(${props => props.tabletColumns || 2}, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(${props => props.mobileColumns || 1}, 1fr);
  }
`;

export const Card = styled.div`
  background-color: var(--card-background);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px var(--shadow-color);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 0.5rem auto 1.5rem;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  color: var(--light-text);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const FadeInAnimation = styled.div`
  opacity: 0;
  animation: fadeIn 0.8s forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

export const Image = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  object-fit: ${props => props.fit || 'cover'};
  border-radius: ${props => props.radius || '0'};
`;

export const GradientBackground = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
`;

export const Badge = styled.span`
  background-color: ${props => `var(--${props.color || 'primary'}-color)`};
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  width: ${props => props.size || '48px'};
  height: ${props => props.size || '48px'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.background || 'rgba(88, 86, 214, 0.1)'};
  margin-bottom: 1rem;
  color: ${props => props.color || 'var(--primary-color)'};
`; 