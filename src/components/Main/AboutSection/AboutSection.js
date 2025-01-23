import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = ({ headingText, descriptionText, textCV, resumeLink, iconCV }) => {
  const handleDownload = () => {
    if (resumeLink) {
      const link = document.createElement('a');
      link.href = resumeLink;
      link.download = "Kate_Kovaliova_CV.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    }
  };

  return (
    <div className="about-block--container">
      <h1 className="head_text label">{headingText}</h1>
      <p className="description_text">{descriptionText}</p>  
      {resumeLink && (
        <button onClick={handleDownload} className="link_resume">
          <FontAwesomeIcon className="fa-icon" icon={iconCV} />
          {textCV}
        </button>
      )}
    </div>
  );
};

AboutSection.propTypes = {
  headingText: string.isRequired,
  descriptionText: string.isRequired,
  resumeLink: string,
  textCV: string.isRequired,
  iconCV: string.isRequired
};

export default AboutSection;
