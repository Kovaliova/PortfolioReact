import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDownloadLink from 'react-download-link';

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


  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); 

  const downloadComponent = resumeLink ? (
    isMobile ? (
      <button onClick={handleDownload} className="link_resume">
        <FontAwesomeIcon className="fa-icon" icon={iconCV} />
        {textCV}
      </button>
    ) : (

      <ReactDownloadLink
        label={textCV}
        filename="Kate_Kovaliova_CV.pdf"
        exportFile={() => resumeLink}
      />
    )
  ) : (
    <p>No resume available.</p>
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
