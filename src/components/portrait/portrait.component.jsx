import React from 'react';
import { useAvatar } from '../../contexts/avatarContext.contexts';
import './portrait.styles.css';
import options from '../../CharacterAssets/options'; // Adjust the import path as necessary

const Portrait = () => {
  const { avatar, randomizeAvatar } = useAvatar();

  const getOptionSvg = (category, value) => {
    const categoryOptions = options[category];
    const option = categoryOptions.find(opt => opt.name === value);
    return option ? option.svg : null;
  };

  return (
    <div className="portrait-container">
      <div className="portrait">
        {Object.entries(avatar).map(([key, value]) => (
          value && (
            <img key={key} src={getOptionSvg(key.charAt(0).toUpperCase() + key.slice(1), value)} alt={value} />
          )
        ))}
      </div>
      <button onClick={randomizeAvatar}>Randomize</button>
    </div>
  );
}

export default Portrait;
