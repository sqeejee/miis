import React from 'react';
import { useAvatar } from '../../contexts/avatarContext.contexts';
import './portrait.styles.css';
import options from '../../CharacterAssets/options'; // Adjust the import path as necessary

const Portrait = React.forwardRef((props, ref) => {
  const { avatar, randomizeAvatar } = useAvatar();

  const getOptionSvg = (category, value) => {
    const categoryOptions = options[category];
    const option = categoryOptions.find(opt => opt.name === value);
    return option ? option.svg : null;
  };
  
  onpageshow = () => {
    randomizeAvatar();
  }

  return (
    <>
      <div ref={ref} className="portrait">
        {Object.entries(avatar).map(([key, value]) => (
          value && (
            <img 
              key={key} 
              src={getOptionSvg(key.charAt(0).toUpperCase() + key.slice(1), value)} 
              alt={value} 
              className={key} 
            />
          )
        ))}
    </div>
    </>
  );
});

export default Portrait;
