import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "../Styles/Navbar.module.css";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div
      className={classes.navbar}
      id={expandNavbar ? classes.open : classes.close}>
      <div className={classes.toggleButton}>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}>
          <FaBars />
        </button>
      </div>
      <div className={classes.links}>
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink activeclassname={classes.active} to="/projects">
          Projects
        </NavLink>
        <NavLink activeclassname={classes.active} to="/experience">
          Experience
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
