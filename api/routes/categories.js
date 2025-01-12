const express = require('express');
const CategoriesServices = require('../services/categories');
const validateHandler = require('../middlewares/validator');
const { getCategorySchema } = require('../schemas/categories');

const categoriesRouter = express.Router();
const services = new CategoriesServices();

categoriesRouter.get('/', async (req, res) => {
  const categories = await services.find();
  res.status(200).json(categories);
});

categoriesRouter.get('/:categoryId',
  validateHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const category = await services.findOne(categoryId);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = categoriesRouter;
