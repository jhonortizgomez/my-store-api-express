const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().min(10)
const image = Joi.string().uri();
const isBlock = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  isBlock,
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  isBlock,
});

const getProductSchema = Joi.object({
  productId: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };


