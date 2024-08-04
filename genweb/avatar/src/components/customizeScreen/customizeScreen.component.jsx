import React from "react";
import Selection from "../selection/selection.component";
import Menu from "../menu/menu.component";
import './customize.styles.css';

const CustomizeScreen = () => {
    return (
        <div className="custom">
            <Menu className="menu"/>
            <Selection className="selection"/>
        </div>
    );
}

export default CustomizeScreen;
