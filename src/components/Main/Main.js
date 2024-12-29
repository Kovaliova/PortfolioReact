import React from 'react';
import './Main.scss';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import TalkAboutSection from './TalkAboutSection/TalkAboutSection';
import SkillsSection from './SkillsSection/SkillsSection';
import EducationSection from './EducationSection/EducationSection';
import Portfolio from './Portfolio/Portfolio';
import { faEnvelope, faHandPointRight, faBook, faGraduationCap, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Main = () => {
    return (
        <>
        <div class="main-section">
        <section className="home" id="home">
            <Banner 
             headingText="Kate Kovaliova"
            />
        </section>
        <section className="about-block" id="about">
            <AboutSection 
              headingText="About me"
              descriptionText="Hello, my name is Kate Kovaliova. I have 5 years of experience in Front-End Development (commercial projects). I believe that my strengths are creativity and punctuality. I try to carefully approach to the fulfillment of tasks. I am able to find different solutions to tasks. I strive to improve my professional level (courses, independent practice). I am always open for communication, easily find contact with other people. You can learn more about me from my CV (work in companies and used stack on projects)."
              resumeLink="/assets/Kate_Kovaliova_CV.pdf"
              iconCV={faPrint}
              textCV='Download CV'
            />
        </section>
        <section className="skills" id="skills">
            <SkillsSection 
              additionalTxtSkills="Some of my skills, more details in my CV"
            />
        </section>
        <section className="education" id="education">
            <EducationSection 
             iconBook={faBook}
             iconCap={faGraduationCap}
            />
        </section>
        <section className="portfolio" id="portfolio">
            <Portfolio/>
        </section>
        </div>
        </>
    );
};
 
export default Main;
