import React from "react";
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../Helper/ProjectList";
import classes from "../Styles/Project/Project.module.css";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <h1> My Personal Projects</h1>
      <div className={classes.projectList}>
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={project.id}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
