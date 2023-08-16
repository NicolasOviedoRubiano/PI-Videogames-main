/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Card from "./card/Card";

import styles from "./Container.module.css";

export default function Container({ videogames }) {
  return (
    <div className={styles.container}>
      {videogames?.map((videogame) => {
        return (
          <Card
            key={videogame.id}
            id={videogame.id}
            image={videogame.image}
            name={videogame.name}
            genres={videogame.genres}
            rating={videogame.rating}
          />
        );
      })}
    </div>
  );
}
