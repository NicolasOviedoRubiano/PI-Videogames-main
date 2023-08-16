/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
//*Hooks and actions
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getGenres } from "../../redux/actions/actions";
//*Styles and validate function
import styles from "./Form.module.css";
import Validate from "./validation";
//*Components
import Card from "../home/container/card/Card";

export default function Form(props) {
  const { genres } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    if (genres.length === 0) dispatch(getGenres());
  });
  const [gameData, setGameData] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    release_date: "",
    rating: "",
    genres: [],
  });
  const [errors, setErrors] = useState({});
  const [selectedGenres, setSelectedGenres] = useState([]);
  const handlerInput = (event) => {
    setGameData({ ...gameData, [event.target.name]: event.target.value });
    setErrors(
      Validate({ ...gameData, [event.target.name]: event.target.value })
    );
  };
  const handlerSelect = (event) => {
    let genres = [...gameData.genres];
    let genresNames = [...selectedGenres];
    if (gameData.genres.includes(Number(event.target.value))) {
      genres = gameData.genres.filter(
        (genre) => Number(genre) !== Number(event.target.value)
      );
      genresNames = genresNames.filter(
        (genre) => event.target.selectedOptions[0].innerText !== genre
      );
    } else {
      genres.push(Number(event.target.value));
      genresNames.push(event.target.selectedOptions[0].innerText);
    }
    setGameData({
      ...gameData,
      [event.target.name]: genres,
    });
    setSelectedGenres(genresNames);
    setErrors(Validate({ ...gameData, [event.target.name]: genres }));
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Dispatching the create action");
      dispatch(createVideogame(gameData));
      console.log("Now setting the local states to their defaults values");
      setGameData({
        name: "",
        image: "",
        description: "",
        platforms: "",
        release_date: "",
        rating: "",
        genres: [],
      });
      setSelectedGenres([]);
      setErrors({});
      console.log("Local states set");
    } else {
      window.alert("Please correct the issues in red before submit");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Create a Game</h1>
      <section>
        <form onSubmit={handlerSubmit}>
          <label>
            Name
            <input
              onChange={handlerInput}
              type="text"
              name="name"
              placeholder="Name"
              value={gameData.name}
            />
            {errors.name ? <p>{errors.name}</p> : null}
          </label>
          <label>
            Image
            <input
              onChange={handlerInput}
              type="text"
              name="image"
              placeholder="Image URL"
              value={gameData.image}
            />
            {errors.image ? <p>{errors.image}</p> : null}
          </label>
          <label>
            Description
            <textarea
              onChange={handlerInput}
              name="description"
              placeholder="Description"
              value={gameData.description}
            />
            {errors.description ? <p>{errors.description}</p> : null}
          </label>
          <label>
            Platforms
            <input
              onChange={handlerInput}
              type="text"
              name="platforms"
              placeholder="Platforms"
              value={gameData.platforms}
            />
            {errors.platforms ? <p>{errors.platforms}</p> : null}
          </label>
          <label>
            Release Date
            <input
              onChange={handlerInput}
              type="date"
              name="release_date"
              placeholder="Release Date"
              value={gameData.release_date}
            />
            {errors.release_date ? <p>{errors.release_date}</p> : null}
          </label>
          <label>
            Rating
            <input
              onChange={handlerInput}
              type="number"
              name="rating"
              placeholder="Rating"
              value={gameData.rating}
            />
            {errors.rating ? <p>{errors.rating}</p> : null}
          </label>
          <label>
            Genres
            <select onChange={handlerSelect} multiple="true" name="genres">
              {genres?.map((genre) => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
            {errors.genres ? <p>{errors.genres}</p> : null}
          </label>
          <input type="submit" value="Create" />
        </form>
        <Card
          image={gameData.image}
          name={gameData.name}
          rating={gameData.rating}
          genres={selectedGenres}
        />
      </section>
    </div>
  );
}
