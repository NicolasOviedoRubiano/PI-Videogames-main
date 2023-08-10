/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Card.module.css";

export default function Card({ key, id, image, name, genres }) {
  return (
    <div id={id} key={key} className={styles.divCard}>
      <h2>{name}</h2>
      <NavLink to={`/detail/${id}`}>
        <img src={image} alt={name} className={styles.img} />
      </NavLink>
      <ul>
        {genres?.map((genre) => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
    </div>
  );
}
