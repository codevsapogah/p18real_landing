import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const translations = {
  kz: {
    completed: 'адам тесттен өтті'
  },
  ru: {
    completed: 'человек прошли тест'
  }
};

const CounterWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const CounterNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6B46C1;
  line-height: 1;
`;

const CounterText = styled.span`
  margin-left: 0.5rem;
  color: #4a5568;
  font-size: 1rem;
`;

const TestCounter = ({ language = 'ru', className = '' }) => {
  const [completedCount, setCompletedCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCount();
    const interval = setInterval(fetchCount, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchCount = async () => {
    try {
      const response = await fetch('https://kulan.kz/api/quiz-count', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCompletedCount(data.completedCount || data.count);
    } catch (err) {
      console.error('Error fetching quiz count:', err);
      setCompletedCount(0);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CounterWrapper className={className}>
      <CounterNumber>
        {isLoading ? '...' : completedCount}
      </CounterNumber>
      <CounterText>{translations[language].completed}</CounterText>
    </CounterWrapper>
  );
};

export default TestCounter; 