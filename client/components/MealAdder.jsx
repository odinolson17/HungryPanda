import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const MealAdder = () => {

  const addMealToDB = async (e) => {
    e.preventDefault();
    await fetch('/api/meals/mealAdder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameOfFood: document.getElementById('nameOfFood').value,
        dateAndTime: document.getElementById('dateAndTime').value,
        whichMeal: document.getElementById('whichMeal').value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Perfect!');
      })
      .catch(err => console.log(err));
  };

  return(
    <form onSubmit={addMealToDB}>
      <label>
        What I just ate?
      </label>
      <br />
      <input type='text' id='nameOfFood' />
      <br />
      <input type='datetime-local' id='dateAndTime' />
      <br />
      <select id='whichMeal'>
        <option value='Breakfast'>
          Breakfast
        </option>
        <option value='Lunch'>
          Lunch
        </option>
        <option value='Dinner'>
          Dinner
        </option>
      </select>
      <br />
      <input type='submit' />
    </form>
  )
};

export default MealAdder;