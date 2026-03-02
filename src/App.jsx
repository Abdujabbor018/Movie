import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import { BarLoader } from 'react-spinners'; 
import Banner from './Components/Banner/Banner';
import './App.css';

const App = () => {
  const [lang, setLang] = useState('uz');
  const [isDark, setIsDark] = useState(true);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <div className="app-wrapper">
      {loading ? (
        <div className="loader-container">
          <BarLoader color={isDark ? "red" : "#333"} size={15} margin={5} />
          <p style={{ marginTop: '20px', color: isDark ? '#fff' : '#000' }}>
             {lang === 'uz' ? 'Please Wait...' : 'Loading...'}
          </p>
        </div>
      ) : (
        <>
          <Header 
            lang={lang} 
            setLang={setLang} 
            isDark={isDark} 
            setIsDark={setIsDark} 
          />
<Banner lang={lang} isDark={isDark} />


          <main style={{ marginTop: '80px' }}> 
            <Cards lang={lang} />
          </main>
        </>
      )}
    </div>
  );
};

export default App;