import Font from 'react-font';
import firstImg from '../../../assets/candy.png';
import secondImg from '../../../assets/zap.png';
import thirdImg from '../../../assets/todolist.png';
import fourthImg from '../../../assets/grid.png';
import fiveImg from '../../../assets/bikinilista.png';
import sixImg from '../../../assets/Superbike.png';
import sevenImg from '../../../assets/SportsTech.png';
import eightImg from '../../../assets/Timestore.png';
import nineImg from '../../../assets/Kulzer.png';
import tenImg from '../../../assets/Steppix.png';
import elevenImg from '../../../assets/little-room.png';
import twelveImg from '../../../assets/clothes.png';

const Portfolio = () =>(
    <div className="conteiner">
        <Font family='Poppins'>
		    <h1 className="head_text">Portfolio</h1>
        </Font>
		<div className="main">
		    <div className="view view-first">
                <img src={firstImg} alt="project-candy"/>
            <div className="mask">
            <a href="https://kovaliova.github.io/Candy/index.html" className="info" target="_blank">View More</a>
            </div>
        </div>
         <div className="view view-first">
            <img src={secondImg} alt="react-project-game"/>
            <div className="mask">
                <a href="https://kovaliova.github.io/zapominay/index.html" className="info" target="_blank">View More</a>
            </div>
        </div>
        <div className="view view-first">
            <img src={thirdImg} alt="project-todo-list-js"/>
            <div className="mask">
                <a href="https://kovaliova.github.io/To%20Do%20List/index.html" className="info" target="_blank">View More</a>
            </div>
        </div>    
        <div className="view view-first">
            <img src={fourthImg} alt="project-grid-table"/>
            <div className="mask">
                <a href="https://kovaliova.github.io/grid_webdesign/index.html" className="info" target="_blank">View More</a>
            </div>
        </div>  
        <div className="view view-first">
            <img src={fiveImg} alt="project-bikinilista"/>
            <div className="mask">
                <a href="https://bikinilista.com/en-int" className="info" target="_blank">View More</a>
            </div>
        </div> 
        <div className="view view-first">
            <img src={sixImg} alt="project-superbike"/>
            <div className="mask">
                <a href="https://superbikefactory.co.uk/" className="info" target="_blank">View More</a>
            </div>
        </div> 
        <div className="view view-first">
            <img src={sevenImg} alt="project-sportstech"/>
            <div className="mask">
                <a href="https://www.sportstech.de/" className="info" target="_blank">View More</a>
            </div>
        </div> 
        <div className="view view-first">
            <img src={eightImg} alt="project-timestore"/>
            <div className="mask">
                <a href="https://timestore24.s3.belvgdev.com/" className="info" target="_blank">View More</a>
            </div>
        </div> 
        <div className="view view-first">
            <img src={nineImg} alt="project-kulzer"/>
            <div className="mask">
                <a href="https://kulzer.pl/pl/pl/authentification-page/authentification-page.html?ReturnUrl=http://kulzer.pl/pl/pl/start/start.html" className="info" target="_blank">View More</a>
            </div>
        </div> 
        <div className="view view-first">
            <img src={tenImg} alt="project-steppix"/>
            <div className="mask">
                <a href="https://steppix.com/en/" className="info" target="_blank">View More</a>
            </div>
        </div>
        <div className="view view-first">
            <img src={elevenImg} alt="project-little-room"/>
            <div className="mask">
                <a href="https://www.mylittleroom.ch/en/" className="info" target="_blank">View More</a>
            </div>
        </div>  
        <div className="view view-first">
            <img src={twelveImg} alt="project-kristina-fidelskaya"/>
            <div className="mask">
                <a href="https://kristinafidelskaya.com/" className="info" target="_blank">View More</a>
            </div>
        </div>  
    </div> 
</div>
);

export default Portfolio;