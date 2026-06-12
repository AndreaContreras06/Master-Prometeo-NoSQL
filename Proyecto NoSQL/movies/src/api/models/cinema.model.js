const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    movies: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Movie"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Cinema", cinemaSchema);