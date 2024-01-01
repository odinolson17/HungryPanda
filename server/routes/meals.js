const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController.js');

router.post('/mealAdder', mealsController.mealAdder, (req, res) => {
  res.sendStatus(200)//.json(res.locals.data);
});

module.exports = router;