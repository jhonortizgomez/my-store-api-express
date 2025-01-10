const express = require('express')
const { faker } = require('@faker-js/faker')
const productsRouter = express.Router()

productsRouter.get('/', (req, res) => {
  let products = []
  const { size } = req.query;
  const productsLimit = size || 10
  for (let index = 0; index < productsLimit; index++) {
    products.push({
      name: faker.commerce.productName(),
      image: faker.image.url(),
      price: parseInt(faker.commerce.price(), 10),
    })
  }
  res.json(products)
});

productsRouter.get('/filter', (req, res) => {
  res.send('llegamos a los filtros')
});

productsRouter.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(
    {
      productId,
      name: 'Producto 1',
      price: 1000
    }
  )
});

productsRouter.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "created",
    data: body
  })
})

module.exports = productsRouter;
