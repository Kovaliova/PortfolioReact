import Font from 'react-font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowMore from "react-show-more-button";


const EducationSection = ({iconBook, iconCap}) => (
    <div className="container">
        <Font family='Poppins'>
            <h1>Education & courses</h1>
        </Font>
        <div className="wrapper-card">
          <div className="wrapper-card--education"> 
            <Font family='Poppins'>
                <h2>Education</h2>
            </Font>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconCap} />
                <h3>Regional lyceum number 3 the city of Mogilev (Belarus)</h3>
                <p>Student of the school</p>
            </div>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconCap} />
                <h3>SEP 2002 - JUL 2013</h3>
                <p>Successfully graduated from high school education</p>
            </div>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconCap} />
                <h3>BELARUSIAN STATE UNIVERSITY OF INFORMATICS AND RADIOELECTRONICS UNIVERSITY SEP 2013 - JUL 2017</h3>
                <p>In 2013 I entered the BSUIR. I studied under the reduced curriculum - 4 years. The final exams were successfully passed. I was awarded a diploma. I was awarded the specialty "Information Technology Engineer".</p>
            </div>
          </div> 
          <div className="wrapper-card--courses">
             <Font family='Poppins'>
                <h2>Courses</h2>
             </Font>
             <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>QA ACADEMY</h3>
                <p>Training course "Fundamentals of software testing" in 2016 year</p>
             </div>
             <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>TEACHMESKILLS SCHOOL OF PROGRAMMING</h3>
                <p>Training Course "HTML5 + CSS3" in 2017 year</p>
            </div>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>TEACHMESKILLS SCHOOL OF PROGRAMMING</h3>
                <p>Training Course "JavaScript" in 2017 year</p>
            </div>
            <ShowMore 
                maxHeight={70}
                classNameButton="show-more-btn"
                classNameButtonDiv="show-more-text"
                className="show-block"
            >
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>IT-ACADEMY (HIGH-TECH PARK EDUCATION CENTER)</h3>
                <p>Training course "Website development using HTML, CSS and JavaScript" in 2018 year. In-depth and advanced site development</p>
            </div>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>IT-ACADEMY (HIGH-TECH PARK EDUCATION CENTER)</h3>
                <p>Training course "Web application development with JavaScript" in 2019 year</p>
            </div>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>IT-ACADEMY (HIGH-TECH PARK EDUCATION CENTER)</h3>
                <p>Training course "Web development using React & Angular" in 2020 year</p>
            </div>
            <div className="card">
                <FontAwesomeIcon className="fa-icon" icon={iconBook} />
                <h3>Adobe Certified Professional - Adobe Commerce Front-End Developer</h3>
                <p>Independent study of this course and application of the acquired knowledge in practice. Passing the test, receiving a certificate of successful completion of the test in 2023.</p>
            </div>  
            </ShowMore>
          </div>
        </div>
    </div>
);


export default EducationSection;