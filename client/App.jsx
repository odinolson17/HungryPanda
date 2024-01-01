import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import MealAdder from './components/MealAdder.jsx';

const App = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.hungrypanda);

  return(
    <>
      <MealAdder />
    </>
  );

};

export default App;
