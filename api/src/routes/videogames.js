const { Router } = require("express");
const {
  getAllVideogames,
  getVideogameById,
  getCoincidences,
  createVideogame,
} = require("../controllers/videogameController");

videogamesRoute = Router();

//*get all or get coincidences (the first 15).
videogamesRoute.get("/", async (req, res) => {
  try {
    let videogames = undefined;
    if (req.query.name) {
      const { name } = req.query;
      videogames = await getCoincidences(name);
    } else {
      videogames = await getAllVideogames();
      // console.log("the response from the getAllVideogames is--->", videogames);
    }
    const response = { message: "query ok", videogames };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//*get one
videogamesRoute.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`The ${id} is NaN--->`, Number(id));
    const videogame = await getVideogameById(id);
    console.log("the controller returned--->", videogame);
    const response = { message: "query ok", videogame };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//*post one ---> create a videogame
videogamesRoute.post("/", async (req, res) => {
  try {
    console.log("entering to the create route...");
    const videogame = req.body;
    const created = await createVideogame(videogame);
    const response = { message: "query ok", created };
    console.log("The game was created: ", created);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { videogamesRoute };
