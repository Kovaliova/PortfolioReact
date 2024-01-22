import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import mainImg from './assets/photo_1.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer 
        headText="Contact me"
        additionalText="I AM READY FOR ANY OFFERS"
        iconLinkedin={faLinkedinIn}
        link="https://www.linkedin.com/in/kate-kovaliova-9694a1170"
        iconEnvelope={faEnvelope}
        mailAddress="Kate1996970@gmail.com"
        iconPhone={faPhone}
        phone="+48572180396"
        imgPhoto={mainImg}
        copyRightText="Copyright © 2018 – 2024 Kate Kovaliova"
      />
    </div>
  );
}

export default App;
