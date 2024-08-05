import React from 'react';
import './menuoption.styles.css';

const MenuOption = ({ type, onClick }) => {
    return (
        <div className="pickable-option" onClick={onClick}>
            <img src={type.svg} alt={type.name} className="mini-svg" />
        </div>
    );
}

export default MenuOption;
