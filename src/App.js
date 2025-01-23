import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
import { faEnvelope, faPhone, faHouse, faUser, faWandMagicSparkles, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import mainImg from './assets/photo_1.jpg';

function App() {
  return (
    <div className="App">
      <Header 
        imageSrc={mainImg}
        authorName="Kate Kovaliova"
        iconLinkedin={faLinkedinIn}
        link="https://www.linkedin.com/in/kate-kovaliova-9694a1170"
        iconEnvelope={faEnvelope}
        mailAddress="mailto:Kate1996970@gmail.com"
        iconPhone={faPhone}
        iconTelegram={faTelegram}
        linkTelegram="https://t.me/kate_koval95"
        iconHome={faHouse}
        iconUser={faUser}
        iconSkills={faWandMagicSparkles}
        iconEducation={faUserGraduate}
        iconPortfolio={faFolder}
      />
      <Main />
      <Footer 
        headText="Contact me"
        additionalText="I am ready for any offers"
        iconLinkedin={faLinkedinIn}
        link="https://www.linkedin.com/in/kate-kovaliova-9694a1170"
        iconEnvelope={faEnvelope}
        mailAddress="Kate1996970@gmail.com"
        iconPhone={faPhone}
        phone="+48572180396"
        copyRightText="Copyright © 2018 – 2024 Kate Kovaliova"
      />
    </div>
  );
}

export default App;
