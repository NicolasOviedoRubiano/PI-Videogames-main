/* eslint-disable no-unreachable */
//*Dependencies
import axios from "axios";
//*actions type
import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  GET_VIDEOGAME_BY_ID,
  CREATE_VIDEOGAME,
  GET_GENRES,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  CHANGE_PAGE,
  RESET,
  RESET_DETAIL,
} from "./actionTypes";

//*action creators
export function allVideogames() {
  try {
    const endpoint = "http://localhost:3001/videogames/";
    return async (dispatch) => {
      const { data } = await axios(endpoint);
      const { videogames } = data;
      return dispatch({ type: GET_ALL_VIDEOGAMES, payload: videogames });
    };
  } catch (error) {
    console.log(error.message);
  }
}
export function videogamesByName(name) {
  try {
    const endpoint = `http://localhost:3001/videogames?name=${name}`;
    return async (dispatch) => {
      const { data } = await axios(endpoint);
      const { videogames } = data;
      return dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: videogames });
    };
  } catch (error) {
    console.log(error.message);
  }
}
export function filterByGenre(genre) {
  return { type: FILTER_BY_GENRE, payload: genre };
}
export function filterByOrigin(origin) {
  return { type: FILTER_BY_ORIGIN, payload: origin };
}
export function getGenres() {
  try {
    const endpoint = "http://localhost:3001/genres/";
    return async (dispatch) => {
      const { data } = await axios(endpoint);
      const { genres } = data;
      return dispatch({ type: GET_GENRES, payload: genres });
    };
  } catch (error) {
    console.log(error);
  }
}
export function orderByRating(orden) {
  return { type: ORDER_BY_RATING, payload: orden };
}
export function orderByName(orden) {
  console.log("ordering by name");
  return { type: ORDER_BY_NAME, payload: orden };
}
export function videogameByID(id) {
  try {
    const endpoint = `http://localhost:3001/videogames/${id}`;
    return async (dispatch) => {
      const response = await axios(endpoint);
      console.log(response);
      const { videogame } = response.data;
      return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: videogame });
    };
  } catch (error) {
    console.log(error.message);
  }
}
export function createVideogame(videogame) {
  try {
    const endpoint = "http://localhost:3001/videogames";
    console.log("Running action create videogame");
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, videogame);
      const { created } = data;
      console.log("The videogame was created--->", created);
      if (created) {
        window.alert("¡Videogame created succesfully! :)");
        return dispatch({ type: CREATE_VIDEOGAME, payload: videogame });
      } else {
        window.alert("The videogame could not be created created :(");
      }
    };
  } catch (error) {
    window.alert(
      "The videogame could not be created created :( because: ",
      error.message
    );
  }
}
export function changePage(page) {
  return { type: CHANGE_PAGE, payload: page };
}
export function resetShownVideogames() {
  return { type: RESET };
}
export function resetDetail() {
  return { type: RESET_DETAIL };
}
