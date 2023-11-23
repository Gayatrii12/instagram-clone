import React, {useState} from 'react'
import "../styles/Signup.css"

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="signup">
      <img
        src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        placeholder='Username'
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button>Sign Up</button>
    </div>
  );
}

export default Signup
