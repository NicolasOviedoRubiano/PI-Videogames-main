/* eslint-disable no-unused-vars */
//*Hooks and actions
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changePage,
  resetShownVideogames,
  videogamesByName,
} from "../../../redux/actions/actions";
//*Styles
import styles from "./SearchBar.module.css";
export default function SearchBar(props) {
  const [NAME, setName] = useState("");
  const dispatch = useDispatch();
  const handlerChange = (event) => {
    let name = event.target.value;
    if (name !== NAME) {
      setName(name.toLowerCase());
    }
  };
  const handlerSearch = () => {
    dispatch(videogamesByName(NAME));
    setName("");
  };
  const handlerReset = () => {
    dispatch(resetShownVideogames());
    dispatch(changePage(1));
    setName("");
  };
  return (
    <div className={styles.barContainer}>
      <button onClick={handlerReset}>Clean</button>
      <input
        value={NAME}
        placeholder="Enter a name"
        type="text"
        onChange={handlerChange}
      />
      <button onClick={handlerSearch}>Search</button>
    </div>
  );
}
