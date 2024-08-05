import React, { useState } from 'react';
import './menu.styles.css';
import MenuOption from './menuoption.component';
import options from '../../CharacterAssets/options'; 
import { useAvatar } from '../../contexts/avatarContext.contexts';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Face");
    const { setAvatar } = useAvatar();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (type) => {
        setSelectedOption(type);
    };

    const handleMenuOptionClick = (attribute, value) => {
        setAvatar(prevAvatar => ({
            ...prevAvatar,
            [attribute.toLowerCase()]: value.name // Set only the name
        }));
    };

    return (
        <div className="menu-container">
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`menu-options ${isOpen ? 'open' : ''}`}>
                {Object.keys(options).map((type) => (
                    <div key={type} className="option-box" onClick={() => handleOptionClick(type)}>
                        {type}
                    </div>
                ))}
            </div>
            <div className="selectables-container">
                {options[selectedOption].map((item, index) => (
                    <MenuOption
                        key={index}
                        type={item}
                        onClick={() => handleMenuOptionClick(selectedOption, item)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
