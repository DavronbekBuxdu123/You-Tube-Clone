import React from "react";
import "./loading.css";
import logo from "../assets/tubeLogo.png";

class LoadingIcon extends React.Component {
  render() {
    const background: React.CSSProperties = {
      position: "fixed",
      background: "#fff",
      width: "100%",
      height: "100vh",
      top: "0",
      left: "0",
      zIndex: 999999,
    };

    const loadingContainer: React.CSSProperties = {
      position: "relative",
    };

    const loadingIcon: React.CSSProperties = {
      width: "155px",
      height: "155px",
      position: "absolute",
      left: "50%",
      top: "50%",
      marginLeft: "-77.5px",
      marginTop: "-77.5px",
    };

    return (
      <div id="icon-background" style={background}>
        <div style={loadingIcon}>
          <div style={loadingContainer}>
            <div data-loader="logo-circle"></div>
            <img className="rounded-full" src={logo} alt="Loading..." />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingIcon;
