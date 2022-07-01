import React from "react";
import classes from "../Styles/Home/Home.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.about}>
        <h2>Hi, My Name is Ahmed</h2>
        <div className={classes.prompt}>
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="mailto:ahmed.ashraf.gaber.2017@gmail.com"
            rel="noopener noreferrer"
            target="_blank">
            <AiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-ashraf-58844a229/"
            rel="noopener noreferrer"
            target="_blank">
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/aaahmed666"
            rel="noopener noreferrer"
            target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className={classes.skills}>
        <h2>Skills</h2>
        <ol className={classes.list}>
          <li className={classes.item}>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, jQuery, Sass, Restful API, BootStrap,
              MaterialUI, StyledComponents
            </span>
          </li>
          <li className={classes.item}>
            <h2>Back-End</h2>
            <span>WordPress, MySQL</span>
          </li>
          <li className={classes.item}>
            <h2>Languages</h2>
            <span>JavaScript, PHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
