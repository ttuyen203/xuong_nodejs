import Joi from "joi";

const movieValid = Joi.object({
  name: Joi.string().required(),
  poster: Joi.string().optional().allow(""),
  director: Joi.string().optional().allow(""),
  cast: Joi.string().optional().allow(""),
  genres: Joi.string().required(),
  category: Joi.string().required(),
  runingTime: Joi.string().optional().allow(""),
  language: Joi.string().optional().allow(""),
  rated: Joi.number().min(1),
  trailer: Joi.string().required(),
  imgBanner: Joi.string().required(),
});

export default movieValid;
