const express = require('express')
const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
  res.send('Hola')
})

module.exports = homeRouter;
