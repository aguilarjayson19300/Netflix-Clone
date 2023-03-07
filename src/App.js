import React from 'react';
import './App.css';
import './style.css';
import './font.css';
import { Button } from './components';

function App() {
  return (
    <body style={{ 
      backgroundImage: `url("bgdar.png")` 
    }} >
        <div class="container">
          <header class="header">
            <img src="/logo.png" alt="logo" />
          </header>

          <div class="registerBlock">
            <div class="paddingBlock">
              <div class="title">
                <h1>Sign In</h1>
              </div>

              <div class="inputs">
                <input type="text" placeholder="Email or Phone number" />
                <input type="password" placeholder="Password" />
              </div>

              <div class="button">
                <button>Sign In</button>
                <div class="checkboxBlock">
                  <div>
                    <input type="checkbox" />
                      <span>Remember me</span>
                  </div>

                  <div>
                    <span class="isHelp">Need help?</span>
                  </div>
                </div>
              </div>

              <div class="moreInfo">
                <div>
                  <span class="isNew">New to Netflix?</span>
                  <span class="signupnow">Sign up now.</span>
                </div>
              </div>

              <div>
                <span class="recapcha">
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <span class="learnMore">Learn more.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="footerContent">
            <div class="block1">
              <span>Question?</span>
              <span>Contact us.</span>
            </div>

            <div class="block2">
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Term of use</a>
              <a href="#">Privacy</a>
            </div>

            <div class="block3">
              <a href="#">Cookie Preferences</a>
              <a href="#">Corporate Information</a>
            </div>

            <div class="select">
              <span class="material-symbols-outlined">
                language
              </span>
              <select>
                <option>English</option>
                <option>العربية</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        </footer>
      </body>
  );
}

export default App;
