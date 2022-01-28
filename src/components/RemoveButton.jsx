/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import axios from 'axios';
import React from 'react';

/*
 * ========================================================
 * ========================================================
 *
 *      Component for all restaurant results
 *
 * ========================================================
 * ========================================================
 */
export default function RemoveButton({
  restaurant, remove, obj, removeFavObj, removePastEatsObj,
}) {
  if (remove === undefined) {
    return <div />;
  }
  const removeFromFav = () => {
    restaurant.userId = obj.state;
    axios.post('/favourite/remove', restaurant).then((response) => {
      removeFavObj.setter(response.data);
    });
  };

  const removeFromPastEats = () => {
    restaurant.userId = obj.state;
    axios.post('/past-eats/remove', restaurant).then((response) => {
      removePastEatsObj.setter(response.data);
    });
  };

  return (
    <div>
      {remove = 'removeFav' && <button onClick={removeFromFav}>Remove</button>}
      {remove = 'removePastEats' && <button onClick={removeFromPastEats}>Remove Past Eats</button>}
    </div>
  );
}
