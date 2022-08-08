import React from 'react'
import profileImage from "../../assets/profile/profile-pic-2.webp";

import icon_html from '../../assets/icons/frontend/icon-html.svg'
import icon_css from '../../assets/icons/frontend/icon-css.svg'
import icon_javascript from '../../assets/icons/frontend/icon-javascript.svg'
import icon_bootstrap from '../../assets/icons/frontend/icon-bootstrap.svg'
import icon_handlebars from '../../assets/icons/frontend/icon-handlebars.svg'
import icon_react from '../../assets/icons/frontend/icon-react.svg'

import icon_java from '../../assets/icons/backend/icon-java.svg'
import icon_nodejs from '../../assets/icons/backend/icon-nodejs.svg'
import icon_jest from '../../assets/icons/backend/icon-jest.svg'
import icon_mysql from '../../assets/icons/backend/icon-mysql.svg'
import icon_mongo from '../../assets/icons/backend/icon-mongo.svg'
import icon_heroku from '../../assets/icons/backend/icon-heroku.svg'
import icon_docker from '../../assets/icons/backend/icon-docker.svg'

import icon_bash from '../../assets/icons/tools/icon-bash.svg'
import icon_github from '../../assets/icons/tools/icon-github-bootstrap.svg'
import icon_npm from '../../assets/icons/tools/icon-npm.svg'
import icon_spring from '../../assets/icons/tools/icon-spring.svg'
import icon_jira from '../../assets/icons/tools/icon-jira.svg'

function About() {

  const skills = {
    frontend: [
      {
        id: "html",
        name: "HTML",
        image: icon_html
      },
      {
        id: "css",
        name: "CSS",
        image: icon_css
      },
      {
        id: "javascript",
        name: "JavaScript",
        image: icon_javascript
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        image: icon_bootstrap
      },
      {
        id: "handlebars",
        name: "Handlebars",
        image: icon_handlebars
      },
      {
        id: "react",
        name: "React",
        image: icon_react
      }
    ],
    backend: [
      {
        id: "java",
        name: "Java",
        image: icon_java
      },
      {
        id: "nodejs",
        name: "NodeJS",
        image: icon_nodejs
      },
      {
        id: "jest",
        name: "Jest",
        image: icon_jest
      },
      {
        id: "mysql",
        name: "MySQL",
        image: icon_mysql
      },
      {
        id: "mongodb",
        name: "MongoDB",
        image: icon_mongo
      },
      {
        id: "heroku",
        name: "Heroku",
        image: icon_heroku
      },
      {
        id: "docker",
        name: "Docker",
        image: icon_docker
      },
    ],
    tools: [
      {
        id: "gitbash",
        name: "Git Bash",
        image: icon_bash
      },
      {
        id: "github",
        name: "GitHub",
        image: icon_github
      },
      {
        id: "npm",
        name: "npm",
        image: icon_npm
      },
      {
        id: "spring",
        name: "Spring",
        image: icon_spring
      },
      {
        id: "jira",
        name: "Jira",
        image: icon_jira
      },
    ]
  }

  return (
    <section id="about" className="about">
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
        <div className="row">

          <h3 className="row mt-2">Front End:</h3>
          <hr/>
          <div className="row ">
          {skills.frontend.map( frontend => {
            return (
              <React.Fragment key={frontend.id}>
                  <div className="col">
                    <img className="code-icon" src={frontend.image} alt={frontend.name} />
                    <label className="skill-name">{frontend.name}</label>
                  </div>
              </React.Fragment>
              )
            })}
          </div>
            
          <h3 className="row mt-5">Back End:</h3>
          <hr/>
          <div className="row row-cols-auto">
            {skills.backend.map( backend => {
              return (
                <React.Fragment key={backend.id}>
                  <div className="col">
                    <img className="code-icon" src={backend.image} alt={backend.name} />
                    <label className="skill-name">{backend.name}</label>
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <h3 className="row mt-5">Tools:</h3>
          <hr/>
          <div className="row row-cols-auto">
              {skills.tools.map( tools => {
                  return (
                    <React.Fragment key={tools.id}>
                      <div className="col">
                        <img className="code-icon" src={tools.image} alt={tools.name} />
                        <label className="skill-name">{tools.name}</label>
                      </div>
                    </React.Fragment>
                  )
                })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About