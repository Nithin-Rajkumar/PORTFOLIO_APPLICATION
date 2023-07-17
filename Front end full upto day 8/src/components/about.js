import React from 'react';
import './about.css';  
import Navbar from './Navbar';

const About = () => {
  return (
        
        <div><Navbar /> 
    <div className="about-page">
      <div className="content-wrapper">
        <h1>About Us</h1>
        <p>
          Insert your about content here, providing information about your company and its mission.
        </p>
        <p>
          For support or any questions, please reach out to us through the following channels:
        </p>
        <ul>
          <li>Email: support@example.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Makefolio. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default About;
