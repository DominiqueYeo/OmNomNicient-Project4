/* eslint-disable jsx-a11y/control-has-associated-label */
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

  // Button to remove restaurant from favourites page
  const removeFromFav = () => {
    restaurant.userId = obj.state;
    axios.post('/favourite/remove', restaurant).then((response) => {
      removeFavObj.setter(response.data);
    });
  };

  // Button to remove restaurant from past eats page
  const removeFromPastEats = () => {
    restaurant.userId = obj.state;
    axios.post('/past-eats/remove', restaurant).then((response) => {
      removePastEatsObj.setter(response.data);
    });
  };

  return (
    <div className="remove-container">
      {remove === 'removeFav' && (
      <button onClick={removeFromFav} className="fa-remove-btn">
        <i className="fas fa-trash">
          <span className="remove-bubble">Remove</span>
        </i>
      </button>
      )}
      {remove === 'removePastEats' && (
      <button onClick={removeFromPastEats} className="fa-remove-btn">
        <i className="fas fa-trash">
          <span className="remove-bubble">Remove</span>
        </i>
      </button>
      )}
    </div>
  );
}
