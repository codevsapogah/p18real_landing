import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../app/SharedStyles';

const SchemasSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
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

const SchemaCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SchemaCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const SchemaHeader = styled.div`
  background: ${props => props.color || '#5856D6'};
  color: white;
  padding: 1.5rem;
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
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    position: relative;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.9;
    position: relative;
  }
`;

const SchemaContent = styled.div`
  padding: 1.5rem;
  
  p {
    margin-bottom: 1rem;
    color: #555;
    line-height: 1.6;
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      color: #555;
    }
  }
`;

const PatternTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const schemaData = [
  {
    id: 1,
    title: 'Қосылу және тұрақсыздық',
    category: 'Қосылу домені',
    color: '#E74C3C',
    description: 'Бұл домен тастап кету, сенімсіздік және эмоционалды депривация сияқты бағдарламаларды қамтиды.',
    patterns: [
      'Тастап кету/тұрақсыздық',
      'Сенімсіздік/жәбірлеу',
      'Эмоционалды депривация',
      'Кемшілік/ұят'
    ]
  },
  {
    id: 2,
    title: 'Автономия мен өнімділік',
    category: 'Автономия домені',
    color: '#3498DB',
    description: 'Бұл домен байланыс, сәтсіздік және осалдық сезімдерін қамтиды.',
    patterns: [
      'Байланыс/ашылмау',
      'Сәтсіздік',
      'Тәуелділік/құзыретсіздік',
      'Осалдық'
    ]
  },
  {
    id: 3,
    title: 'Шекаралар',
    category: 'Шекаралар домені',
    color: '#2ECC71',
    description: 'Бұл домен құқылық және өзін-өзі бақылаудың жеткіліксіздігі бағдарламаларын қамтиды.',
    patterns: [
      'Құқылық/данышпандық',
      'Өзін-өзі бақылаудың жеткіліксіздігі'
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

const Schemas = () => {
  return (
    <SchemasSection id="schemas">
      <Container>
        <SectionTitle>Бағдарламалар доменімен танысыңыз</SectionTitle>
        <SectionDescription>
          Джеффри Янгтың бағдарлама терапиясы 5 домен мен 18 бағдарламаны анықтайды. Бұл топтамалар әртүрлі балалық шақ қажеттіліктеріне және бұзылған мінез-құлық үлгілеріне сәйкес келеді.
        </SectionDescription>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SchemaCards>
            {schemaData.map(schema => (
              <SchemaCard key={schema.id} variants={cardVariants}>
                <SchemaHeader color={schema.color}>
                  <h3>{schema.title}</h3>
                  <p>{schema.category}</p>
                </SchemaHeader>
                <SchemaContent>
                  <p>{schema.description}</p>
                  <PatternTitle>Негізгі бағдарламалар:</PatternTitle>
                  <ul>
                    {schema.patterns.map((pattern, index) => (
                      <li key={index}>{pattern}</li>
                    ))}
                  </ul>
                </SchemaContent>
              </SchemaCard>
            ))}
          </SchemaCards>
        </motion.div>
      </Container>
    </SchemasSection>
  );
};

export default Schemas; 