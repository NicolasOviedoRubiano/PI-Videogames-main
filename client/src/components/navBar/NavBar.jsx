import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/form">Form</NavLink>
    </div>
  );
}
