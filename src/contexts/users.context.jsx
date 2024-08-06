import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// Context to store and provide user state throughout the application
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                // Attempt to create/update the user document in Firestore
                createUserDocumentFromAuth(user).catch(error => {
                    console.error("Error creating user document:", error);
                });
            }
            // Update the state with the new user object or null if signed out
            setCurrentUser(user);
        });

        // Cleanup subscription on component unmount
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
