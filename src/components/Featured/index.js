import React from "react";
import { Github } from "react-bootstrap-icons";
import img_genki from "../../assets/projects/genki-screenshot.jpg";
import img_input from "../../assets/projects/key-input-wide.webp";
import img_sorting from "../../assets/projects/sorting-visualizer-screenshot.png";

function Featured() {
  const featured = {
    projects: [
      {
        id: "sorting_visualizer",
        name: "Sorting Visualizer",
        github: "https://github.com/paperpatch/sorting_visualizer",
        deploy: "https://paperpatch.github.io/sorting_visualizer/",
        image: img_sorting,
        alt: "Sorting Visualizer Project",
        description:
          "Sorting Visualizer of popular algorithms featuring automatic or manually input of arrays and pleasing display of execution. Displays the total amount of swaps, comparisons, and time taken per sorting algorithm. Users are able to alter the speed of execution.",
        skills: "JavaScript React zustand @emotion",
      },
      {
        id: "genki_notes",
        name: "Genki Notes",
        github: "https://github.com/paperpatch/genki_notes",
        deploy: "https://paperpatch.github.io/genki_notes/",
        image: img_genki,
        alt: "Genki Notes Project",
        description:
          "Personal study guide derived from Genki I and Genki II Japanese textbooks. Includes a search function and dynamic setting changes.",
        skills: "JavaScript React",
      },
      {
        id: "key_input",
        name: "Key Input",
        github: "https://github.com/paperpatch/key_input",
        deploy: "https://paperpatch.github.io/key_input/",
        image: img_input,
        description:
          "Mini-game inspired by Lost Ark. A simple key input game where typing the correct sequence succeeds while inputting any other key will result in a failure.",
        skills: "JavaScript React Mui",
      },
    ],
  };

  return (
    <section id="feature" className="feature">
      <h2 className="title">Featured Projects</h2>
      <div className="container">
        {featured.projects.map((featured) => {
          return (
            <React.Fragment key={featured.id}>
              <div className="card mb-3 text-start feature-project">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="card-header">Featured Project</div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a
                          href={featured.deploy}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {featured.name}
                        </a>
                      </h3>
                      <p className="card-text">{featured.description}</p>
                      <p>
                        <small className="text-skill">{featured.skills}</small>
                      </p>
                      <a
                        href={featured.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="bi bi-github fa-lg"></Github>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <a href={featured.deploy} target="_blank" rel="noreferrer">
                      <img
                        src={featured.image}
                        className="rounded float-end"
                        alt={featured.alt}
                      />
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
