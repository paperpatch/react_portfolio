import React from 'react';

function Experience() {

  return (

    <section id="experience" className="jobs fade-in">
      <h2 className="title">Experience</h2>

      <article>
        <h3>
          Developer @ <a href="https://bootcamp.uconn.edu/" target="_blank" rel="noreferrer">UConn Bootcamp</a>
        </h3>
        <p className="range">September 2021 - Present</p> <br />
        <ul>
          <li>
            Worked with a variety of languages, platforms, frameworks, and content management systems such as
            JavaScript, Bootstrap, Node.JS, and mySQL.
          </li>
          <li>
            Collaborated with a small team of student designers to build a multi page recipe app, that provides a set of recipe instructions and nutritional values using multiple sources of APIs.
          </li>
          <li>
            Experienced with developing and maintaining code for in-house and clients.
          </li>
        </ul>
      </article>

      <article>
        <h3>
          Engineer @ <a href="https://www.gargengineering.com/" target="_blank" rel="noreferrer">Garg Consulting Services</a>
        </h3>
        <p className="range">April 2016 - September 2021</p> <br />
        <ul>
          <li>
            Inspection and documentation of all construction activities, working with Amtrak and Metro North force
            account project activities. Coordinated and implemented all engineering, technical, or administrative
            determinations.
          </li>
          <li>
            Office Engineer for development of schedules, estimates, constructability reviews, and value engineering.
            Duties include field coordination, utility coordination, and setting up databases.
          </li>
          <li>
            Responsible for logging data, submittals, and inquiries; managing and organizing documents including
            contracts and specifications; drafting responses for inquiries and reviewing engineer responses for
            specification conformity.
          </li>
        </ul>
      </article>

      <article>
        <h3>
          Student @ <a href="https://uconn.edu/" target="_blank" rel="noreferrer">University of Connecticut</a>
        </h3>
        <p className="range">Winter 2015</p><br/>
        <ul>
          <li>
            Designed sidewalk for predestrians using AutoCAD. Performed calculations on culvert design for improvements on
            Route 89.
          </li>
          <li>
            Project leader for scheduling goals, deadlines, regulated cost estimates on design project through weekly
            meetings and discussions.
          </li>
        </ul>
      </article>
    </section>
    
  );
}
export default Experience;
