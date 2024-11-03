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
import icon_spring from "../../assets/icons/frameworks/icon-spring.svg";

// Databases & Cloud
import icon_mysql from "../../assets/icons/databases/icon-mysql.svg";
import icon_mongo from "../../assets/icons/databases/icon-mongo.svg";
import icon_postgres from "../../assets/icons/databases/icon-postgres.svg";
import icon_heroku from "../../assets/icons/databases/icon-heroku.svg";
import icon_aws from "../../assets/icons/databases/icon-aws.svg";

// Tools
import icon_bash from "../../assets/icons/tools/icon-bash.svg";
import icon_github from "../../assets/icons/tools/icon-github.svg";
import icon_npm from "../../assets/icons/tools/icon-npm.svg";
import icon_docker from "../../assets/icons/tools/icon-docker.svg";
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
        id: "typescript",
        name: "Typescript",
        image: icon_typescript,
      },
      {
        id: "java",
        name: "Java",
        image: icon_java,
      },
    ],
    library: [
      {
        id: "nodejs",
        name: "Node.JS",
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
              Hi, I'm Pat! I've always had a passion for creating things on the
              internet, and my journey into coding began when a friend suggested
              I'd be a great fit for it. With a background as a civil engineer,
              I decided to switch careers to pursue something that excites me —
              developing software and building digital experiences.
            </p>
            <p>
              I&apos;m particularly eager to dive deeper into machine learning,
              algorithm scripting, and artificial intelligence, as I explore
              where I can contribute in today&apos;s rapidly evolving tech
              landscape.
            </p>
            <p>
              Outside of coding, I enjoy playing volleyball and climbing, and I
              also like to unwind with a good book in my free time.
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
          <div className="row">
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
          <div className="row">
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
          <div className="row">
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
          <div className="row">
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
