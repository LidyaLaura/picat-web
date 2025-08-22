import React from 'react';
import { FiMoon } from 'react-icons/fi';


const logoImage = '/assets/light theme logo.png'; 

const Styles = () => (
  <style>
    {`
      /* Impor font yang akan digunakan */
      @import url('https://fonts.googleapis.com/css2?family=Jersey+20&display=swap');
   
      .splash-screen {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center; 
        min-height: 100vh; 
        background-color: #ffffff;
        position: relative; 
        font-family: 'Jersey 20', sans-serif;
      }

      /* Logo kucing */
      .splash-logo {
        width: 150px; 
        margin-bottom: -25px;
    
      }

      .splash-title {
        font-family: 'Jersey 20', sans-serif;
        font-size: 52px;
        color: #333;
        margin: -10px;
        line-height: 1;
      }


      .splash-subtitle {
        font-size: 16px;
        color: #333;
        margin-top: 8px;
        letter-spacing: 0.5px; 
      }

    
      .theme-switch {
        position: absolute;
        top: 25px;         
        right: 30px;      
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
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
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


const SplashScreen = () => {

    setTimeout(() =>{

        window.location.href = '/home';
    }, 5000)

    

  return (
    <>
      <Styles /> 
      
      <div className="splash-screen">
      
        <label className="theme-switch">
          <input type="checkbox" />
          <span className="slider">
            <FiMoon className="moon-icon" />
          </span>
        </label>
     
        <img src={logoImage} alt="PiCat Logo" className="splash-logo" />
        <h1 className="splash-title">PiCat</h1>
        <p className="splash-subtitle">Tap to Start ...</p>
      </div>
    </>
  );
};

export default SplashScreen;