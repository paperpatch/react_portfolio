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
        dates: "September 2021 - March 2022",
        link: "https://bootcamp.uconn.edu/",
        description1: "Experienced with a variety of languages, platforms, frameworks, and content management systems.",
        description2: "Collaborated with small teams of student designers to build a multi page recipe app and a Issue Tracker content management system.",
        description3: "Developed and maintained code for in-house and clients.",
      },
      {
        id: "garg",
        name: "Garg Consulting Services",
        role: "Engineer",
        dates: "April 2016 - September 2021",
        link: "https://www.gargengineering.com/",
        description1: "Inspection and documentation of all construction activities. Coordinated all technical and administrative determinations.",
        description2: "Office Engineer for development of schedules, estimates, constructability reviews, and value engineering.",
        description3: "Responsible for reviewing data, submittals, and inquiries. Manage design plans and specifications for conformity.",
      },
      {
        id: "uconn",
        name: "University of Connecticut",
        role: "Student",
        dates: "Winter 2015",
        link: "https://uconn.edu/",
        description1: "Designed sidewalk for predestrians using AutoCAD. Performed calculations on culvert design for improvements on Route 89.",
        description2: "Project leader for scheduling goals, deadlines, regulated cost estimates on design project through weekly meetings and discussions.",
        description3: "Implemented Computer-aided Design (CAD) for project design and presentation."
      },
    ]
  }

  return (

    <section id="experience" className="jobs fade-in">
      <h2 className="title">Experience</h2>
      <VerticalTimeline>
        {work.company.map( data => {
            return (
              <React.Fragment key={data.id}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#002b41', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #0dcaf0' }}
                  date={data.dates}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<i className="fab fa-angular experience-icon"></i>}
                >
                  <h3 className="vertical-timeline-element-title">{data.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{data.role}</h4>
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
                </VerticalTimelineElement>
              </React.Fragment>
            );
          })}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<i className="fab fa-angular experience-icon"></i>}
        />
      </VerticalTimeline>
    </section>

    
  );
}
export default Experience;
