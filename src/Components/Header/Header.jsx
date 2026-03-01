import React from 'react';
import './Header.css';
import Logo from './15-150967_movies-logo-hd-png-download-removebg-preview.png'; 

const Header = ({ lang, setLang }) => {
  return (
    <header className="navbar">
      <div className="container navbar-wrapper">
        <div className="logo-section">
          <img src={Logo} alt="Logo" className="logo" />
          <span className="brand-name">CineZone</span>
        </div>

        <nav className="navbar-list">
          <a href="#" className="navbar-link">{lang === 'uz' ? 'Bosh sahifa' : 'Home'}</a>
          <a href="#" className="navbar-link">{lang === 'uz' ? 'Kinolar' : 'Movies'}</a>
          <a href="#" className="navbar-link">{lang === 'uz' ? 'Janrlar' : 'Genres'}</a>
        </nav>

        <div className="navbar-controls">
          <select 
            className="lang-select" 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
          <button className="login-btn">{lang === 'uz' ? 'Kirish' : 'Login'}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;