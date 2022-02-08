import React from 'react'
import profileImage from "../../assets/profile/profile-pic-2.webp";
import icon_html from '../../assets/icons/frontend/0.svg'
import icon_css from '../../assets/icons/frontend/1.svg'
import icon_javascript from '../../assets/icons/frontend/2.svg'
import icon_bootstrap from '../../assets/icons/frontend/3.svg'
import icon_handlebars from '../../assets/icons/frontend/4.svg'
import icon_react from '../../assets/icons/frontend/5.svg'
import icon_nodejs from '../../assets/icons/backend/0.svg'
import icon_jest from '../../assets/icons/backend/1.svg'
import icon_mysql from '../../assets/icons/backend/2.svg'
import icon_mongo from '../../assets/icons/backend/3.svg'
import icon_heroku from '../../assets/icons/backend/4.svg'
import icon_bash from '../../assets/icons/tools/0.svg'
import icon_github from '../../assets/icons/tools/1.svg'
import icon_npm from '../../assets/icons/tools/2.svg'

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
    ]
  }

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
        <div className="row">

          <h3 className="row mt-2">Front End:</h3>
          <hr/>
          <div className="row">
          {skills.frontend.map( frontend => {
            return (
              <React.Fragment key={frontend.id}>
                  <div className="col">
                    <img className="row code-icon" src={frontend.image} alt={frontend.name} />
                    <span className="row">{frontend.name}</span>
                  </div>
              </React.Fragment>
              )
            })}
          </div>
            
          <h3 className="row mt-5">Back End:</h3>
          <hr/>
          <div className="row">
            {skills.backend.map( backend => {
              return (
                <React.Fragment key={backend.id}>
                  <div className="col">
                    <img className="row code-icon" src={backend.image} alt={backend.name} />
                    <span className="row">{backend.name}</span>
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <h3 className="row mt-5">Tools:</h3>
          <hr/>
          <div className="row">
              {skills.tools.map( tools => {
                  return (
                    <React.Fragment key={tools.id}>
                      <div className="col">
                        <img className="code-icon" src={tools.image} alt={tools.name} />
                        <span>{tools.name}</span>
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