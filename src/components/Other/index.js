import React, { useState } from "react";
import { Github, Folder, BoxArrowUpRight } from "react-bootstrap-icons";
import "./Other.css";

function Other() {
  const projects = [
    {
      id: 1,
      name: "Open Fridge",
      github: "https://github.com/paperpatch/open_fridge",
      deploy: "https://paperpatch.github.io/open_fridge/",
      description:
        "Recipe dashboard that provides cooking instructions and nutritional value for any recipes you need. Uses Tasty API and Ninjas Nutritional API for responsive and dynamic user inputs.",
      skills: "Foundation CSS JS jQuery API",
    },
    {
      id: 2,
      name: "Work Day Scheduler",
      github: "https://github.com/paperpatch/schedule_workday",
      deploy: "https://paperpatch.github.io/schedule_workday/",
      description:
        "A simple calendar application that allows a user to save events for each hour of the day.",
      skills: "JS Bootstrap jQuery",
    },
    {
      id: 3,
      name: "Weather Dashboard",
      github: "https://github.com/paperpatch/weather_dashboard",
      deploy: "https://paperpatch.github.io/weather_dashboard/",
      description:
        "Uses OpenWeather One Call and OpenWeather Current API to retrieve weather data for cities.",
      skills: "JS Boostrap jQuery OpenWeatherAPI",
    },
    {
      id: 4,
      name: "Code Quiz",
      github: "https://github.com/paperpatch/code_quiz",
      deploy: "https://paperpatch.github.io/code_quiz/",
      description:
        "A timed coding quiz with multiple-choice questions regarding basic JavaScript questions. Features dynamically updated HTML and CSS powered by JavaScript.",
      skills: "HTML CSS JavaScript",
    },
    {
      id: 5,
      name: "Trackend",
      github: "https://github.com/paperpatch/trackend",
      deploy: "https://github.com/paperpatch/trackend",
      alt: "Trackend Project",
      description:
        "Issue Tracker Ticketing System with a CMS (Content Management System) style. Uses authentication and MVC paradigm, using Handlebars.js as template, Sequelize as ORM (Object-Relational Mapping) and Express-Session for authentication.",
      skills: "Handlebars MySQL Express API Heroku",
    },
    {
      id: 6,
      name: "Book Search Engine",
      github: "https://github.com/paperpatch/book_search_engine",
      deploy: "https://github.com/paperpatch/book_search_engine",
      description:
        "Constructed a MERN application to search up books. Users are able to sign up, login in, and save books to their profile. Uses React, MongoDB and Apollo Server to power the searches.",
      skills: "React MongoDB GraphQL Apollo Heroku",
    },
  ];

  const additional = [
    {
      id: 1,
      name: "Budget Tracker",
      github: "https://github.com/paperpatch/budget_tracker",
      deploy: "https://github.com/paperpatch/budget_tracker",
      description:
        "Application to provide users a fast and easy way to track money transactions. This app allows for offline access and functionality. Features Mongoose, IndexedDB, Service Workers, and Web Manifest.",
      skills: "JavaScript Express Mongoose MongoDB Heroku",
    },
    {
      id: 2,
      name: "Employee Tracker",
      github: "https://github.com/paperpatch/employee_tracker",
      deploy: "https://github.com/paperpatch/employee_tracker",
      description:
        "Created a Command Line Interface App to manage a company's employee database. Uses Content Management Systems (CMS) to view and interact with databases.",
      skills: "JS Node MySQL",
    },
    {
      id: 3,
      name: "Note Taker",
      github: "https://github.com/paperpatch/note_taker",
      deploy: "https://github.com/paperpatch/note_taker",
      description:
        "Created an application to write and save notes. Uses Express.js back end to save and retrieve note data from JSON file.",
      skills: "JavaScript Node Express Heroku",
    },
    {
      id: 4,
      name: "Team Profile Generator",
      github: "https://github.com/paperpatch/team_profile_generator",
      deploy: "https://github.com/paperpatch/team_profile_generator",
      description:
        "Created a Node.js command line app that dynamically generates a team profile based on inputs.",
      skills: "JS Node Jest Inquirer",
    },
    {
      id: 5,
      name: "Social Network API",
      github: "https://github.com/paperpatch/social_network_api",
      deploy: "https://github.com/paperpatch/social_network_api",
      description:
        "Startup social app where users have thoughts to share and other users can input reactions to users' thoughts. Built by using NoSQL MogoDB and Insomnia to test api routes.",
      skills: "JavaScript MongoDB Insomnia ",
    },
    {
      id: 6,
      name: "Tech Blog",
      github: "https://github.com/paperpatch/tech_blog",
      deploy: "https://github.com/paperpatch/tech_blog",
      description:
        "Built a CMS (Content Management System) style blog site. Uses Model-View-Controller paradigm and Sequelize.",
      skills: "JS Node Express MySQL Handlebars Heroku",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <section id="other" className="other">
      <h2 className="other-title">Other Projects</h2>
      <div className="other-container">
        {projects.map((project) => {
          return (
            <div key={project.id} className="project-wrapper">
              <div className="project-card">
                <div className="card-header">
                  <Folder size={56} />
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BoxArrowUpRight size={42} />
                  </a>
                </div>
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="card-title">{project.name}</h5>
                </a>
                <p className="card-text">{project.description}</p>
                <div className="skills-container">
                  <p className="text-skill">{project.skills}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={32} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {showMore &&
          additional.map((project) => {
            return (
              <div key={project.id}>
                <div className="project-card">
                  <div className="card-header">
                    <Folder size={56} />
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BoxArrowUpRight size={42} />
                    </a>
                  </div>
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="card-title">{project.name}</h5>
                  </a>
                  <p className="card-text">{project.description}</p>
                  <div className="skills-container">
                    <p className="text-skill">{project.skills}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={32} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default Other;
