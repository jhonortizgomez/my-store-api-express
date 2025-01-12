const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);

const getCategorySchema = Joi.object({
  categoryId: id.required(),
});

module.exports = { getCategorySchema }
