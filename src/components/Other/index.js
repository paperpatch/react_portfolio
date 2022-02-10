import React, { useState } from "react"
import { Github, Folder, BoxArrowUpRight } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';

function Other() {

  const projects = {
    other: [
      {
        id: "budget_tracker",
        name: "Budget Taker",
        github: "https://github.com/paperpatch/budget_tracker",
        deploy: "https://budget-tracker-software.herokuapp.com/",
        description: "Application to provide users a fast and easy way to track money transactions. This app allows for offline access and functionality. Features Mongoose, IndexedDB, Service Workers, and Web Manifest.",
        skills: "JavaScript Express Mongoose MongoDB Heroku"
      },
      {
        id: "social_network",
        name: "Social Network API",
        github: "https://github.com/paperpatch/social_network_api",
        deploy: "https://github.com/paperpatch/social_network_api",
        description: "Startup social app where users have thoughts to share and other users can input reactions to users' thoughts. Built by using NoSQL MogoDB and Insomnia to test api routes.",
        skills: "JavaScript MongoDB Insomnia "
      },
      {
        id: "tech_blog",
        name: "Tech Blog",
        github: "https://github.com/paperpatch/tech_blog",
        deploy: "https://tech-blog-proj.herokuapp.com/",
        description: "Built a CMS (Content Management System) style blog site. Uses Model-View-Controller paradigm and Sequelize.",
        skills: "JS Node Express MySQL Handlebars Heroku"
      },
      {
        id: "e_commerce_back_end",
        name: "E-Commerce Back End",
        github: "https://github.com/paperpatch/e_commerce_back_end",
        deploy: "https://github.com/paperpatch/e_commerce_back_end",
        description: "Created a back end for a general company's e-commerce site suing Express.js API and Sequelize configurations to interact with a MySQL database. Uses environmental variables and password zero-dependency module.",
        skills: "JS Express MySQL Insomnia"
      },
      {
        id: "employee_tracker",
        name: "Employee Tracker",
        github: "https://github.com/paperpatch/employee_tracker",
        deploy: "https://github.com/paperpatch/employee_tracker",
        description: "Created a Command Line Interface App to manage a company's employee database. Uses Content Management Systems (CMS) to view and interact with databases.",
        skills: "JS Node MySQL"
      },
      {
        id: "note_taker",
        name: "Note Taker",
        github: "https://github.com/paperpatch/note_taker",
        deploy: "https://notetaker-express-proj.herokuapp.com/",
        description: "Created an application to write and save notes. Uses Express.js back end to save and retrieve note data from JSON file.",
        skills: "JavaScript Node Express Heroku"
      },
    ]
  }

  const additional = {
    other: [
      {
        id: "team_profile_generator",
        name: "Team Profile Generator",
        github: "https://github.com/paperpatch/team_profile_generator",
        deploy: "https://github.com/paperpatch/team_profile_generator",
        description: "Created a Node.js command line app that dynamically generates a team profile based on inputs.",
        skills: "JS Node Jest Inquirer"
      },
      {
        id: "work_day_scheduler",
        name: "Work Day Scheduler",
        github: "https://github.com/paperpatch/schedule_workday",
        deploy: "https://paperpatch.github.io/schedule_workday/",
        description: "A simple calendar application that allows a user to save events for each hour of the day.",
        skills: "JS Bootstrap jQuery"
      },
      {
        id: "weather_dashboard",
        name: "Weather Dashboard",
        github: "https://github.com/paperpatch/weather_dashboard",
        deploy: "https://paperpatch.github.io/weather_dashboard/",
        description: "Uses OpenWeather One Call and OpenWeather Current API to retrieve weather data for cities.",
        skills: "JS Boostrap jQuery OpenWeatherAPI"
      },
      {
        id: "code_quiz",
        name: "Code Quiz",
        github: "https://github.com/paperpatch/code_quiz",
        deploy: "https://paperpatch.github.io/code_quiz/",
        description: "A timed coding quiz with multiple-choice questions regarding basic JavaScript questions. Features dynamically updated HTML and CSS powered by JavaScript.",
        skills: "HTML CSS JavaScript"
      },
    ]
  }

  const [showMore, setShowMore] = useState(false);

  return (

    <section id="projects" className="projects">
      <h2 className="title text-center">Other Projects</h2>

      <div className="container">
        <div className="row justify-content-evenly">

          {projects.other.map( other => { 
            return (
              <React.Fragment key={other.id}>
              <div className="card col-4 project-card">
                <div className="card-body col-12">
                  <div className="row justify-content-between">
                    <Folder className="col-3" size={56}/>
                    <a href={other.deploy} className="col-2" target="_blank" rel="noreferrer"><BoxArrowUpRight size={42}/></a>
                  </div>
                  <a href={other.deploy} target="_blank" rel="noreferrer">
                    <h5 className="card-title">{other.name}</h5>
                  </a>
                  <p className="card-text">{other.description}</p>
                </div>
                <div className="row">
                  <p className="col-10 text-skill">{other.skills}</p>
                  <a href={other.github} className="card-link col-2" target="_blank" rel="noreferrer">
                    <Github size={32} />
                  </a>
                </div>
              </div>
              </React.Fragment>
            )
          })}

          {showMore && additional.other.map( other => { 
            return (
              <React.Fragment key={other.id}>
              <div className="card col-4 project-card">
                <div className="card-body col-12">
                  <div className="row justify-content-between">
                    <Folder className="col-3" size={56}/>
                    <a href={other.deploy} className="col-2" target="_blank" rel="noreferrer"><BoxArrowUpRight size={42}/></a>
                  </div>
                  <a href={other.deploy} target="_blank" rel="noreferrer">
                    <h5 className="card-title">{other.name}</h5>
                  </a>
                  <p className="card-text">{other.description}</p>
                </div>
                <div className="row">
                  <p className="col-10 text-skill">{other.skills}</p>
                  <a href={other.github} className="card-link col-2" target="_blank" rel="noreferrer">
                    <Github size={32} />
                  </a>
                </div>
              </div>
              </React.Fragment>
            )
          })}
        
        <Button className="other-projects-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
        </div>
      </div>
    </section>
  )
}

export default Other;