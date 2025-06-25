import React from 'react';
import './Home.css';
import shohan from '../../assets/shohanieee.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-left glass-card">
        <h1>Hi, I’m Shohan</h1>
        <h2>EEE Visionary</h2>
        <p>
          I am a visionary Electrical and Electronics Engineer, driven to shape the future through innovation, precision, and purpose
        </p>
        <button className="home-btn">Discover My Work</button>
      </div>

      <div className="home-right">
        <img src={shohan} alt="Shohan" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
