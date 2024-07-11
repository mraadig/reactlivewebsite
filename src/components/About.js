import React from 'react'
import { Link } from 'react-router-dom';
import OurTeam from './OurTeam';
const About = () => {
  return (
    <>
    <div className="about-section">
      <h1>About Us Page</h1>
      
      <h3>Hello! I'm Aditya Kumar Gupta</h3>
      <p>I'm a 2021-2025 Batch Information Technology student at ABES Engineering College in Ghaziabad, Uttar Pradesh. </p>
      <p>If you want to know more about me.</p>
      <Link to="/contact">Click here</Link>
    </div>
    <OurTeam/>
    </>
  );
};

export default About;