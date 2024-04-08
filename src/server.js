import express from "express";
import connectDB from "./config/dbconfig";
import movieRouter from "./routes/movie";
import categoryRouter from "./routes/category";
import genreRouter from "./routes/genre";
import userRouter from "./routes/user";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(movieRouter);
app.use(categoryRouter);
app.use(genreRouter);
app.use(userRouter);
connectDB("mongodb://127.0.0.1:27017/db_movie");
export const viteNodeApp = app;
