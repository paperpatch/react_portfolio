import React from 'react';
import { Github } from 'react-bootstrap-icons'
import img_openfridge from '../../assets/projects/open_fridge_screenshot.webp'
import img_trackend from '../../assets/projects/trackend-screenshot.webp'
import img_runbuddy from '../../assets/projects/run-buddy-screenshot.webp'

function Featured() {

  const featured = {
    projects: [
      {
        id: "open_fridge",
        name: "Open Fridge",
        github: "https://github.com/paperpatch/open_fridge",
        deploy: "https://paperpatch.github.io/open_fridge/",
        image: img_openfridge,
        alt: "Open Fridge Project",
        description: "Recipe dashboard that provides cooking instructions and nutritional value for any recipes you need. Uses Tasty API and Ninjas Nutritional API for responsive and dynamic user inputs.",
        skills: "Foundation CSS JS jQuery API"
      },
      {
        id: "trackend",
        name: "Trackend",
        github: "https://github.com/paperpatch/trackend",
        deploy: "https://trackend-project.herokuapp.com/",
        image: img_trackend,
        alt: "Trackend Project",
        description: "Issue Tracker Ticketing System with a CMS (Content Management System) style. Uses authentication and MVC paradigm, using Handlebars.js as template, Sequelize as ORM (Object-Relational Mapping) and Express-Session for authentication.",
        skills: "Bootstrap-Table Handlebars Sequelize MySQL Express API Heroku"
      },
      {
        id: "runbuddy",
        name: "Runbuddy",
        github: "https://github.com/paperpatch",
        deploy: "https://github.com/paperpatch",
        image: img_runbuddy,
        alt: "Tutorial",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas possimus numquam dolores dignissimos, libero labore facilis minima hic soluta aliquid error excepturi harum esse ab, culpa in quibusdam molestiae beatae?",
        skills: "Boostrap JS Jquery"
      },
    ]
  }

  return (

    <section id="feature" className="feature fade-in">
      <h2 className="title">Featured Projects</h2>
      <div className="container">
        {featured.projects.map( featured => {
          return (
            <React.Fragment key={featured.id}>
              <div className="card mb-3 text-start feature-project">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="card-header">Featured Project</div>
                    <div className="card-body">
                      <h3 className="card-title"><a href={featured.deploy} target="_blank" rel="noreferrer">{featured.name}</a></h3>
                      <p className="card-text">{featured.description}</p>
                      <p><small className="text-sub">{featured.skills}</small></p>
                      <a href={featured.github} target="_blank" rel="noreferrer">
                        <Github className="bi bi-github fa-lg"></Github>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <a href={featured.deploy} target="_blank" rel="noreferrer">
                      <img src={featured.image} className="rounded float-end" alt={featured.alt} />
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
export default Featured;
