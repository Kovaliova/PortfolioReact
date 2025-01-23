import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveAs } from 'file-saver';

const AboutSection = ({ headingText, descriptionText, textCV, resumeLink, iconCV }) => {
  

  const handleDownload = () => {
    if (resumeLink) {
      saveAs(resumeLink, 'Kate_Kovaliova_CV.pdf');
    }
  };


  const downloadComponent = resumeLink ? (
    <button onClick={handleDownload} className="link_resume">
      <FontAwesomeIcon className="fa-icon" icon={iconCV} />
      {textCV}
    </button>
  ) : (
    <button onClick={handleDownload} className="link_resume">
      <FontAwesomeIcon className="fa-icon" icon={iconCV} />
      {textCV}
    </button>
  );

  return (
    <div className="about-block--container">
      <h1 className="head_text label">{headingText}</h1>
      <p className="description_text">{descriptionText}</p>
      {downloadComponent}
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
