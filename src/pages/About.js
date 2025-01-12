import React from 'react';
import './CSS file/About.css'; 

function About() {
  return (
    <div className="body2">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to the <strong>Domestic Violence Support Platform</strong>, a safe and secure space designed to provide essential resources and guidance to individuals affected by domestic violence. 
          Our mission is to empower survivors by offering immediate assistance, legal information, and emotional support.
        </p>
        <p>
          We believe in gender equality and are committed to ensuring that everyone, regardless of gender, receives the help they deserve. 
          Our platform connects you with local support services, shelters, and counseling options, helping you navigate through difficult situations with dignity and resilience.
        </p>
        <p>
          Our web application offers a user-friendly interface that allows easy access to emergency contacts, incident reporting, and information on your rights. 
          We also ensure the utmost confidentiality and provide a platform for raising awareness about the impact of domestic violence. Together, we can work towards ending domestic abuse and fostering a society where everyone feels safe.
        </p>

        <div className="team-profiles">
          <h2>Meet Our Team</h2>
          <div className="profile">
            <img src="" alt="Ameen Profile" className="profile-img"/>
            <h3>Ameen</h3>
            <a href="https://www.linkedin.com/in/aminulla-shaik-aab007289/" target="_blank" rel="noopener noreferrer" className="profile-link">LinkedIn Profile</a>
          </div>

          <div className="profile">
            <img src="" alt="siddu Profile" className="profile-img"/>
            <h3>siddu</h3>
            <a href="https://www.linkedin.com/in/siddartha-gorantla-45910228b/" target="_blank" rel="noopener noreferrer" className="profile-link">LinkedIn Profile</a>
          </div>

          <div className="profile">
            <img src="" alt="vivek Profile" className="profile-img"/>
            <h3>vivek</h3>
            <a href="http://www.linkedin.com/in/vivek-narayana-chatti-66938a28b" target="_blank" rel="noopener noreferrer" className="profile-link">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
