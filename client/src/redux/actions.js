import axios from "axios";
//*actions type
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const CHANGE_PAGE = "CHANGE_PAGE";
//*actions
export function allVideogames() {
  const endpoint = "http://localhost:3001/videogames/";
  return async (dispatch) => {
    const { data } = await axios(endpoint);
    const { videogames } = data;
    return dispatch({ type: GET_ALL_VIDEOGAMES, payload: videogames });
  };
}
export function videogamesByName(name) {
  const endpoint = `http://localhost:3001/videogames?name=${name}`;
  return async (dispatch) => {
    const { data } = await axios(endpoint);
    const { videogames } = data;
    return dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: videogames });
  };
}
export function filterByGenre(genre) {
  console.log(
    "Se despacha la acción filtrar genre con el siguiente genero--->",
    genre
  );
  return { type: FILTER_BY_GENRE, payload: genre };
}
export function filterByOrigin(origin) {
  return { type: FILTER_BY_ORIGIN, payload: origin };
}
export function getGenres() {
  const endpoint = "http://localhost:3001/genres/";
  return async (dispatch) => {
    const { data } = await axios(endpoint);
    const { genres } = data;
    return dispatch({ type: GET_GENRES, payload: genres });
  };
}
export function orderByRating(orden) {
  return { type: ORDER_BY_RATING, payload: orden };
}
export function orderByName(orden) {
  console.log("ordering by name");
  return { type: ORDER_BY_NAME, payload: orden };
}
export function videogameByID(id) {
  const endpoint = `http://localhost:3001/videogames/${id}`;
  return async (dispatch) => {
    const { data } = await axios(endpoint);
    const { videogame } = data;
    return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: videogame });
  };
}
export function createVideogame(videogame) {
  const endpoint = "http://localhost:3001/videogames";
  return (dispatch) => {
    const { data } = axios.post(endpoint, videogame);
    const { created } = data;
    if (created) {
      window.alert("¡Videogame created succesfully! :)");
      return dispatch({ type: CREATE_VIDEOGAME, payload: videogame });
    } else {
      window.alert("The videogame could not be created created :(");
    }
  };
}
export function changePage(page) {
  return { type: CHANGE_PAGE, payload: page };
}
