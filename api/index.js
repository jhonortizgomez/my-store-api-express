const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/errors')
const routerApi = require('./routes');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const whiteList = ['https://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) callback(null, true);
    else callback(new Error('No permitido'));
  }
}


app.use(express.json());
app.use(cors(options));

routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
