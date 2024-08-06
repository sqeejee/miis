import React from "react";
import Menu from "../menu/menu.component";
import './customize.styles.css';
import Portrait from "../portrait/portrait.component";

const CustomizeScreen = () => {
    return (
        <div className="custom">
        <div className="menu-container">
            <Menu />
        </div>
        <div className="portrait-container">
            <Portrait />
        </div>
        </div>
    );
}

export default CustomizeScreen;
