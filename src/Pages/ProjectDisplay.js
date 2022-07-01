import React from "react";
import { BsGithub } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helper/ProjectList";
import classes from "../Styles/ProjectDisplay/ProjectDisplay.module.css";

function ProjectDisplay() {
  const { id } = useParams();

  const project = ProjectList[id];
  return (
    <div className={classes.project}>
      <img src={project.image} alt={project.name} />
      <h1> {project.name}</h1>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.link}>
        <BsGithub />
      </a>
    </div>
  );
}

export default ProjectDisplay;
