// Login.js
import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please enter both email and password');
      return;
    }

    // Add your login logic here
    console.log('Logged in with email:', email);
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-header">Log in to MakeFolio</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email or Phone</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="login-footer">
          <a href="#">Forgot Password?</a>
          <span className="divider">·</span>
          <Link to="/Signup">Sign Up for MakeFolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
