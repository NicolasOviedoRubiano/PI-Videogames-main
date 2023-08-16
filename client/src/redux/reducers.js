/* eslint-disable no-case-declarations */
//*actions
import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  GET_GENRES,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  GET_VIDEOGAME_BY_ID,
  CREATE_VIDEOGAME,
  CHANGE_PAGE,
  RESET,
  RESET_DETAIL,
} from "./actions/actionTypes";

const initialState = {
  videogames: [],
  filteredVideogames: [],
  shownVideogames: [],
  detailVideogame: {},
  genres: [],
  page: 1,
};
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        shownVideogames: payload,
        filteredVideogames: payload,
      };
    case GET_VIDEOGAME_BY_NAME:
      console.log("changing the videogames state");
      return { ...state, shownVideogames: payload };
    case GET_GENRES:
      return { ...state, genres: payload };
    case RESET:
      return { ...state, shownVideogames: state.videogames };
    case FILTER_BY_GENRE:
      if (payload === "default") {
        return {
          ...state,
          shownVideogames: state.videogames,
          filteredVideogames: state.videogames,
        };
      }
      const filteredByGenre = state.videogames.filter((videogame) => {
        return JSON.stringify(videogame.genres).includes(payload);
      });
      return {
        ...state,
        shownVideogames: filteredByGenre,
        filteredVideogames: filteredByGenre,
      };
    case FILTER_BY_ORIGIN:
      if (payload === "default") {
        return { ...state, shownVideogames: state.filteredVideogames };
      }
      const filteredByOrigin = state.filteredVideogames.filter((videogame) =>
        payload === "DataBase"
          ? !Number.isInteger(videogame.id)
          : Number.isInteger(videogame.id)
      );
      return { ...state, shownVideogames: filteredByOrigin };
    case ORDER_BY_RATING:
      const orderedByRating = state.shownVideogames.sort((a, b) =>
        payload ? b.rating - a.rating : a.rating - b.rating
      );
      return { ...state, shownVideogames: orderedByRating };
    case ORDER_BY_NAME:
      const orderedByName = state.shownVideogames.sort((a, b) => {
        console.log(a.name - b.name);
        return payload
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      return { ...state, shownVideogames: orderedByName };
    case GET_VIDEOGAME_BY_ID:
      return { ...state, detailVideogame: payload };
    case CREATE_VIDEOGAME:
      return { ...state, videogames: [...state.videogames, payload] };
    case CHANGE_PAGE:
      return { ...state, page: payload };
    case RESET_DETAIL:
      return { ...state, detailVideogame: {} };
    default:
      return { ...state };
  }
}
