import React from 'react';
// Ikon FiMenu dihapus karena tidak digunakan
import { FiMoon } from 'react-icons/fi';

// Komponen untuk menampung semua style
const HeaderStyles = () => (
  <style>
    {`

      @import url('https://fonts.googleapis.com/css2?family=Jersey+20&display=swap');

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0px 40px; 
        background-color: #f0f0f0;
        border-bottom: 1px solid #e0e0e0;
        opacity: 0.8;
      }

      .header-logo {
        font-family: "Jersey 20", sans-serif;
        font-size: 50px;
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
    `}
  </style>
);


// Komponen Header utama
const Header = () => {
  return (
    <>
      <HeaderStyles />
      
      <header className="header">
        <span className="header-logo">PiCat</span>

        <label className="theme-switch">
          <input type="checkbox" />
          <span className="slider">
            <FiMoon className="moon-icon" />
          </span>
        </label>
      </header>
    </>
  );
};

export default Header;