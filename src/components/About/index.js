import React from "react";
import profileImage from "../../assets/profile/profile-pic-2.webp";

// Languages
import icon_html from "../../assets/icons/languages/icon-html.svg";
import icon_css from "../../assets/icons/languages/icon-css.svg";
import icon_typescript from "../../assets/icons/languages/icon-typescript.svg";
import icon_javascript from "../../assets/icons/languages/icon-javascript.svg";
import icon_java from "../../assets/icons/languages/icon-java.svg";

// Frameworks & Library
import icon_bootstrap from "../../assets/icons/frameworks/icon-bootstrap.svg";
import icon_handlebars from "../../assets/icons/frameworks/icon-handlebars.svg";
import icon_nodejs from "../../assets/icons/frameworks/icon-nodejs.svg";
import icon_jest from "../../assets/icons/frameworks/icon-jest.svg";
import icon_react from "../../assets/icons/frameworks/icon-react.svg";

// Databases & Cloud
import icon_mysql from "../../assets/icons/databases/icon-mysql.svg";
import icon_mongo from "../../assets/icons/databases/icon-mongo.svg";
import icon_postgres from "../../assets/icons/databases/icon-postgres.svg";
import icon_heroku from "../../assets/icons/databases/icon-heroku.svg";
import icon_aws from "../../assets/icons/databases/icon-aws.svg";

// Tools
import icon_bash from "../../assets/icons/tools/icon-bash.svg";
import icon_github from "../../assets/icons/tools/icon-github-bootstrap.svg";
import icon_npm from "../../assets/icons/tools/icon-npm.svg";
import icon_docker from "../../assets/icons/tools/icon-docker.svg";
import icon_spring from "../../assets/icons/tools/icon-spring.svg";
import icon_jira from "../../assets/icons/tools/icon-jira.svg";

function About() {
  const skills = {
    languages: [
      {
        id: "html",
        name: "HTML",
        image: icon_html,
      },
      {
        id: "css",
        name: "CSS",
        image: icon_css,
      },
      {
        id: "javascript",
        name: "JavaScript",
        image: icon_javascript,
      },
      {
        id: "java",
        name: "Java",
        image: icon_java,
      },
      {
        id: "typescript",
        name: "Typescript",
        image: icon_typescript,
      },
    ],
    library: [
      {
        id: "nodejs",
        name: "NodeJS",
        image: icon_nodejs,
      },
      {
        id: "jest",
        name: "Jest",
        image: icon_jest,
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        image: icon_bootstrap,
      },
      {
        id: "handlebars",
        name: "Handlebars",
        image: icon_handlebars,
      },
      {
        id: "react",
        name: "React",
        image: icon_react,
      },
      {
        id: "spring",
        name: "Spring",
        image: icon_spring,
      },
    ],
    databases: [
      {
        id: "mysql",
        name: "MySQL",
        image: icon_mysql,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        image: icon_mongo,
      },
      {
        id: "postgres",
        name: "PostgresSQL",
        image: icon_postgres,
      },
      {
        id: "heroku",
        name: "Heroku",
        image: icon_heroku,
      },
      {
        id: "aws",
        name: "AWS",
        image: icon_aws,
      },
    ],
    tools: [
      {
        id: "gitbash",
        name: "Git Bash",
        image: icon_bash,
      },
      {
        id: "github",
        name: "GitHub",
        image: icon_github,
      },
      {
        id: "npm",
        name: "npm",
        image: icon_npm,
      },
      {
        id: "jira",
        name: "Jira",
        image: icon_jira,
      },
      {
        id: "docker",
        name: "Docker",
        image: icon_docker,
      },
    ],
  };

  return (
    <section id="about" className="about">
      <h2 className="title">About Me</h2>
      <div className="inner container">
        <div className="row">
          <div className="about-description col-lg-6 col-md-12">
            <p>
              Hello! My name is Pat and I enjoy creating things on the internet.
              My interest in coding started when a friend introduced me and
              thought I would be a good fit. Previously a civil engineer, I
              decided to take a career change for coding to pursue making things
              that would excite me.
            </p>
            <p>
              I am looking forward to learning about machine algorithm scripting
              and artificial intelligence. I want to experience and explore
              where I stand in this rapid technological developing world.
            </p>
            <p>
              Apart from coding, I enjoy sports like volleyball, cycling and
              ultimate. As for hobbies, I occassionally play chess and board
              games on my free time.
            </p>
          </div>
          <img
            className="col-lg-6 col-md-12 m-auto profile-pic"
            src={profileImage}
            alt="Pat Chen"
          />
        </div>
      </div>
      <h2 className="title">Skills</h2>
      <div className="container">
        <div className="row">
          <h3 className="row mt-2">Languages:</h3>
          <hr />
          <div className="row ">
            {skills.languages.map((language) => {
              return (
                <React.Fragment key={language.id}>
                  <div className="col">
                    <img
                      className="code-icon"
                      src={language.image}
                      alt={language.name}
                    />
                    <label className="skill-name">{language.name}</label>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <h3 className="row mt-5">Frameworks & Library:</h3>
          <hr />
          <div className="row row-cols-auto">
            {skills.library.map((library) => {
              return (
                <React.Fragment key={library.id}>
                  <div className="col">
                    <img
                      className="code-icon"
                      src={library.image}
                      alt={library.name}
                    />
                    <label className="skill-name">{library.name}</label>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <h3 className="row mt-5">Databases & Cloud:</h3>
          <hr />
          <div className="row row-cols-auto">
            {skills.databases.map((database) => {
              return (
                <React.Fragment key={database.id}>
                  <div className="col">
                    <img
                      className="code-icon"
                      src={database.image}
                      alt={database.name}
                    />
                    <label className="skill-name">{database.name}</label>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <h3 className="row mt-5">Tools:</h3>
          <hr />
          <div className="row row-cols-auto">
            {skills.tools.map((tool) => {
              return (
                <React.Fragment key={tool.id}>
                  <div className="col">
                    <img
                      className="code-icon"
                      src={tool.image}
                      alt={tool.name}
                    />
                    <label className="skill-name">{tool.name}</label>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
