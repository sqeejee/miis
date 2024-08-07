import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/users.context";

import './navigation.styles.css';

import { signOutUser, retrieveProfileImage } from "../../utils/firebase/firebase.utils";


const Navigation = () =>{
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const userName = currentUser ? currentUser.displayName : null;
  const [profileImageUrl, setProfileImageUrl] = useState('');


  useEffect(() => {
    const fetchProfileImage = async () => {
        if (currentUser) {
            try {
                const imageUrl = await retrieveProfileImage(currentUser);
                setProfileImageUrl(imageUrl);
                console.log("Image URL: " + imageUrl);
            } catch (error) {
                console.error('Failed to retrieve profile image:', error);
            }
        }
    };

    fetchProfileImage();
}, [currentUser]);
  



  useEffect(() => {
    if(currentUser)
    {
      setCurrentUser(currentUser);
    }
  }, [currentUser, setCurrentUser]);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          {/* Logo can be added here */}
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to="/make">Make</Link>
          {currentUser ? (
            <>
              <Link className='nav-link' to={`/user/${userName}`}>Hi {userName}</Link>
              {profileImageUrl && <img src={profileImageUrl} className="pfp-mini" alt="Profile" />}
            </>
          ) : (
            <Link className='nav-link' to="/auth">Sign In</Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
