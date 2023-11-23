import React, {useState} from 'react';
import "../styles/Authentication.css";
import Login from './Login';
import Signup from './Signup';

function Authentication() {
    const [active, setActive] = useState("login")
  return (
    <div className="authentication">
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login/> : <Signup/>}
        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account? <button className='bt'>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button className='bt'>Log In</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
} 

export default Authentication
