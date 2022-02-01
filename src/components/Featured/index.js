import React from 'react';

function Featured() {
  return (
    <section id="feature" class="feature fade-in">
      <h2 class="title">Featured Projects</h2>
      <div class="container">
        <div class="card mb-3 text-end feature-project">
          <div class="row">
            <div class="col-12 col-lg-7">
              <a href="https://paperpatch.github.io/open_fridge/" target="_blank" rel="noreferrer">
                <img src="./assets/images/screenshots/open_fridge_screenshot.webp" class="rounded float-start" alt="Open Fridge Project Screenshot" ></img>
              </a>
            </div>
            <div class="col-12 col-lg-5">
              <div class="card-header">Featured Project</div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="https://paperpatch.github.io/open_fridge/" target="_blank" rel="noreferrer">Open Fridge</a>
                </h3>
                <p class="card-text">Recipe dashboard that provides cooking instructions and nutritional value for any
                  recipes you need. Uses Tasty API and Ninjas Nutritional API for responsive and dynamic user inputs.</p>
                <p><small class="text-sub">Foundation CSS JS jQuery API</small></p>
                <a href="https://github.com/paperpatch/open_fridge" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 text-start feature-project">
          <div class="row">
            <div class="col-12 col-lg-5">
              <div class="card-header">Featured Project</div>
              <div class="card-body">
                <h3 class="card-title"><a href="https://trackend-project.herokuapp.com/" target="_blank" rel="noreferrer">Trackend</a></h3>
                <p class="card-text">Issue Tracker Ticketing System with a CMS (Content Management System) style. Uses authentication and MVC paradigm, using Handlebars.js as template, Sequelize as ORM (Object-Relational Mapping) and Express-Session for authentication.</p>
                <p><small class="text-sub">Bootstrap-Table Handlebars Sequelize MySQL Express API Heroku</small></p>
                <a href="https://github.com/paperpatch/trackend" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </div>
            <div class="col-12 col-lg-7">
              <a href="https://trackend-project.herokuapp.com/" target="_blank" rel="noreferrer">
                <img src="./assets/images/screenshots/trackend-screenshot.webp" class="rounded float-end" alt="Trackend Project Screenshot" />
              </a>
            </div>
          </div>
        </div>
        <div class="card mb-3 text-end feature-project">
          <div class="row">
            <div class="col-12 col-lg-7">
              <a href="https://github.com/paperpatch" target="_blank" rel="noreferrer">
                <img src="./assets/images/screenshots/run-buddy-screenshot.webp" class="rounded float-start" alt="..." />
              </a>
            </div>
            <div class="col-12 col-lg-5">
              <div class="card-header">Featured Project</div>
              <div class="card-body">
                <h3 class="card-title"><a href="./index.html" rel="noreferrer">Project Title</a></h3>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas possimus numquam
                  dolores dignissimos, libero labore facilis minima hic soluta aliquid error excepturi harum esse ab,
                  culpa in quibusdam molestiae beatae? </p>
                <p><small class="text-sub">Boostrap JS Jquery</small></p>
                <a href="https://github.com/paperpatch" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Featured;
