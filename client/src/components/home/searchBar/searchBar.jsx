/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { allVideogames, videogamesByName } from "../../../redux/actions";

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
    dispatch(allVideogames());
    setName("");
  };
  return (
    <div>
      <input
        value={NAME}
        placeholder="Ingrese un nombre"
        type="text"
        onChange={handlerChange}
      />
      <button onClick={handlerSearch}>Search</button>
      <button onClick={handlerReset}>Clean</button>
    </div>
  );
}
