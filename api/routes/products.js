const express = require('express');
const ProductsServices = require('../services/products');
const validateHandler = require('../middlewares/validator');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/products');

const productsRouter = express.Router();
const service = new ProductsServices();

productsRouter.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

productsRouter.get('/filter', (req, res) => {
  res.send('llegamos a los filtros')
});

productsRouter.get('/:productId',
  validateHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { productId } = req.params;
      const product = await service.findOne(productId);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.post('/',
  validateHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
  }
);

productsRouter.patch('/:id',
  validateHandler(getProductSchema, 'params'),
  validateHandler(updateProductSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body)
      res.json(product)
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.delete('/:id',
  // validateHandler(createProductSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const rta = await service.update(id)
    res.json(rta)
  }
);

module.exports = productsRouter;
