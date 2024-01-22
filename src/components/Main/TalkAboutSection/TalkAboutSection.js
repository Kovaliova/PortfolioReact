import React, { useState } from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Font, { Text } from 'react-font';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const TalkAboutSection = ({headtText, buttonText, iconBtn}) => {
    let [open, setOpen] = useState(false);

    let onOpenModal = () => setOpen(true);
    let onCloseModal = () => setOpen(false);

      return (
        <>
          <h2 className="main_info">{headtText}</h2>
          <button onClick={onOpenModal} className="btn btn-default btn-lg">
             <FontAwesomeIcon className="fa-icon" icon={iconBtn} />
             <Text family='Poppins'>{buttonText}</Text>
          </button>
          <Modal 
             open={open} 
             onClose={onCloseModal} 
             center
             classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
          >
            <Font family='Poppins'>
                <h2>Contact me</h2>
                <div>
                    <p>Phone: <a href="tel:+48572180396">+48572180396</a></p>
                    <p>Mail: <a href="mailto:Kate1996970@gmail.com">Kate1996970@gmail.com</a></p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/kate-kovaliova-9694a1170"> My Linkedin</a></p>
                </div>
            </Font>
          </Modal>
          </>
      );
};

TalkAboutSection.propTypes = {
  imageSrc: string.isRequired,
  headingText: string.isRequired
};

export default TalkAboutSection;