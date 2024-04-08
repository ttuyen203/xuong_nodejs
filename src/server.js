import express from "express";
import connectDB from "./config/dbconfig.js";
import movieRouter from "./routes/movie.js";
import categoryRouter from "./routes/category.js";
import genreRouter from "./routes/genre.js";
import userRouter from "./routes/user.js";
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
connectDB(process.env.DB_URI || "mongodb://127.0.0.1:27017/db_movie");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
