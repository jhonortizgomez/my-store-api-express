const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola')
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000
    },
    {
      name: 'Producto 2',
      price: 1000
    }
  ])
})

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(
    {
      productId,
      name: 'Producto 1',
      price: 1000
    }
  )
})

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'tecnologia',
    },
    {
      name: 'accesorios',
    }
  ])
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
      name: "producto de tin",
      price: 2000
    }
  )
})

app.listen(port, () => {
  console.log('mi port' + port)
})
