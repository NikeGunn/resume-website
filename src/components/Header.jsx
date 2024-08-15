import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src="/images/nikhil.png" alt="Nikhil Bhagat" className="profile-pic" />
        </div>
        <div className="hero-right">
          <h1>NIKHIL BHAGAT</h1>
          <p>Frontend - React JS, Redux | Android/IOS - React Native ✔| Backend Services - Django, Django Rest Framework ✔ | Full-Stack Developer from Nepal 🙏</p>
          <p>Province - 01, Biratnagar.</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <a href="mailto:programmer@nikhilbhagat.com.np">programmer@nikhilbhagat.com.np</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <a href="tel:+977-9814344114">+977-9814344114</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} />{' '}
            <a href="https://github.com/NikeGunn" target='_blank'>https://github.com/NikeGunn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
