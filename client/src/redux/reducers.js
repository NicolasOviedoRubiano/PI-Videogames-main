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
} from "./actions";

const initialState = {
  videogames: [],
  shownVideogames: [],
  detailVideogame: {},
  genres: [],
  page: 1,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return { ...state, videogames: payload, shownVideogames: payload };
    case GET_VIDEOGAME_BY_NAME:
      console.log("changing the videogames state");
      return { ...state, videogames: payload, shownVideogames: payload };
    case GET_GENRES:
      return { ...state, genres: payload };
    case FILTER_BY_GENRE:
      const filteredByGenre = state.videogames.filter((videogame) => {
        console.log(videogame.genres, "must include", payload);
        return JSON.stringify(videogame.genres).includes(payload);
      });
      console.log(filteredByGenre);
      return { ...state, shownVideogames: filteredByGenre };
    case FILTER_BY_ORIGIN:
      const filteredByOrigin = state.videogames.filter((videogame) =>
        // {
        //   console.log(
        //     videogame.id,
        //     "is a Number:",
        //     Number.isInteger(videogame.id)
        //   );
        //   if (payload === "DataBase") {
        //     console.log("Payload===DataBase");
        //     return !Number.isInteger(videogame.id);
        //   } else {
        //     return Number.isInteger(videogame.id);
        //   }
        // }
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
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      });
      return { ...state, shownVideogames: orderedByName };
    case GET_VIDEOGAME_BY_ID:
      return { ...state, detailVideogame: payload };
    case CREATE_VIDEOGAME:
      return { ...state, videogames: [...state.videogames, payload] };
    case CHANGE_PAGE:
      console.log(payload);
      return { ...state, page: payload };
    default:
      return state;
  }
}
