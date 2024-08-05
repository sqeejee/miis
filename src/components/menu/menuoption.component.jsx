import React from 'react';
import './menuoption.styles.css';

const MenuOption = ({ type, onClick }) => {
    return (
        <div className="pickable-option" onClick={onClick}>
            {type}
        </div>
    );
}

export default MenuOption;
