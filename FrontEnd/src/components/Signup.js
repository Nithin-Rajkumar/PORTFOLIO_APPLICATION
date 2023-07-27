import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    const backendUrl = 'http://localhost:8181/api/v1/auth/register';

    const registrationData = {
      name: name,
      email: email,
      password: password,
      role: 'user', // You can set the role here as 'user'
    };

    axios.post(backendUrl, registrationData)
      .then(response => {
        console.log('Registration successful:', response.data);
        // Handle any success messages or redirection here if needed
      })
      .catch(error => {
        console.error('Registration error:', error);
        // Handle any error messages here if needed
      });

    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-header">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Link to="/">
            <button type="submit" onClick={handleSignup} className="signup-button">Sign Up</button>
          </Link>
        </form>
        <div className="signup-footer">
          <p>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
