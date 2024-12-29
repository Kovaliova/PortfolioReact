import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = ({headingText, descriptionText, textCV, resumeLink, iconCV}) => (
    <div className="about-block--container">
            <h1 className="head_text label">{headingText}</h1>
            <p className="description_text">{descriptionText}</p>  
    {resumeLink && (
      <a href={resumeLink} className="link_resume" download="Kate_Kovaliova_CV.pdf" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="fa-icon" icon={iconCV} />
        {textCV}
      </a>
    )}    
    </div>
);

AboutSection.propTypes = {
    headingText: string.isRequired,
    descriptionText: string.isRequired,
    resumeLink: string
  };
  
  export default AboutSection;