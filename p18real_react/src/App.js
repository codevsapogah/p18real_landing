import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './components/app/GlobalStyles';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/Footer';
import Testimonials from './components/testimonials/Testimonials';
import FinalSection from './components/hero/FinalSection';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Hero />
      <Testimonials />
      <FinalSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
