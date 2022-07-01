import React from "react";
import classes from "../Styles/Footer/Footer.module.css";
import { BsLinkedin, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const today = Date.now();

  return (
    <div className={classes.footer}>
      <div className={classes.socialMedia}>
        <a href="tel:+01000654363">
          <BsTelephoneFill />
        </a>
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
      <p>
        &copy;
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
        }).format(today)}
      </p>
    </div>
  );
};

export default Footer;
