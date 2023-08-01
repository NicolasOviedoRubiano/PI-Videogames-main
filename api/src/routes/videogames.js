const { Router } = require("express");

videogamesRoute = Router();

//*get all or get coincidences (the first 15).
videogamesRoute.get("/", (req, res) => {
  try {
    if (Object.entries(req.query).length) {
      res.send("ok with the query");
    } else {
      res.send("ok with the get all");
    }
  } catch (error) {}
});
//*get one
videogamesRoute.get("/:id", (req, res) => {
  try {
    res.send(`ok getting the id--->${req.params.id}`);
  } catch (error) {}
});
//*post one ---> create a videogame
videogamesRoute.post("/", (req, res) => {
  try {
    res.send("creating a game");
  } catch (error) {}
});

module.exports = { videogamesRoute };
