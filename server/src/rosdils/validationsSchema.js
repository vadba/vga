import Joi from "joi";

export const categoriesValidateSchema = Joi.object({
  name: Joi.string().required().min(3),
  description: Joi.string().allow(""),
  idName: Joi.string().required().min(3),
  parentId: Joi.string().allow(""),
  level: Joi.string().allow(""),
});
