/* eslint-disable no-unused-vars */
//*Hooks
import React from "react";
import { NavLink } from "react-router-dom";
//*Styles
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <NavLink className={styles.navLink} to="/home">
        Home
      </NavLink>
      <NavLink
        activeStyle={styles.navLinkActive}
        className={styles.navLink}
        to="/form"
      >
        Form
      </NavLink>
    </div>
  );
}
