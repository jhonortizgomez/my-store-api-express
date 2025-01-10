const express = require('express')
const usersRouter = express.Router()

usersRouter.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json(
      {
        limit,
        offset
      }
    )
  } else res.send('uy no hay')
});

module.exports = usersRouter;
