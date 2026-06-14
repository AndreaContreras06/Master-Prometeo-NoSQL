const Cinema = require("../models/cinema.model");

const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return next(error);
  }
};

const postCinema = async (req, res, next) => {
  try {
    const cinema = new Cinema(req.body);
    const savedCinema = await cinema.save();
    return res.status(201).json(savedCinema);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getCinemas, postCinema };
