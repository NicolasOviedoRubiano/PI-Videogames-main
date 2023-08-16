/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
//*Hooks and actions
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetDetail, videogameByID } from "../../redux/actions/actions";
//*Styles
import styles from "./Detail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    dispatch(videogameByID(id));
    return () => {
      dispatch(resetDetail());
    };
  }, []);
  const { detailVideogame } = useSelector((s) => s);
  let { name, image, platforms, genres, description, release_date, rating } =
    detailVideogame;
  platforms = Array.isArray(platforms) ? platforms : [{ name: platforms }];
  return (
    <div className={styles.detail}>
      <div className={styles.divImage}>
        <img src={image} alt={name} />
      </div>
      <section>
        <h1>{name}</h1>
        <h3>{rating}⭐</h3>
        <h3>{release_date}</h3>
        <span dangerouslySetInnerHTML={{ __html: description }}></span>
        <div>
          <label>
            <h5>Platforms</h5>
            <ul>
              {platforms?.map((platform) => {
                return <li>{platform.name}</li>;
              })}
            </ul>
          </label>
          <label>
            <h5>Genres</h5>
            <ul>
              {genres?.map((genre) => {
                return <li>{genre.name}</li>;
              })}
            </ul>
          </label>
        </div>
      </section>
    </div>
  );
}
