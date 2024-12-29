import React from 'react';
import './Header.scss';
import { string } from 'prop-types';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from '../../components/MobileMenu';

const Header = ({imageSrc, authorName, link, mailAddress, phone, iconPhone, iconEnvelope, iconLinkedin, iconHome, iconUser, iconSkills, iconEducation, iconPortfolio}) => (
    <header id="top" className="header">
    <div className="container">
      <div className="header-columns">
        <div className='profile-img'>
           <img src={imageSrc} alt="main-image"/>
        </div>    
        <h1 className='sitename'>{authorName}</h1>
        <div className='social-links'>
            <div className='linkedin'>
                  <a href={link}>
                        <FontAwesomeIcon className="fa-icon" icon={iconLinkedin} />
                  </a>
            </div>
            <div className='mail'>
                  <a href={mailAddress}>
                        <FontAwesomeIcon className="fa-icon" icon={iconEnvelope} />
                  </a>
            </div>
            <div className='phone'>
                  <a href={phone}>
                        <FontAwesomeIcon className="fa-icon" icon={iconPhone} />
                  </a>
            </div>
        </div>
        <div className="d-md-flex d-sm-none header-columns--container">
            <nav>
              <Link activeClass="active" to="home" spy={true} smooth={true} delay={0} duration={0}>
                  <FontAwesomeIcon className="fa-icon" icon={iconHome} />
                  <span>Home</span>
              </Link>            
              <Link to="about" spy={true} smooth={true} delay={0} duration={0}>
                  <FontAwesomeIcon className="fa-icon" icon={iconUser} />
                  <span>About me</span>
              </Link>
              <Link to="skills" spy={true} smooth={true} delay={0} duration={0}>
                  <FontAwesomeIcon className="fa-icon" icon={iconSkills} />
                  <span>My skills</span>
              </Link>
              <Link to="education" spy={true} smooth={true} delay={0} duration={0}>
                  <FontAwesomeIcon className="fa-icon" icon={iconEducation} />
                  <span>My education & courses</span>
              </Link>
              <Link to="portfolio" spy={true} smooth={true} delay={0} duration={0}>
                  <FontAwesomeIcon className="fa-icon" icon={iconPortfolio} />
                  <span>Portfolio</span>
              </Link>
              <Link to="footer" spy={true} smooth={true} delay={0} duration={0}>
                  <FontAwesomeIcon className="fa-icon" icon={iconEnvelope} />
                  <span>Contact</span>
              </Link>
            </nav>
        </div>
      </div>
      <MobileMenu 
        pageWrapId={'page-wrap'} 
        outerContainerId={'outer-container'} 
        className="mobile-menu"
       />
    </div>
  </header>
);

Header.propTypes = {
 imageSrc: string.isRequired,
 authorName: string.isRequired,
 link: string.isRequired,
 mailAddress: string.isRequired
};

export default Header;