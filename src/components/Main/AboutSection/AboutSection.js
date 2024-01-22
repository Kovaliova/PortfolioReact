import { string } from 'prop-types';
import Font from 'react-font';

const AboutSection = ({headingText, descriptionText}) => (
    <div className="about-block--container">
        <Font family='Ubuntu'>
            <h1 className="head_text">{headingText}</h1>
            <p className="description_text">{descriptionText}</p>
        </Font>    
    </div>
);

AboutSection.propTypes = {
    headingText: string.isRequired,
    descriptionText: string.isRequired
  };
  
  export default AboutSection;