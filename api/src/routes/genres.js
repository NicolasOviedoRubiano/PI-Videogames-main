const { Router } = require("express");
const { getAllGenres } = require("../controllers/genreControllers");

const genresRoute = Router();

genresRoute.get("/", async (req, res) => {
  try {
    const genres = await getAllGenres();
    const response = { message: "query ok", genres };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = { genresRoute };
