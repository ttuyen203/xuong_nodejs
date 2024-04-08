import mongoose from "mongoose";
const { Schema } = mongoose;

const MovieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },
    director: {
      type: String,
    },
    cast: {
      type: String,
    },
    genres: {
      type: [Schema.Types.ObjectId],
      ref: "Genre",
      require: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    runingTime: {
      type: String,
    },
    language: {
      type: String,
    },
    rated: {
      type: Number,
    },
    trailer: {
      type: String,
    },
    imgBanner: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Movie", MovieSchema);
