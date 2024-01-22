import { string } from 'prop-types';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = ({imageSrc, headingText, iconLn, iconMail}) => (
    <div className="home-container">
        <div className="image">
            <img src={imageSrc} alt="main-image"/>
        </div>
     <h1 className="main_info">
     	{headingText}
     </h1>
     <div className="text-center">
     	<ul className="list-inline">
     		<li>
                <a href="https://www.linkedin.com/in/kate-kovaliova-9694a1170" target="_blank" className="btn-social">
                    <FontAwesomeIcon className="fa-icon" icon={iconLn} />
                </a>
            </li>
     		<li>
                <a href="mailto:Kate1996970@gmail.com" target="_blank" className="btn-social">
                    <FontAwesomeIcon className="fa-icon" icon={iconMail} />
                </a>
            </li>
     	</ul>
     </div>
     <Link className="scroll-down" address="true" to="about" spy={true} smooth={true} delay={0} duration={0}></Link>
	</div>
);

Banner.propTypes = {
  imageSrc: string.isRequired,
  headingText: string.isRequired
};

export default Banner;