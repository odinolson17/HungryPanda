import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import MealDisplayer from './components/MealDisplayer.jsx';
import MealAdder from './components/MealAdder.jsx';

const App = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.hungrypanda);

  return(
    <>
      <p>Logo Here</p>
      <MealDisplayer />
      <MealAdder />
      <br /><br />
      <br /><br />
      <p>
        Add recomendation here?
      </p>
      <p>
        Add water counter here
      </p>
    </>
  );

};

export default App;
