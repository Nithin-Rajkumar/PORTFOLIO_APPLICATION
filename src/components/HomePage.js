import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-title">Build Your Professional Portfolio</h1>
        <p className="homepage-description">Create, Customize, and Showcase Your Work</p>
      </header>
      <main className="homepage-content">
        <div className="homepage-card">
          <div className="homepage-card-icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <h2 className="homepage-card-title">Design</h2>
          <p className="homepage-card-description">Choose from a variety of stunning templates and designs to create your portfolio.</p>
          <Link to="/templateselection" className="homepage-card-link">Select Template</Link>
        </div>
        <div className="homepage-card">
          <div className="homepage-card-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h2 className="homepage-card-title">Customize</h2>
          <p className="homepage-card-description">Personalize your portfolio with easy-to-use customization tools and features.</p>
          <Link to="/dashboard" className="homepage-card-link">Go to Dashboard</Link>
        </div>
        <div className="homepage-card">
          <div className="homepage-card-icon">
            <i className="fas fa-share-alt"></i>
          </div>
          <h2 className="homepage-card-title">Share</h2>
          <p className="homepage-card-description">Publish and share your portfolio with the world to showcase your skills and achievements.</p>
          <Link to="/published-portfolio" className="homepage-card-link">View Published Portfolio</Link>
        </div>
      </main>
      <footer className="homepage-footer">
        <p>© 2023 Portfolio Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
