import React from 'react'
import profileImage from "../../assets/profile/profile-pic-2.webp";

function About() {

  return (
    <section id="about" className="about fade-in">
      <h2 className="title">
        About Me
      </h2>
      <div className="inner container">
        <div className="row">
          <div className="about-description col-lg-6 col-md-12">
            <p>
              Hello! My name is Pat and I enjoy creating things on the internet. My interest in coding started when a
              friend introduced me and thought I would be a good fit. Previously a civil engineer, I decided to take a
              career change for coding to pursue making things that would excite me.
            </p>
            <p>
              I am looking forward to learning about machine algorithm scripting and artificial intelligence. I want to experience and explore where I stand in this
              rapid technological developing world.</p>
            <p>
              Apart from coding, I enjoy sports like volleyball, cycling and ultimate. As for hobbies, I occassionally
              play chess and board games on my free time.
            </p>
          </div>
          <img className="col-lg-6 col-md-12 m-auto profile-pic" src={profileImage} alt="Pat Chen" />
        </div>
      </div>
      <h2 className="title">Skills</h2>
      <div className="container">
        <div className="row row-cols-auto">
          <h3 className="col my-auto">Front End:</h3>
          <img className="col code-icon" src="./assets/images/icons/html-1.svg" alt="html5" />
          <img className="col code-icon" src="./assets/images/icons/css-3.svg" alt="css3" />
          <img className="col code-icon" src="./assets/images/icons/javascript-1.svg" alt="javascript" />
          <img className="col code-icon" src="./assets/images/icons/bootstrap-5-1.svg" alt="bootstrap5" />
          <img className="col code-icon" src="./assets/images/icons/handlebars-1.svg" alt="handlebars-1" />
          <img className="col code-icon" src="./assets/images/icons/react-2.svg" alt="react" />
        </div>
        <div className="row row-cols-auto">
          <h3 className="col my-auto">Back End:</h3>
          <img className="col code-icon" src="./assets/images/icons/nodejs-1.svg" alt="nodeJS" />
          <img className="col code-icon" src="./assets/images/icons/jest-2.svg" alt="jest" />
          <img className="col code-icon" src="./assets/images/icons/mysql-6.svg" alt="mySQL" />
          <img className="col code-icon" src="./assets/images/icons/mongodb-icon-1.svg" alt="mongoDB" />
          <img className="col code-icon" src="./assets/images/icons/heroku-4.svg" alt="heroku" />
        </div>
        <div className="row row-cols-auto">
          <h3 className="col my-auto">Tools:</h3>
          <img className="col code-icon" src="./assets/images/icons/git-bash.svg" alt="git-bash" />
          <div className="col code-icon"><i className="fab fa-github fa-3x"></i></div>
          <img className="col code-icon" src="./assets/images/icons/npm.svg" alt="npm" />
        </div>
      </div>
    </section>
  )
}

export default About