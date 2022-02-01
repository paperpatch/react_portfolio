import React from "react"

function Other() {
  return (

    <section id="projects" class="projects fade-in">
      <h2 class="title text-center">Other Projects</h2>

      <div class="container">
        <div class="row justify-content-evenly">

          <div class="card col-4 project-card justify-content-between">
            <span>
              <div class="card-body col-12">
                <div class="row">
                  <i class="col-10 bi bi-folder fa-3x"></i>
                  <a href="https://tech-blog-proj.herokuapp.com/" class="col-2" target="_blank" rel="noreferrer"><i class="bi bi-box-arrow-up-right fa-2x"></i></a>
                </div>
                <a href="https://tech-blog-proj.herokuapp.com/" target="_blank" rel="noreferrer">
                  <h5 class="card-title">Tech Blog</h5>
                </a>
                <p class="card-text">Built a CMS (Content Management System) style blog site. Uses Model-View-Controller paradigm and Sequelize.</p>
              </div>
            </span>
            <span>
              <div class="row">
                <p class="col-10 text-sub">JS Node Express MySQL Handlebars Heroku</p>
                <a href="https://github.com/paperpatch/tech_blog" class="card-link col-2" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </span>
          </div>

          <div class="card col-4 project-card justify-content-between">
            <span>
              <div class="card-body col-12">
                <div class="row">
                  <i class="col-10 bi bi-folder fa-3x"></i>
                  <a href="https://notetaker-express-proj.herokuapp.com/"
                    class="col-2" target="_blank" rel="noreferrer"><i class="bi bi-box-arrow-up-right fa-2x"></i></a>
                </div>
                <a href="https://notetaker-express-proj.herokuapp.com/" target="_blank" rel="noreferrer">
                  <h5 class="card-title">Note Taker</h5>
                </a>
                <p class="card-text">Created an application to write and save notes. Uses Express.js back end to save and retrieve note data from JSON file.</p>
              </div>
            </span>
            <span>
              <div class="row">
                <p class="col-10 text-sub">JavaScript Node Express Heroku</p>
                <a href="https://github.com/paperpatch/note_taker" class="card-link col-2" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </span>
          </div>

          <div class="card col-4 project-card justify-content-between">
            <span>
              <div class="card-body col-12">
                <div class="row">
                  <i class="col-10 bi bi-folder fa-3x"></i>
                  <a href="https://github.com/paperpatch/team_profile_generator" class="col-2" target="_blank" rel="noreferrer">
                    <i class="bi bi-box-arrow-up-right fa-2x"></i>
                  </a>
                </div>
                <a href="https://github.com/paperpatch/team_profile_generator" target="_blank" rel="noreferrer">
                  <h5 class="card-title">Team Profile Generator</h5>
                </a>
                <p class="card-text">Created a Node.js command line app that dynamically generates a team profile based on inputs.</p>
              </div>
            </span>
            <span>
              <div class="row">
                <p class="col-10 text-sub">JS Node Jest Inquirer</p>
                <a href="https://github.com/paperpatch/team_profile_generator" class="card-link col-2" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </span>
          </div>

          <div class="card col-4 project-card justify-content-between">
            <span>
              <div class="card-body col-12">
                <div class="row">
                  <i class="col-10 bi bi-folder fa-3x"></i>
                  <a href="https://paperpatch.github.io/weather_dashboard/" class="col-2" target="_blank" rel="noreferrer">
                    <i class="bi bi-box-arrow-up-right fa-2x"></i>
                  </a>
                </div>
                <a href="https://paperpatch.github.io/weather_dashboard/" target="_blank" rel="noreferrer">
                  <h5 class="card-title">Weather Dashboard</h5>
                </a>
                <p class="card-text">Uses OpenWeather One Call and OpenWeather Current API to retrieve weather data for
                  cities.</p>
              </div>
            </span>
            <span>
              <div class="row">
                <p class="col-10 text-sub">JS Boostrap jQuery OpenWeatherAPI</p>
                <a href="https://github.com/paperpatch/weather_dashboard" class="card-link col-2" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </span>
          </div>

          <div class="card col-4 project-card justify-content-between">
            <span>
              <div class="card-body col-12">
                <div class="row">
                  <i class="col-10 bi bi-folder fa-3x"></i>
                  <a href="https://paperpatch.github.io/schedule_workday/" class="col-2" target="_blank" rel="noreferrer">
                    <i class="bi bi-box-arrow-up-right fa-2x"></i>
                  </a>
                </div>
                <a href="https://paperpatch.github.io/schedule_workday/" target="_blank" rel="noreferrer">
                  <h5 class="card-title">Work Day Scheduler</h5>
                </a>
                <p class="card-text">A simple calendar application that allows a user to save events for each hour of
                  the day.</p>
              </div>
            </span>
            <span>
              <div class="row">
                <p class="col-10 text-sub">JS Bootstrap jQuery</p>
                <a href="https://github.com/paperpatch/schedule_workday" class="card-link col-2" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </span>
          </div>

          <div class="card col-4 project-card justify-content-between">
            <span>
              <div class="card-body col-12">
                <div class="row">
                  <i class="col-10 bi bi-folder fa-3x"></i>
                  <a href="https://github.com/paperpatch/employee_tracker" class="col-2" target="_blank" rel="noreferrer">
                    <i class="bi bi-box-arrow-up-right fa-2x"></i>
                  </a>
                </div>
                <a href="https://github.com/paperpatch/employee_tracker" target="_blank" rel="noreferrer">
                  <h5 class="card-title">Employee Tracker</h5>
                </a>
                <p class="card-text">Created a Command Line Interface App to manage a company's employee database. Uses Content Management Systems (CMS) to view and interact with databases.</p>
              </div>
            </span>
            <span>
              <div class="row">
                <p class="col-10 text-sub">JS Node MySQL</p>
                <a href="https://github.com/paperpatch/employee_tracker" class="card-link col-2" target="_blank" rel="noreferrer">
                  <i class="bi bi-github fa-lg"></i>
                </a>
              </div>
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Other;