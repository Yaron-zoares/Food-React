import React, { useEffect, useRef } from 'react';
import { initLanguageSelector } from './LanguageSelector';
import './Header.css';

const Header = () => {
  const languageContainerRef = useRef(null);

  useEffect(() => {
    if (languageContainerRef.current) {
      initLanguageSelector('language-selector-container');
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🍳 CuisineBot</h1>
          <p>Discover Amazing Recipes</p>
        </div>
        <div id="language-selector-container" ref={languageContainerRef}></div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#favorites">Favorites</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 