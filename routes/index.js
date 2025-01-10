const express = require('express');
const homeRouter = require('./home');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const usersRouter = require('./users');


const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/', homeRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
