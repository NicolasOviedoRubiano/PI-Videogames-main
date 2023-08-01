//*dependencies
const { Router } = require("express");
//*modules
const { videogamesRoute } = require("./videogames.js");
const { genresRoute } = require("./genres.js");

const router = Router();

// Configurar los routers
router.use("/videogames", videogamesRoute);
router.use("/genres", genresRoute);

module.exports = router;
