import "dotenv/config";
import "express-async-errors";

import express from "express";
import mongoose from "mongoose";
import ErrorHandler from "./middlewares/errorHandling.middleware.js";
import postsRouter from "./routes/posts.route.js";

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use("/api/posts/", postsRouter);

app.use(ErrorHandler);

mongoose
  .connect(process.env.MONGOURL, { dbName: process.env.MONGODATABASE })
  .then(() => {
    console.log("Mongo DB Connected");
    app.listen(3000, () => {
      console.log("Server running at port 3000");
    });
  });
