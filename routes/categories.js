const express = require('express');
const CategoriesServices = require('../services/categories');
const categoriesRouter = express.Router();
const services = new CategoriesServices();

categoriesRouter.get('/', async (req, res) => {
  const categories = await services.find();
  res.status(200).json(categories);
});

categoriesRouter.get('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  const category = await services.findOne(categoryId);
  res.status(200).json(category);
});

module.exports = categoriesRouter;
