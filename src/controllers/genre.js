import Genre from "../models/genre.js";

class GenreController {
  async getAllGenres(req, res) {
    try {
      const genres = await Genre.find({});
      return res.status(200).json({
        message: "Lấy tất cả thể loại thành công",
        data: genres,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async getGenreDetail(req, res) {
    try {
      const genre = await Genre.findById(req.params.id);
      if (!genre) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(200).json({
        message: "Lấy chi tiết thể loại thành công",
        data: genre,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async createGenre(req, res) {
    try {
      const genre = await Genre.create(req.body);
      if (!genre) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(201).json({
        message: "Thể loại được thêm thành công",
        data: genre,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async deleteGenre(req, res) {
    try {
      const genre = await Genre.findByIdAndDelete(req.params.id);
      if (!genre) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(200).json({
        message: "Thể loại được xóa thành công",
        data: genre,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateGenre(req, res) {
    try {
      const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!genre) {
        return res.status(404).json({
          message: "Không tìm thấy",
        });
      }
      return res.status(200).json({
        message: "Thể loại được sửa thành công",
        data: genre,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default GenreController;
