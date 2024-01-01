const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

require('dotenv').config();

//database connection
const mongoose = require('mongoose');

const mongoURI = process.env.mongodb;
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());

//routes

const mealsRouter = require(path.join(__dirname, './routes/meals.js'));

app.use('/api/meals', mealsRouter);

//errors

app.get('*', (req, res) => {
  res.status(404).send('404')});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;