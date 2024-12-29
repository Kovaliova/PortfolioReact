import React from 'react';
import './Footer.scss';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = ({headText, additionalText, link, mailAddress, phone, iconPhone, iconEnvelope, iconLinkedin, copyRightText}) =>(
    <div className="footer" id="footer">
      <div className="container">
		        <h1 className="head_text label">{headText}</h1>
		        <p>{additionalText}</p>
		      <div className="info_footer">
		        <div className="info_social">
			        <div className="text">
     	            <ul className="list">
     		              <li className="linked">
                            <FontAwesomeIcon className="fa-icon" icon={iconLinkedin} />
                      </li>
     		              <li>
                            <span>{link}</span>
                      </li>
                  </ul>
              </div>
             <div className="text">
               <ul className="list_mail">
               	 <li className="mail">
                    <FontAwesomeIcon className="fa-icon" icon={iconEnvelope} />
                 </li>
               	 <li>
                    <span>{mailAddress}</span>
                 </li>
               </ul>     
            </div>
            <div className="text">
              <ul className="list_phone">
		            <li className="phone">
                    <FontAwesomeIcon className="fa-icon" icon={iconPhone} />
                </li>
		            <li>
                    <span>{phone}</span>
                </li>
              </ul>
		        </div>
		      </div>
	      </div>
      </div>
      <div className='copyright'>
        <p>{copyRightText}</p>
      </div>
	</div>
);

Footer.propTypes = {
  headText: string.isRequired,
  additionalText: string.isRequired,
  link: string.isRequired,
  mailAddress: string.isRequired,
  copyRightText: string.isRequired
};

export default Footer;