const express = require("express");

const Cinema = require("../models/cinema.model");

const cinemaRoutes = express.Router();

cinemaRoutes.get("/", async (req, res) => {
  const cinemas = await Cinema.find().populate("movies");
  res.json(cinemas);
});

cinemaRoutes.post("/", async (req, res) => {
  const cinema = new Cinema(req.body);
  const savedCinema = await cinema.save();

  res.status(201).json(savedCinema);
});

module.exports = cinemaRoutes;