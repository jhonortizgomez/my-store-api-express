const express = require('express');
const ProductsServices = require('../services/products');
const productsRouter = express.Router();
const service = new ProductsServices();

productsRouter.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products)
});

productsRouter.get('/filter', (req, res) => {
  res.send('llegamos a los filtros')
});

productsRouter.get('/:productId', (req, res) => {
  const { productId } = req.params;
  const product = service.findOne(productId);
  res.json(product);
});

productsRouter.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
});

productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body)
  res.json(product)
});

productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.update(id)
  res.json(rta)
});

module.exports = productsRouter;
