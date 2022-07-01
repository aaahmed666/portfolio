import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../Styles/Project/Project.module.css";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className={classes.projectItem}
      onClick={() => {
        navigate("/projects/" + id);
      }}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={classes.bgImage}
      />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
