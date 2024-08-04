import React, { useState } from 'react';
import './menu.styles.css';
import MenuOption from './menuoption.component';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Face");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (type) => {
        setSelectedOption(type);
    };

    const options = {
        Face: ["Face Shape 1", "Face Shape 2", "Face Shape 3"],
        Hair: ["Short Hair", "Long Hair", "Curly Hair", "Straight Hair", "Bald"],
        Eyes: ["Blue Eyes", "Green Eyes", "Brown Eyes", "Hazel Eyes", "Gray Eyes"],
        Mouth: ["Smile", "Frown", "Neutral"],
        Nose: ["Small Nose", "Medium Nose", "Large Nose"],
        Eyebrows: ["Thin Eyebrows", "Thick Eyebrows", "Curved Eyebrows"],
        "Facial Hair": ["Beard", "Mustache", "Goatee"],
        Accessories: ["Glasses", "Hat", "Earrings"]
    };

    return (
        <div className="menu-container">
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`menu-options ${isOpen ? 'open' : ''}`}>
                {Object.keys(options).map((type) => (
                    <Option key={type} type={type} onClick={() => handleOptionClick(type)} />
                ))}
            </div>
            <div className="selectables-container">
                {options[selectedOption].map((item, index) => (
                    <MenuOption key={index} type={item} />
                ))}
            </div>
        </div>
    );
}

const Option = ({ type, onClick }) => {
    return (
        <div className="option-box" onClick={onClick}>
            {type}
        </div>
    );
}

export default Menu;
