import React from 'react';
import './Header.scss';
import {Link} from 'react-scroll';
import Font from 'react-font';
import MobileMenu from '../../components/MobileMenu';

const Header = () => (
    <header id="top" className="header">
    <div className="container">
      <div className="row header-columns">
        <div className="d-none d-lg-block header-columns--container col-9">
            <Font family='Poppins'>
              <Link activeClass="active" to="home" spy={true} smooth={true} delay={0} duration={0}>
                    <span>Home</span>
              </Link>
              <Link to="about" spy={true} smooth={true} delay={0} duration={0}>
                    <span>About me</span>
              </Link>
              <Link to="skills" spy={true} smooth={true} delay={0} duration={0}>
                    <span>My skills</span>
              </Link>
              <Link to="education" spy={true} smooth={true} delay={0} duration={0}>
                    <span>My education</span>
              </Link>
              <Link to="portfolio" spy={true} smooth={true} delay={0} duration={0}>
                    <span>Portfolio</span>
              </Link>
              <Link to="footer" spy={true} smooth={true} delay={0} duration={0}>
                    <span>Contact</span>
              </Link>
            </Font> 
        </div>
      </div>
      <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} className="mobile-menu"/>
    </div>
  </header>
);

export default Header;