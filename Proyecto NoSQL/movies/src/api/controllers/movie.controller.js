const Movie = require("../models/movie.model");

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

const postMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);

    const movieSaved = await newMovie.save();

    return res.status(201).json(movieSaved);
  } catch (error) {
    return next(error);
  }
};

const putMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedMovie = await Movie.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Película eliminada",
      deletedMovie
    });
  } catch (error) {
    return next(error);
  }
};