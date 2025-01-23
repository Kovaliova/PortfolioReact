import React from 'react';

const AboutSection = ({ headingText, descriptionText, textCV, resumeLink}) => {

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
      {resumeLink ? (
        <button onClick={handleDownload} className="link_resume">
          {textCV}
        </button>
      ) : (
        <p>No resume available.</p>
      )}
    </div>
  );
};

export default AboutSection;
