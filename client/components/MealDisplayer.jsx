import React from 'react';
import { useEffect, useState } from 'react';
 
const MealDisplayer = () => {

  useEffect(() => {
    (async function () {
      await fetch('/api/meals/mealDisplayer')
      .then(res => res.json())
      .then(data => {
        console.log('hi', data)
      })
      .catch(err => console.log(err));
    })();
  }, []);

  return (
    <>
      <h1>hi</h1>
    </>
  );
};

export default MealDisplayer;