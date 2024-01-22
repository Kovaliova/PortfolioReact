import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';
import './MobileMenu.scss';

export default props => {
  return (
    <Menu>
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
    </Menu>
  );
};