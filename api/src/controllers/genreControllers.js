require("dotenv").config();
//Dependencies
const axios = require("axios");
//Enviroment variables
const { API_KEY, URL_GENRES } = process.env;
//Models
const { Genre } = require("../db.js");

async function getAllGenres() {
  try {
    let allGenres = await Genre.findAll();
    if (allGenres.length === 0) {
      let endpoint = `${URL_GENRES}?key=${API_KEY}`;
      // console.log("the end point is-->", endpoint);
      const { data } = await axios(endpoint);
      const { results } = data;
      allGenres = results.map((genre) => {
        return { id: genre.id, name: genre.name };
      });
      Genre.bulkCreate(allGenres);
    }
    return allGenres;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getAllGenres };
