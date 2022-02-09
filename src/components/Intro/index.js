import React from "react";
import Typed from "react-typed";

function Intro() {
  return (
    <div className="intro container d-flex flex-column">
      <h1 className="intro-title">Hi, my name is</h1>
      <h1 className="intro-name">Patrick Chen.</h1>
      <span className="intro-text-slider">
        <Typed
          strings={[
            "Developer",
            "Problem Solver",
            "Engineer"
          ]}
          typeSpeed={60}
          backSpeed={30}
          backDelay={1100}
          loop
        />
      </span>
      <p className="text-sub">Currently at <a href="https://bootcamp.uconn.edu/" target="_blank"
          rel="noreferrer">UConn Bootcamp</a>.
      </p>
      <div className="mt-auto arrow">
        <div className="row text-center">
          <hr className="col my-auto"></hr>
          <a className="col-2 my-auto" href="#about"><i className="fas fa-angle-down fa-3x"></i></a>
          <hr className="col my-auto"></hr>
        </div>
      </div>
    </div>
  )
}

export default Intro