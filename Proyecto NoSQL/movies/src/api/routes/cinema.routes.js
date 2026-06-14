const express = require("express");
const { getCinemas, postCinema } = require("../controllers/cinema.controller");

const cinemaRoutes = express.Router();

cinemaRoutes.get("/", getCinemas);
cinemaRoutes.post("/", postCinema);

module.exports = cinemaRoutes;
