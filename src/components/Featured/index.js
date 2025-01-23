import React from "react";
import icon_github from "../../assets/icons/tools/icon-github.svg";
import img_genki from "../../assets/projects/genki-screenshot.jpg";
import img_input from "../../assets/projects/key-input-wide.webp";
import img_sorting from "../../assets/projects/sorting-visualizer-screenshot.png";

function Featured() {
  const featured = {
    projects: [
      {
        id: 1,
        name: "Sorting Visualizer",
        description:
          "Sorting Visualizer of popular algorithms featuring automatic or manually input of arrays and pleasing display of execution. Displays the total amount of swaps, comparisons, and time taken per sorting algorithm. Users are able to alter the speed of execution.",
        skills: "JavaScript React zustand @emotion",
        deploy: "https://paperpatch.github.io/sorting_visualizer/",
        github: "https://github.com/paperpatch/sorting_visualizer",
        alt: "Sorting Visualizer Project",
        image: img_sorting,
      },
      {
        id: 2,
        name: "Genki Notes",
        description:
          "Personal study guide derived from Genki I and Genki II Japanese textbooks. Includes a search function and dynamic setting changes.",
        skills: "JavaScript React",
        deploy: "https://paperpatch.github.io/genki_notes/",
        github: "https://github.com/paperpatch/genki_notes",
        alt: "Genki Notes Project",
        image: img_genki,
      },
      {
        id: 3,
        name: "Key Input",
        description:
          "Mini-game inspired by Lost Ark. A simple key input game where typing the correct sequence succeeds while inputting any other key will result in a failure.",
        skills: "JavaScript React Mui",
        deploy: "https://paperpatch.github.io/key_input/",
        github: "https://github.com/paperpatch/key_input",
        image: img_input,
      },
    ],
  };

  return (
    <section id="feature" className="feature">
      <h2 className="feature-title">Featured Projects</h2>
      <div className="container">
        {featured.projects.map((project) => (
          <div
            className="feature-project"
            key={project.id}
          >
            <div className="text-container">
              <div className="card-header">Featured Project</div>
              <div className="card-body">
                <h3 className="card-title">
                  <a href={project.deploy} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p className="card-text">{project.description}</p>
                <div className="feature-skills-container">
                  <p>
                    <small className="text-skill">{project.skills}</small>
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-icon"
                  >
                    <img src={icon_github} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="image-container">
              <a href={project.deploy} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.alt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Featured;
