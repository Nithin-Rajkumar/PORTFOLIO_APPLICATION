// Login.js
import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/userslics';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleEmail=(e)=>
  {
    setEmail(e.target.value);
  }
  dispatch(login({name:email, password:email,loggedIn:true}));
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please enter both email and password');
      return;
    }

     console.log('Logged in with email:', email);
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
            <input type="text" id="email" value={email} onChange={handleEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div><Link to="/home">
          <button  type="submit" className="login-button">Log In</button></Link>
        </form>
        <div className="login-footer">
          <a href="#">Forgot Password?</a>
          <span className="divider">·</span>
          <Link to="/signup">Sign Up for MakeFolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
