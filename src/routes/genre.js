import express from "express";
import GenreController from "../controllers/genre.js";
const router = express();

const genreController = new GenreController();

router.get(`/genres`, genreController.getAllGenres);
router.get(`/genres/:id`, genreController.getGenreDetail);
router.post(`/genres`, genreController.createGenre);
router.put(`/genres/:id`, genreController.updateGenre);
router.delete(`/genres/:id`, genreController.deleteGenre);

export default router;
