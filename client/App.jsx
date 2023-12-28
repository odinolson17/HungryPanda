import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import SignIn from './components/users/SignIn.jsx';

export const App = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.hungrypanda);

  if (!state.user.username) return <SignIn />

};

export default App;


// goals for tomorrow:
// 1. Create routes for signing in and up
// 2. Create component to load what you've eaten today