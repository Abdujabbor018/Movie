import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import './App.css';

const App = () => {
  // 1. Til holati (default: o'zbekcha)
  const [lang, setLang] = useState('uz');

  // 2. Mavzu holati (default: dark mode)
  const [isDark, setIsDark] = useState(true);

  // Mavzu o'zgarganda body klassini yangilash (oq joylar qolmasligi uchun)
  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <div className="app-wrapper">
      <Header 
        lang={lang} 
        setLang={setLang} 
        isDark={isDark} 
        setIsDark={setIsDark} 
      />
      <main style={{ marginTop: '80px' }}> 
        <Cards lang={lang} />
      </main>
    </div>
  );
};

export default App;