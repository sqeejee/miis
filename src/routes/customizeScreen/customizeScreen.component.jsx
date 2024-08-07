import React from "react";
import Menu from "../../components/menu/menu.component";
import './customize.styles.css';
import Portrait from "../../components/portrait/portrait.component";
import CaptureButton from "../../components/captureButton/captureButton.component";
import { UserContext } from "../../contexts/users.context";

const CustomizeScreen = () => {
  const currentUser = React.useContext(UserContext);
  const captureRef = React.useRef(null);

  return (
    <>
      {currentUser ? (
        <div className="custom">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="portrait-container">
            <Portrait ref={captureRef} />
            <CaptureButton className="c-screen-cbutton" captureRef={captureRef}></CaptureButton>
          </div>
        </div>
      ) : (
        <h1>No user</h1>
      )}
    </>
  );
}

export default CustomizeScreen;
