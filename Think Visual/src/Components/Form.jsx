import React, { useState } from 'react';
import '../App.css';
// import '@fortawesome/fontawesome-free/css/all.css';
import fb from '../../pictures/fb.png';
import google from '../../pictures/google.jpg';
import twitter from '../../pictures/twitter.jpg';
import linkedin from '../../pictures/linkedin.jpg';
import { Link } from 'react-router-dom';


const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(prevMode => !prevMode);
  };

  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-Ns8hanzF+IpsZYbA0N9ZxMi6tHj49/b79J4RbD3b/GmYgLQZXZg6gWTbfSNZ25K3bbDeW3+gUqT8x6fBmYPgBA==" crossorigin="anonymous" />

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            {/* <input type="submit" value="Login" className="btn solid" /> */}
            <Link to={"/showobject"} className='p-4 bg-blue-400 rounded-lg'>Login Now</Link>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <img src={fb} height='50px' alt="" />
              </a>
              <a href="#" className="social-icon">
              <img src={twitter} height='50px' alt="" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
                <img src={google} height='65px' alt="" />
              </a>
              <a href="#" className="social-icon">
              <img src={linkedin} height='65px' alt="" />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            {/* <input type="submit" className="btn" value="Sign up" /> */}
            <Link to="/show-object">Submit</Link>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
              <img src={fb} height='50px' alt="" />
              </a>
              <a href="#" className="social-icon">
              <img src={twitter} height='50px' alt="" />
              </a>
              <a href="#" className="social-icon">
              <img src={google} height='65px' alt="" />
              </a>
              <a href="#" className="social-icon">
              <img src={linkedin} height='65px' alt="" />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>THINK VISUAL</h3>
            <p>Welcome to Think Visual website page.. Complete your Sign Up to website access</p>
            <button className="btn transparent" onClick={toggleMode}>Sign up</button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>THINK VISUAL</h3>
            <p>Welcome to Think Visual website page.. Complete your Sign In to website access</p>
            <button className="btn transparent" onClick={toggleMode}>Sign in</button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;