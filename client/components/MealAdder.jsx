import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

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
    <>
    <div className="center-popup">
      <Popup trigger={
        <button>
          Open Me
        </button>
      } position="center middle" modal nested>{
        close => (
          <div className='modal'>
            <form onSubmit={addMealToDB} className='content'>
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
                <input type='submit'/>
              </form>
              <div>
                <button onClick={() => close()}>
                  X
                </button>
              </div>
              </div>
            )
          }
        </Popup>
      </div>
    </>
  )
};

export default MealAdder;