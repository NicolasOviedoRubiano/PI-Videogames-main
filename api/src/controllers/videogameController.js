require("dotenv").config();
//Dependencies
const axios = require("axios");
const { Op } = require("sequelize");
//Enviroment variables
const { API_KEY, URL_GAMES } = process.env;
//Models
const { Videogames, Genre } = require("../db.js");

//*get queries*

async function getAllVideogames() {
  //   console.log("Entering to the getAllVideogames_Controller");
  try {
    let videogamesFromApi = [];
    for (let index = 1; index <= 4; index++) {
      const endpoint = `${URL_GAMES}?key=${API_KEY}&page=${index}&page_size=25`;
      const { data } = await axios(endpoint);
      const { results } = data;
      const resultsFiltered = results.map((videogame) => {
        const newVideogame = {
          id: videogame.id,
          name: videogame.name,
          image: videogame.background_image,
          rating: videogame.rating,
          genres: videogame.genres.map((genre) => {
            return { id: genre.id, name: genre.name };
          }),
        };
        // console.log(newVideogame);
        return newVideogame;
      });
      videogamesFromApi = [...videogamesFromApi, ...resultsFiltered];
    }
    const videogamesFromDB = await Videogames.findAll({
      attributes: ["id", "name", "image", "rating"],
      include: [
        {
          model: Genre,
          as: "genres",
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });
    return [...videogamesFromApi, ...videogamesFromDB];
  } catch (error) {
    return error;
  }
}
async function getVideogameById(id) {
  try {
    //Si es integer es un vg de la api
    if (Number.isNaN(Number(id))) {
      console.log("Requering from the DB");
      const videogame = await Videogames.findOne({
        where: { id: id },
        // attributes: [{ exclude: ["createdAt", "updatedAt"] }],
        include: [{ model: Genre, as: "genres", attributes: ["id", "name"] }],
      });
      return videogame;
    } else {
      const endpoint = `${URL_GAMES}/${id}?key=${API_KEY}`;
      console.log("Requering from the api--->", endpoint);
      const { data } = await axios(endpoint);
      const videogame = {
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.platforms.map((platform) => {
          return {
            id: platform.platform.id,
            name: platform.platform.name,
          };
        }),
        image: data.background_image,
        release_date: data.released,
        rating: data.rating,
        genres: data.genres.map((genre) => {
          return { id: genre.id, name: genre.name };
        }),
      };
      return videogame;
    }
  } catch (error) {
    return error.message;
  }
}
async function getCoincidences(name) {
  const allGames = await getAllVideogames();
  console.log("the response from the getAllVideogames is--->", typeof allGames);
  const videogamesFiltered = allGames.filter((videogame) => {
    return videogame.name.toLowerCase().includes(name);
  });
  return videogamesFiltered;
}
//*post query*
async function createVideogame(videogame) {
  const [newVideogame, created] = await Videogames.findOrCreate({
    where: { name: videogame.name, release_date: videogame.release_date },
    defaults: {
      // videogame,
      description: videogame.description,
      platforms: videogame.platforms,
      image: videogame.image,
      rating: videogame.rating,
      id: videogame.id,
    },
    includes: [Genre],
  });
  console.log(newVideogame.name, "vs", videogame.name);
  console.log(newVideogame.release_date, "vs", videogame.release_date);
  if (created) {
    await newVideogame.setGenres(videogame.genres);
  } else {
    console.log("The videogame was not created");
  }
  return created;
}

module.exports = {
  getAllVideogames,
  getVideogameById,
  getCoincidences,
  createVideogame,
};
