import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  const work = {
    company: [
      {
        id: "bootcamp",
        name: "UConn Bootcamp",
        role: "Developer",
        dates: "September 2021 - Present",
        link: "https://bootcamp.uconn.edu/",
        description1: "Worked with a variety of languages, platforms, frameworks, and content management systems such as JavaScript, Node.JS, mySQL, MongoDB and React.",
        description2: "Collaborated with a small team of student designers to build a multi page recipe app, that provides a set of recipe instructions and nutritional values using multiple sources of APIs.",
        description3: "Experienced with developing and maintaining code for in-house and clients.",
      },
      {
        id: "garg",
        name: "Garg Consulting Services",
        role: "Engineer",
        dates: "April 2016 - September 2021",
        link: "https://www.gargengineering.com/",
        description1: "Inspection and documentation of all construction activities, working with Amtrak and Metro North force account project activities. Coordinated and implemented all engineering, technical, or administrative determinations.",
        description2: "Office Engineer for development of schedules, estimates, constructability reviews, and value engineering. Duties include field coordination, utility coordination, and setting up databases.",
        description3: "Responsible for logging data, submittals, and inquiries; managing and organizing documents including contracts and specifications; drafting responses for inquiries and reviewing engineer responses for specification conformity.",
      },
      {
        id: "uconn",
        name: "University of Connecticut",
        role: "Student",
        dates: "Winter 2015",
        link: "https://uconn.edu/",
        description1: "Designed sidewalk for predestrians using AutoCAD. Performed calculations on culvert design for improvements on Route 89.",
        description2: "Project leader for scheduling goals, deadlines, regulated cost estimates on design project through weekly meetings and discussions."
      },
    ]
  }

  return (

    <section id="experience" className="jobs fade-in">
      <h2 className="title">Experience</h2>

      {work.company.map( data => {
          return (
            <React.Fragment key={data.id}>
              <article>
                <h3>{data.role} @ <a href={data.deploy} target="_blank" rel="noreferrer">{data.name}</a></h3>
                <p className="range">{data.dates}</p> <br />

                <ul>
                  <li>
                    {data.description1}
                  </li>
                  <li>
                    {data.description2}
                  </li>
                  <li>
                    {data.description3}
                  </li>
                </ul>
              </article>
            </React.Fragment>
          );
        })}

    </section>
  );
}
export default Experience;
