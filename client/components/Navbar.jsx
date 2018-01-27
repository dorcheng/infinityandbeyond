import React, { Component } from "react";

export default function Navbar() {
    return (
      <div>
      <header className="header">
        <div className="header__logo-box">
          <img src="../../public/eventpage/img/add.png" alt="logo" className="header__logo" />
        </div>
       <div className="header__text-container">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hackathon!</span>
          <span className="heading-primary--sub">Tell us your interests!</span>
        </h1>
        </div>
      </header>
      </div>
    )
}
