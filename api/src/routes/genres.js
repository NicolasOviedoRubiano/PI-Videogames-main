const { Router } = require("express");

const genresRoute = Router();

genresRoute.get("/", (req, res) => {
  try {
    res.send("getting the genres");
  } catch (error) {}
});
module.exports = { genresRoute };
