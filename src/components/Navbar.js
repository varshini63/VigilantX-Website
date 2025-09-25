import React, { useEffect } from 'react';

const Navbar = ({ onRegisterClick }) => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav>
      <div className="nav-logos">
        <div className="logo-container">
          <img src="./images/vnr_logo.png" alt="VNR VJIET" className="logo-img" />
        </div>
        <div className="logo-container">
          <img src="./images/gv_logo.png" alt="Garuda Vigilance" className="logo-img" />
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#coordinators">Team</a></li>
        <li><a href="#queries">Contact</a></li>
        <li><a href="#" onClick={onRegisterClick} className="register-nav-btn">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;