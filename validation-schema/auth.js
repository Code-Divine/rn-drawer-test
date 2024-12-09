import Joi from "joi";

export const schemaLoginFront = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
