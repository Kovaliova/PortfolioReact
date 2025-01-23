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
        <div className="main-section">
        <section className="home" id="home">
            <Banner 
             headingText="Kate Kovaliova"
            />
        </section>
        <section className="about-block" id="about">
            <AboutSection 
              headingText="About me"
              descriptionText="Hello! My name is Kate Kovaliova, and I have over 6+ years of experience in Front-End Development, working on a variety of commercial projects.
            Throughout my career, I have had the opportunity to work on a wide range of web development tasks, from creating responsive and visually appealing user interfaces to ensuring the overall functionality of websites and web applications. My experience spans multiple industries, allowing me to adapt quickly to different project needs and client requirements.I pride myself on my creativity and attention to detail. I approach each task with a careful, methodical mindset, ensuring the final result meets both functional and aesthetic expectations. One of my key strengths is problem-solving – I can quickly assess challenges and come up with various solutions to ensure the best possible outcome for the project. This flexibility allows me to adapt to new situations, technologies, and client feedback with ease.I am highly committed to improving my skills and staying up-to-date with the latest trends in the ever-evolving world of Front-End Development. I regularly take courses, attend webinars, and engage in independent practice to enhance my knowledge and expand my technical expertise. This dedication helps me to keep up with industry standards and implement cutting-edge solutions in my work.In addition to my technical skills, I am a firm believer in the power of communication and collaboration. I enjoy working in a team environment and am always open to feedback and discussions. My ability to build strong working relationships with clients, colleagues, and stakeholders has been a key factor in the success of the projects I have worked on. I believe that clear communication is essential for achieving the best results, and I strive to maintain transparency and understanding in all my professional interactions.I am always looking for new opportunities to grow and develop my skills, whether it's through challenging projects or learning new technologies. You can find more information about my work experience, the companies I've worked with, and the technologies I've used in my CV. I'm excited to continue expanding my professional knowledge and contributing to impactful, high-quality web development projects."
              resumeLink="/Kate_Kovaliova_CV.pdf"
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
