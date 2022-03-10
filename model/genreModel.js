import mongoose from "mongoose";

const genreSchemma = new mongoose.Schema(
  { name: { type: String }, id_antigo: { type: Number } },
  { timestamps: true }
);

export const genreModel = mongoose.model("genre", genreSchemma);
