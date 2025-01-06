import React from "react";
import Typed from "react-typed";

function Intro() {
  return (
    <div className="intro">
      <h1 className="intro-title">Hi, my name is</h1>
      <h1 className="intro-name">Pat Chen.</h1>
      <span className="intro-text-slider">
        <Typed
          strings={["Developer", "Problem Solver", "Engineer"]}
          typeSpeed={60}
          backSpeed={30}
          backDelay={1100}
          loop
        />
      </span>
      <p className="text-sub">Experienced Software Engineer</p>
      <div className="arrow">
        <hr />
        <a href="#about">
          <i className="fas fa-angle-down"></i>
        </a>
        <hr />
      </div>
    </div>
  );
}

export default Intro;
