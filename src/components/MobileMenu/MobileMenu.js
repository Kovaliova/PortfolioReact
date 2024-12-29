import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';
import './MobileMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse, faUser, faWandMagicSparkles, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default props => {
  return (
    <Menu className='mobile-menu'>
       <div className="header-columns">
        <div className='profile-img'>
           <img src='/PortfolioReact/static/media/photo_1.9d219987fab31dc77e68.jpg' alt="main-image"/>
        </div>    
        <h1 className='sitename'>Kate Kovaliova</h1>
        <div className='social-links'>
            <div className='linkedin'>
                  <a href="https://www.linkedin.com/in/kate-kovaliova-9694a1170">
                        <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
                  </a>
            </div>
            <div className='mail'>
                  <a href="mailto:Kate1996970@gmail.com">
                        <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                  </a>
            </div>
            <div className='phone'>
                  <a href="tel:+48572180396">
                        <FontAwesomeIcon className="fa-icon" icon={faPhone} />
                  </a>
            </div>
        </div>
        <div className="d-md-flex header-columns--container">
         <Link activeClass="active" to="home" spy={true} smooth={true} delay={0} duration={0}>
                    <FontAwesomeIcon className="fa-icon" icon={faHouse} />
                    <span>Home</span>
              </Link>
              <Link to="about" spy={true} smooth={true} delay={0} duration={0}>
                    <FontAwesomeIcon className="fa-icon" icon={faUser} />
                    <span>About me</span>
              </Link>
              <Link to="skills" spy={true} smooth={true} delay={0} duration={0}>
                    <FontAwesomeIcon className="fa-icon" icon={faWandMagicSparkles} />
                    <span>My skills</span>
              </Link>
              <Link to="education" spy={true} smooth={true} delay={0} duration={0}>
                    <FontAwesomeIcon className="fa-icon" icon={faUserGraduate} />
                    <span>My education</span>
              </Link>
              <Link to="portfolio" spy={true} smooth={true} delay={0} duration={0}>
                    <FontAwesomeIcon className="fa-icon" icon={faFolder} />
                    <span>Portfolio</span>
              </Link>
              <Link to="footer" spy={true} smooth={true} delay={0} duration={0}>
                    <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                    <span>Contact</span>
        </Link>
        </div>
        </div>
    </Menu>
  );
};