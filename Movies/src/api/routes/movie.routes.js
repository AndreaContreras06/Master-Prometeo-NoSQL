const express = require('express');

const {
  getMovies,
  postMovies,
  putMovies,
  deleteMovies
} = require("../controllers/movie.controller");

const movieRoutes = express.Router();

movieRoutes.get("/", getMovies);
movieRoutes.post("/", postMovies);
movieRoutes.put("/:id", putMovies);
movieRoutes.delete("/:id", deleteMovies);

module.exports = movieRoutes;