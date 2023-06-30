import React from "react";
import "./index.css"; // Create a CSS file for preloader styling
import logo from '../dist/logo.png'

const Preloader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img src={logo} alt="" className="puff-in-center w-72" />
    </div>
  );
};

export default Preloader;
