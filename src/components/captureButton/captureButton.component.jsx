import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { uploadProfileImage } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/users.context';
import { useNavigate } from 'react-router-dom';
import './captureButton.styles.css';

const CaptureButton = ({ captureRef }) => {
  const { currentUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCaptureClick = () => {
    setLoading(true);
    if (captureRef.current) {
      html2canvas(captureRef.current, { 
        useCORS: true // This ensures that if images are loaded from other domains, they can be captured without tainting the canvas
      })
      .then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        if (currentUser) {
          uploadProfileImage(currentUser, base64image)
            .then(() => {
              navigate(`/user/${currentUser.displayName}`); 
              window.location.reload(); 
            })
            .catch(err => {
              console.error('Error setting profile image:', err);
              setLoading(false);
            });
        } else {
          console.error('No user logged in');
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('Something went wrong:', err);
        setLoading(false);
      });
    }
  };

  return (
    <div className="capture-button-container">
      {loading && <div className="loading-overlay">Loading...</div>}
      <button className='captureButton' onClick={handleCaptureClick} disabled={loading}>
        Save portrait as Profile Picture
      </button>
    </div>
  );
}

export default CaptureButton;
