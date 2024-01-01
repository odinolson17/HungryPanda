const Meal = require('../model/MealDB.js');
const mealsController = {};

mealsController.mealAdder = async (req, res, next) => {
  if ('nameOfFood' in req.body && 'dateAndTime' in req.body && 'whichMeal' in req.body) {
    const meal = new Meal({
      'food': req.body.nameOfFood,
      'dtl': req.body.dateAndTime,
      'bld': req.body.whichMeal
    });
    meal.save();
    return next();
  }
  else {
    return next({
      log: 'There was an error',
      message: "There was an error adding this meal."
    });
  }
};

module.exports = mealsController;