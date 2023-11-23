import React, { useState } from 'react'
import "../styles/Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password);
    }


  return (
    <div className="login">
      <img
        src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value = {email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login
