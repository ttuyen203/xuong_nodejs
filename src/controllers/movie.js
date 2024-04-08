import Movie from "../models/movie.js";

class MovieController {
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.find({});
      return res.status(200).json({
        message: "Lấy tất cả phim thành công",
        data: movies,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async getMovieDetail(req, res) {
    try {
      const movie = await Movie.findById(req.params.id).populate([
        "category",
        "genres",
      ]);
      if (!movie) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(200).json({
        message: "Lấy chi tiết phim thành công",
        data: movie,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async createMovie(req, res) {
    try {
      const movie = await Movie.create(req.body);
      if (!movie) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(201).json({
        message: "Phim được thêm thành công",
        data: movie,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async deleteMovie(req, res) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(200).json({
        message: "Phim được xóa thành công",
        data: movie,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateMovie(req, res) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!movie) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(200).json({
        message: "Phim được sửa thành công",
        data: movie,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default MovieController;
