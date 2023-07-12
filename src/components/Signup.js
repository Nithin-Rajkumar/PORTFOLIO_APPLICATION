// Signup.js
import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    // Add your signup logic here
    console.log('Signed up with the following details:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-header">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
