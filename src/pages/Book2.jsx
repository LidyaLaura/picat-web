import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiMoon } from 'react-icons/fi';

const logo = '/assets/light theme logo.png';

const HeaderStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Jersey+20&display=swap');

      html, body {
        height: 100%;
        margin: 0;
        overflow: hidden; /* hilangkan scroll */
      }

      .app-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh; /* full layar */
        background-color: #ffffff;
      }

      /* Header */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
        background-color: #f0f0f0;
        border-bottom: 1px solid #e0e0e0;
        opacity: 0.9;
        height: 60px; /* fix tinggi header */
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
        cursor: pointer;
      }
      .header-logo {
        font-family: "Jersey 20", sans-serif;
        font-size: 40px;
        color: black;
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

      /* Kontainer isi utama */
      .content-wrapper {
        flex: 1;
        display: grid;
        grid-template-rows: 1fr 1fr; /* bagi 2 sama besar */
        overflow: hidden;
      }

      /* Splash screen */
      .splash-screen {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center; 
        font-family: 'Jersey 20', sans-serif;
        background-color: #ffffff;
        color: black;
        height: 100%;
      }

      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
        font-weight: bold;
        min-width: 100%;
        position: relative;
      }
      .logo-relative {
        position: relative;
        display: inline-block;
      }
      .pixel-text {
        font-family: 'Jersey 20', monospace;
        font-size: 100px;
        color: black;
        position: relative;
        z-index: 2;
      }
      .cat-behind {
        position: absolute;
        left: 75px;
        top: 20px;
        height: 80px;
        z-index: 1;
        opacity: 1;
        pointer-events: none;
        object-fit: cover;
        zoom: 1.8;
      }

      /* Search bar */
      .search-bar-container {
        display: flex;
        align-items: center;
        background-color: #f6f6f6;
        border-radius: 30px;
        padding: 5px;
        width: 60%;
        max-width: 600px;
        margin-top: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
        font-size: 18px;
      }
      .search-button {
        padding: 0 15px;
        font-size: 18px;
        background: none;
        border: none;
        cursor: pointer;
      }

      /* Dot range slider */
      .dot-range-wrapper {
        position: relative;
        width: 60%;
        max-width: 600px;
        margin: 20px auto 0 auto;
      }
      .dot-track {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: -8px;
        width: 100%;
        pointer-events: none;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #bbb;
      }
      .dot.active {
        background: black;
      }
      .range-input {
        width: 100%;
        -webkit-appearance: none;
        background: transparent;
      }
      .range-input:focus {
        outline: none;
      }
      .range-input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: black;
        cursor: pointer;
        margin-top: -6px;
      }
      .range-input::-webkit-slider-runnable-track {
        height: 4px;
        background: #ccc;
        border-radius: 4px;
      }

      /* Form */
      .form-section {
        background-color: #f8f8f8;
        padding: 20px 30px;
        border-radius: 20px;
        width: 70%;
        max-width: 600px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        font-family: 'Jersey 20', sans-serif;
        margin: auto;
        height: 90%; /* agar ngepas */
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .form-group {
        display: flex;
        flex-direction: column;
      }
      .form-label {
        font-size: 18px;
        margin-bottom: 5px;
        color: #333;
      }
      .form-input, .form-textarea {
        padding: 40px 10px;
        font-size: 16px;
        border: none;
        border-radius: 10px;
        background-color: white;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        font-family: 'Jersey 20', sans-serif;
        color: black;
      }
      .form-input {
        min-height: 40px;
        resize: none;
      }
      .form-textarea {
        min-height: 40px;
        resize: none;
      }
    `}
  </style>
);

// Header
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


const DotRangeSlider = () => {
  const [value, setValue] = useState(0);
  const steps = 5;

  return (
    <div className="dot-range-wrapper">
      <input
        type="range"
        min="0"
        max={steps - 1}
        value={value}
        className="range-input"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="dot-track">
        {Array.from({ length: steps }).map((_, i) => (
          <div key={i} className={`dot ${i === value ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};


const MainContent = () => {
  function changePage(url){
    window.location = url;
  }
  
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
        <button className="search-button" onClick={() => changePage('Book2')}>
          <img src="/assets/searchIcon.png" alt="search" style={{ width: "25px", height: "25px" }} />
        </button>
      </div>
      <DotRangeSlider />
    </div>
  );
};


const FormSection = () => {
  return (
    <div className="form-section">
      <Box display={"flex"}>
        <Box className="form-group" flex={1}>
          <label className="form-label">Title :</label>
          <input type="text" className="form-input" />
        </Box>
        <Box className="form-group" flex={1}>
          <label className="form-label">Description :</label>
          <textarea className="form-textarea"></textarea>
        </Box>
    </Box>

      <div className="form-group">
        <label className="form-label">Categories :</label>
        <input type="text" className="form-input" />
      </div>
    </div>
  );
};

// Root App
const App = () => {
  return (
    <>
      <HeaderStyles />
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <MainContent />
          <FormSection />
        </div>
      </div>
    </>
  );
};

export default App;
