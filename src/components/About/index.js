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
import icon_postgresql from "../../assets/icons/databases/icon-postgresql.svg";
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
      { id: 1, name: "HTML", image: icon_html },
      { id: 2, name: "CSS", image: icon_css },
      { id: 3, name: "JavaScript", image: icon_javascript },
      { id: 4, name: "Typescript", image: icon_typescript },
      { id: 5, name: "Java", image: icon_java },
    ],
    library: [
      { id: 1, name: "Node.JS", image: icon_nodejs },
      { id: 2, name: "Jest", image: icon_jest },
      { id: 3, name: "Bootstrap", image: icon_bootstrap },
      { id: 4, name: "Handlebars", image: icon_handlebars },
      { id: 5, name: "React", image: icon_react },
      { id: 6, name: "Spring", image: icon_spring },
    ],
    databases: [
      { id: 1, name: "MySQL", image: icon_mysql },
      { id: 2, name: "MongoDB", image: icon_mongo },
      { id: 3, name: "PostgreSQL", image: icon_postgresql },
      { id: 4, name: "Heroku", image: icon_heroku },
      { id: 5, name: "AWS", image: icon_aws },
    ],
    tools: [
      { id: 1, name: "Git Bash", image: icon_bash },
      { id: 2, name: "GitHub", image: icon_github },
      { id: 3, name: "npm", image: icon_npm },
      { id: 4, name: "Jira", image: icon_jira },
      { id: 5, name: "Docker", image: icon_docker },
    ],
  };

  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-description">
          <p>
            Hi, I'm Pat! I've always had a passion for creating things on the
            internet, and my journey into coding began when a friend suggested
            I'd be a great fit for it. With a background as a civil engineer, I
            decided to switch careers to pursue something that excites me —
            developing software and building digital experiences.
          </p>
          <p>
            I&apos;m particularly eager to dive deeper into machine learning,
            algorithm scripting, and artificial intelligence, as I explore where
            I can contribute in today&apos;s rapidly evolving tech landscape.
          </p>
          <p>
            Outside of coding, I enjoy playing volleyball and climbing, and I
            also like to unwind with a good book in my free time.
          </p>
        </div>
        <img className="about-img" src={profileImage} alt="About" />
      </div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-section">
        <h3>Languages:</h3>
        <hr />
        <div className="skills-container">
          {skills.languages.map((language) => (
            <div className="skill">
              <img
                className="code-icon"
                src={language.image}
                alt={language.name}
              />
              <label className="skill-label">{language.name}</label>
            </div>
          ))}
        </div>

        <h3>Frameworks:</h3>
        <hr />
        <div className="skills-container">
          {skills.library.map((library) => (
            <div className="skill">
              <img
                className="code-icon"
                src={library.image}
                alt={library.name}
              />
              <label className="skill-label">{library.name}</label>
            </div>
          ))}
        </div>

        <h3>Databases & Cloud:</h3>
        <hr />
        <div className="skills-container">
          {skills.databases.map((database) => (
            <div className="skill">
              <img
                className="code-icon"
                src={database.image}
                alt={database.name}
              />
              <label className="skill-label">{database.name}</label>
            </div>
          ))}
        </div>

        <h3>Tools:</h3>
        <hr />
        <div className="skills-container">
          {skills.tools.map((tool) => (
            <div className="skill">
              <img className="code-icon" src={tool.image} alt={tool.name} />
              <label className="skill-label">{tool.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
