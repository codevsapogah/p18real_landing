import React, { createContext, useContext, useState, useEffect } from 'react';

// Create language context
export const LanguageContext = createContext();

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('kz');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after initial render
    setIsMounted(true);
    
    // Check URL parameters for language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'ru' || langParam === 'kz') {
      setLanguage(langParam);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'kz' ? 'ru' : 'kz';
    setLanguage(newLanguage);
    
    // Update URL parameter without refreshing
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', newLanguage);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isMounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 