import React from 'react'
import profileImage from "../../assets/profile/profile-pic-2.webp";

function About() {

  return (
    <section id="about" class="about fade-in">
      <h2 class="title">
        About Me
      </h2>
      <div class="inner container">
        <div class="row">
          <div class="about-description col-lg-6 col-md-12">
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
          <img class="col-lg-6 col-md-12 m-auto profile-pic" src={profileImage} alt="Pat Chen" />
        </div>
      </div>
      <h2 class="title">Skills</h2>
      <div class="container">
        <div class="row row-cols-auto">
          <h3 class="col my-auto">Front End:</h3>
          <img class="col code-icon" src="./assets/images/icons/html-1.svg" alt="html5" />
          <img class="col code-icon" src="./assets/images/icons/css-3.svg" alt="css3" />
          <img class="col code-icon" src="./assets/images/icons/javascript-1.svg" alt="javascript" />
          <img class="col code-icon" src="./assets/images/icons/bootstrap-5-1.svg" alt="bootstrap5" />
          <img class="col code-icon" src="./assets/images/icons/handlebars-1.svg" alt="handlebars-1" />
          <img class="col code-icon" src="./assets/images/icons/react-2.svg" alt="react" />
        </div>
        <div class="row row-cols-auto">
          <h3 class="col my-auto">Back End:</h3>
          <img class="col code-icon" src="./assets/images/icons/nodejs-1.svg" alt="nodeJS" />
          <img class="col code-icon" src="./assets/images/icons/jest-2.svg" alt="jest" />
          <img class="col code-icon" src="./assets/images/icons/mysql-6.svg" alt="mySQL" />
          <img class="col code-icon" src="./assets/images/icons/mongodb-icon-1.svg" alt="mongoDB" />
          <img class="col code-icon" src="./assets/images/icons/heroku-4.svg" alt="heroku" />
        </div>
        <div class="row row-cols-auto">
          <h3 class="col my-auto">Tools:</h3>
          <img class="col code-icon" src="./assets/images/icons/git-bash.svg" alt="git-bash" />
          <div class="col code-icon"><i class="fab fa-github fa-3x"></i></div>
          <img class="col code-icon" src="./assets/images/icons/npm.svg" alt="npm" />
        </div>
      </div>
    </section>
  )
}

export default About