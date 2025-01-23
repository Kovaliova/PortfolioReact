import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = ({ headingText, descriptionText, textCV, resumeLink, iconCV }) => {
  
  return (
    <div className="about-block--container">
      <h1 className="head_text label">{headingText}</h1>
      <p className="description_text">{descriptionText}</p>
      {resumeLink ? (
        <a
          href={resumeLink}
          download="Kate_Kovaliova_CV.pdf" 
          className="link_resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa-icon" icon={iconCV} />
          {textCV}
        </a>
      ) : (
        <p>No resume available.</p>
      )}
    </div>
  );
};

export default AboutSection;
