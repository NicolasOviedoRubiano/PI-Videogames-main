/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Card.module.css";

export default function Card({ key, id, image, name, genres, rating }) {
  return (
    <div id={id} key={key} className={styles.divCard}>
      <h2>
        {name} <br />
        {rating}
        {rating ? "⭐" : null}
      </h2>
      {id ? (
        <NavLink to={`/detail/${id}`} title={`Go to the ${name} detail`}>
          <img src={image} alt={name} />
        </NavLink>
      ) : (
        <img src={image} alt={name} />
      )}
      <ul>
        {genres?.map((genre) => {
          return (
            <li key={genre.id ? genre.id : genre}>
              {genre.name ? genre.name : genre}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
