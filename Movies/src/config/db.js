const express = require("express");

const movieRoutes = require("./api/routes/movie.routes");
const cinemaRoutes = require("./api/routes/cinema.routes");

const app = express();

app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/cinemas", cinemaRoutes);