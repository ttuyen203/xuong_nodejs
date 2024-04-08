import express from "express";
import MovieController from "../controllers/movie.js";
import { verifyToken, checkUserInDB } from "../middlewares/checkPermission.js";
const router = express();

const movieController = new MovieController();

router.get(`/movies`, movieController.getAllMovies);
router.get(`/movies/:id`, movieController.getMovieDetail);
router.post(`/movies`, verifyToken, checkUserInDB, movieController.createMovie);
router.put(`/movies/:id`, verifyToken, checkUserInDB, movieController.updateMovie);
router.delete(`/movies/:id`, verifyToken, checkUserInDB, movieController.deleteMovie);

export default router;
