/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByGenre,
  filterByOrigin,
  orderByName,
  orderByRating,
} from "../../../redux/actions";

export default function ConfigurationBar({ genres }) {
  const dispatch = useDispatch();
  const handlerFilterbyGenre = (event) => {
    dispatch(filterByGenre(event.target.value));
  };
  const handlerOrder = (event) => {
    if (event.target.value === "A-Z") {
      dispatch(orderByName(true));
    } else if (event.target.value === "Z-A") {
      dispatch(orderByName(false));
    } else if (event.target.value === "asc") {
      dispatch(orderByRating(true));
    } else if (event.target.value === "desc") {
      dispatch(orderByRating(false));
    }
  };
  const handlerFilterbyOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value));
  };

  return (
    <div>
      <select name="Filter by Genre" onChange={handlerFilterbyGenre}>
        {genres?.map((genre) => {
          return <option key={genre.id}>{genre.name}</option>;
        })}
      </select>
      <select name="Filter by Origin" onChange={handlerFilterbyOrigin}>
        <option value="DataBase">Data Base</option>
        <option value="API">API</option>
      </select>
      <select name="Order" onClick={handlerOrder}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="asc">Best rating first</option>
        <option value="desc">Worst rating first</option>
      </select>
    </div>
  );
}
