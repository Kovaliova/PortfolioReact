import { string } from 'prop-types';
import Typewriter from 'typewriter-effect';

const Banner = ({headingText}) => (
    <div className="home-container">
     <h1 className="main_info">
     	{headingText}
     </h1>
     <div className="typed-out">
        <p>I'm</p>
        <Typewriter options={{strings: ['Web Developer', ''],autoStart: true,loop: true, pauseFor:50}}
/>
     </div>
	</div>
);

Banner.propTypes = {
  headingText: string.isRequired
};

export default Banner;