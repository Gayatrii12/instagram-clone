import React from 'react'
import "../styles/Signup.css"

function Signup() {
  return (
    <div className="signup">
      <img
        src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png"
        alt=""
      />
      <input type="email" placeholder="Email" />
      <input type='text' placeholder='Username'/>
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  );
}

export default Signup
