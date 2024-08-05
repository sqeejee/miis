import React, { createContext, useContext, useState } from 'react';
import options from '../CharacterAssets/options';

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const initialAvatarState = Object.keys(options).reduce((acc, key) => {
    acc[key.toLowerCase()] = null;
    return acc;
  }, {});

  const [avatar, setAvatar] = useState(initialAvatarState);

  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const randomizeAvatar = () => {
    const randomizedAvatar = Object.keys(options).reduce((acc, key) => {
      acc[key.toLowerCase()] = getRandomItem(options[key]).name; // Store only the name
      return acc;
    }, {});
    setAvatar(randomizedAvatar);
  };

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar, randomizeAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
