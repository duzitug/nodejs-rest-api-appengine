("use strict");

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import userRouter from "./route/userRouter.js";
import commentRouter from "./route/commentRouter.js";
import { genreRouter } from "./route/genreRouter.js";
import { courseRouter } from "./route/courseRouter.js";
import { studentRouter } from "./route/studentRouter.js";
import { bookRouter } from "./route/bookRouter.js";
import { DATABASE_URI } from "./config/env.js";

mongoose
  .connect(DATABASE_URI)
  .then(console.log("Conectado ao Mongo"))
  .catch((erro) => console.log(erro.message));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", commentRouter);
app.use("/api", genreRouter);
app.use("/api", courseRouter);
app.use("/api", studentRouter);
app.use("/api", bookRouter);

app.listen(8080, () => {
  console.log(`App listening on port 8080`);
});

export default app;
