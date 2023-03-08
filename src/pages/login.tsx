import React from 'react'
import './App.css';
import './style/style.css';
import './style/font.css';
import './style/icon.css';
import { InputField } from '../components';
import { languages } from '../data';


const login = () => {
  return (
    <body style={{
        backgroundImage: `url("bgdar.png")`
      }} >
        <div className="container">
          <header className="header">
            <img src="/logo.png" alt="logo" />
          </header>
          <div className="registerBlock">
            <div className="paddingBlock">
              <div className="title">
                <h1>Sign In</h1>
              </div>
  
              <div className="inputs">
                <InputField
                  type="text"
                  placeHolder="Email or Phone number"
                />
                <InputField
                  type="password"
                  placeHolder="Password"
                />
              </div>
  
              <div className="button">
                <button>Sign In</button>
                <div className="checkboxBlock">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </div>
  
                  <div>
                    <span className="isHelp">Need help?</span>
                  </div>
  
                </div>
              </div>
  
              <div className="moreInfo">
                <div>
                  <span className="isNew">New to Netflix?</span>
                  <span className="signupnow">Sign up now.</span>
                </div>
              </div>
  
              <div>
                <span className="recapcha">
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="learnMore">Learn more.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <footer className="footer">
          <div className="footerContent">
            <div className="block1">
              <span>Question?</span>
              <span>Contact us.</span>
            </div>
  
            <div className="block2">
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Term of use</a>
              <a href="#">Privacy</a>
            </div>
  
            <div className="block3">
              <a href="#">Cookie Preferences</a>
              <a href="#">Corporate Information</a>
            </div>
  
            <div className="select">
              <span className="material-symbols-outlined">
                language
              </span>
              <select>
                {languages.map((language) => (
                  <option key={language?.id}>{language?.language}</option>
                ))}
              </select>
            </div>
          </div>
        </footer>
      </body>
  )
}

export default login