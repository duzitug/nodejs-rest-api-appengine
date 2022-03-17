import mongoose from "mongoose";

const genreSchemma = new mongoose.Schema(
  {
    name: { type: String },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
  },
  { timestamps: true }
);

export const genreModel = mongoose.model("genre", genreSchemma);
