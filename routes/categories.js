const express = require('express')
const categoriesRouter = express.Router()

categoriesRouter.get('/', (req, res) => {
  res.json([
    {
      name: 'tecnologia',
    },
    {
      name: 'accesorios',
    }
  ])
});

categoriesRouter.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
      name: "producto de tin",
      price: 2000
    }
  )
});

module.exports = categoriesRouter
