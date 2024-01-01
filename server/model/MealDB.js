const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealSchema = new Schema({
  food: {
    type: String,
    required: true
  },
  dtl: {
    type: String,
    required: true
  },
  bld: {
    type: String,
    required: true,
    default: 'Breakfast'
  }
});

module.exports = mongoose.model('Meal', mealSchema);

//required: true