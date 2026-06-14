const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./utils/error");

const movieRoutes = require("./api/routes/movie.routes");
const cinemaRoutes = require("./api/routes/cinema.routes");

const app = express();

app.use(express.json());
app.use("/movies", movieRoutes);
app.use("/cinemas", cinemaRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  })
  .catch((err) => console.error("Error de conexión:", err));
