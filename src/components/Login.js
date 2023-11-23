import React from 'react'
import "../styles/Login.css"

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png"
        alt=""
      />
      <input type='email' placeholder='Email'/>
      <input type='password' placeholder='Password' />
      <button>Login</button>
    </div>
  );
}

export default Login
