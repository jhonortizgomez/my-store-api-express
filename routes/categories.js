const express = require('express')
const CategoriesServices = require('../services/categories')
const categoriesRouter = express.Router()
const services = new CategoriesServices();

categoriesRouter.get('/', (req, res) => {
  const categories = services.find();
  res.status(200).json(categories);
});

categoriesRouter.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const category = services.findOne(categoryId);
  res.status(200).json(category);
});

module.exports = categoriesRouter;
