import React from 'react';
import { useEffect, useState } from 'react';
 
const MealDisplayer = () => {

  const [render, setRender] = useState([]);

  useEffect(() => {
    (async function () {
      await fetch('/api/meals/mealDisplayer')
      .then(res => res.json())
      .then(data => {
        console.log('hi', data);
        const holdingArray = [];
        let length;
        if (data.length < 21) {
          length = data.length;
        } else {
          length = 21;
        }
        for (let i = length - 1; i >= 0; i--) {
          holdingArray.push(<div key={'a' + i} className='foodsOnScreen'>{data[i].food} for {data[i].bld}</div>)
        }
        setRender(holdingArray);
      })
      .catch(err => console.log(err));
    })();
  }, []);

  return (
    <>
      <div className='outerDiv'>
        <div className='outerTopDiv'>
          {render}
        </div>
      </div>
    </>
  );
};

export default MealDisplayer;