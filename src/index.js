require('dotenv').config();
require('./database');
const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is Running');
});
