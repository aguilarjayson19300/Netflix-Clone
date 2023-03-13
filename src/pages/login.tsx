import '../style/login.css';
import '../style/font.css';
import '../style/icon.css';
import '../style/transition.css';
import { InputField } from '../components';
import { languages } from '../data';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

            <div className="inputContainer">
              <InputField
                onChangeText={(text) => setEmail(text)}
                type="text"
                placeHolder="Email or Phone number"
                inputValue={email}
              />
              <InputField
                onChangeText={(text) => setPassword(text)}
                inputValue={password}
                type="password"
                placeHolder="Password"
              />
            </div>

            <div className="button">
              <button onClick={() => {
                navigate('/home')
              }}>Sign In</button>
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
          <div className="footerContainer">
            <span>Question?</span>
            <span>Contact us.</span>
          </div>

          <div className='footerDetail'>
            <div className="footerDetails">
                <a href="#">FAQ</a>
                <a href="#">Help Center</a>
                <a href="#">Term of use</a>
                <a href="#">Privacy</a>
            </div>
          </div>

          <div className="footerInformation">
            <div className='informationSub'>
              <a href="#">Cookie Preferences</a>
              <a href="#">Corporate Information</a>
            </div>
          </div>

          <div className="select">
            <span className="material-symbols-rounded"> language </span>
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

export default Login