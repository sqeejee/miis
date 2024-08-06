import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/users.context';
import { signOutUser, retrieveProfileImage } from '../../utils/firebase/firebase.utils';

const UserProfile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const { uid } = useParams(); // Assuming uid is the param you want to fetch from URL

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

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

    return (
        <div className="profile-header-container">
            <span>{currentUser ? currentUser.displayName : 'No User'}</span>
            <span>Posts</span>
            <span>Followers</span>
            <span>Following</span>
            {profileImageUrl && <img src={profileImageUrl} alt="Profile" />}
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    );
};

export default UserProfile;
