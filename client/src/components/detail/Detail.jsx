/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { videogameByID } from "../../redux/actions";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    dispatch(videogameByID(id));
  }, []);
  const { detailVideogame } = useSelector((s) => s);
  const { name, image, platforms, genres, description, release_date, rating } =
    detailVideogame;
  return (
    <div>
      <h1>
        {name} - {rating}⭐
      </h1>
      <h2>{release_date}</h2>
      <section>{description}</section>
      <img src={image} alt={name} />
      <ul>
        {platforms?.map((platform) => {
          return <li>{platform.name}</li>;
        })}
      </ul>
      <ul>
        {genres?.map((genre) => {
          return <li>{genre.name}</li>;
        })}
      </ul>
    </div>
  );
}
