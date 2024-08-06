import React from 'react';
import html2canvas from 'html2canvas';
import { uploadProfileImage } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/users.context';
import './captureButton.styles.css';

const CaptureButton = ({ captureRef }) => {
  const { currentUser } = React.useContext(UserContext);

  const handleCaptureClick = () => {
    console.log('Capture button clicked');
    if (captureRef.current) {
      html2canvas(captureRef.current, { 
        useCORS: true // This ensures that if images are loaded from other domains, they can be captured without tainting the canvas
      })
      .then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        if (currentUser) {
          uploadProfileImage(currentUser, base64image)
            .then(() => console.log('Profile image updated successfully'))
            .catch(err => console.error('Error setting profile image:', err));
        } else {
          console.error('No user logged in');
        }
      })
      .catch(err => console.error('Something went wrong:', err));
    }
  };

  console.log(currentUser);

  return (
    <button className='captureButton' onClick={handleCaptureClick}>
      Save portrait as Profile Picture
    </button>
  );
}

export default CaptureButton;
