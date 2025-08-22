import React from 'react';
import { FiMoon } from 'react-icons/fi';

const logo = '/assets/light theme logo.png';

const HeaderStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Jersey+20&display=swap');

      .app-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #ffffff;
      
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
        background-color: #f0f0f0;
        border-bottom: 1px solid #e0e0e0;
        opacity: 0.8;

      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .pixel-triangle {
        width: 0;
        height: 0;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-right: 16px solid black;
        image-rendering: pixelated;
        
      }

      .header-logo {
        font-family: "Jersey 20", sans-serif;
        font-size: 50px;
        color: black;
      }

      .logo-relative {
        position: relative;
        display: inline-block;
      }

      .pixel-text {
        position: relative;
        font-family: 'Jersey 20', sans-serif;
        font-size: 100px;
        color: black;
        z-index: 2;
      }

      .cat-behind {
        position: absolute;
        left: 75px; /* sesuaikan jarak dari kiri */
        top: -10px; /* sesuaikan tinggi */
        height: 80px;
        z-index: 1;
        opacity: 1;
        pointer-events: none;
        object-fit: cover;
        zoom: 1.8;
      
      }

      .theme-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .theme-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
        display: flex;
        align-items: center;
        justify-content: flex-end; 
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
      }

      .moon-icon {
        font-size: 20px;
        color: #f1c40f;
        margin-right: 8px; 
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .theme-switch input:checked + .slider {
        background-color: #4A4A4A;
      }

      .theme-switch input:checked + .slider:before {
        transform: translateX(26px);
      }

      .theme-switch input:checked + .slider .moon-icon {
        opacity: 1;
      }

      .splash-screen {
        flex-grow: 1;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center; 
        font-family: 'Jersey 20', sans-serif;
        padding-bottom: 50px;
        background-color: #ffffff;
        color: black;
  
      }

      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
        font-weight: bold;
        min-width: 100%;
      }

      .pixel-text {
        font-family: 'Jersey 20', monospace;
        font-size: 100px;
        color: black;
        
      }

      .cat-img {
        height: 80px;
        margin-left: -30px;
        margin-top: -5px;
        
      }

      .search-bar-container {
        display: flex;
        align-items: center;
        background-color: #f6f6f6;
        border-radius: 30px;
        padding: 5px;
        width: 60%;
        max-width: 600px;

      }

      .music-tab {
        padding: 10px 16px;
        background-color: grey;
        border-right: 1px solid #ccc;
        border-radius: 30px 0 0 30px;
        font-size: 14px;
        color:white;
      }

      .search-input {
        flex: 1;
        padding: 10px;
        border: none;
        outline: none;
        background: transparent;
        font-size: 20px;
      }

      .search-button {
        padding: 0 15px;
        font-size: 18px;
        background: none;
        border: none;
        cursor: pointer;
      }
    `}
  </style>
);


const Header = () => {
    
  function changePage(url){
    window.location = url;
  }
  
  return (
    <header className="header">
      <div className="header-left">
        <div className="pixel-triangle" onClick={() => changePage('Home')}></div>
        <span className="header-logo">PiCat</span>
      </div>
      <label className="theme-switch">
        <input type="checkbox" />
        <span className="slider">
          <FiMoon className="moon-icon" />
        </span>
      </label>
    </header>
  );
};

const MainContent = () => {
  return (
    <div className="splash-screen">
      <div className="logo-container">
        <div className="logo-relative">
          <span className="pixel-text">PiCat</span>
          <img src={logo} alt="cat" className="cat-behind" />
        </div>
      </div>

      <div className="search-bar-container">
        <div className="music-tab">MUSIC</div>
        <input type="text" className="search-input" placeholder="Search bar" />
        <button className="search-button">🔍</button>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <>
      <HeaderStyles />
      <div className="app-wrapper">
        <Header />
        <MainContent />
      </div>
    </>
  );
};

export default App;
