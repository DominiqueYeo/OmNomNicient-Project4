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
export default function FavButton({ restaurant, fav, obj }) {
  if (fav !== 'show') {
    return <div />;
  }

  // Send data to server to be stored in DB
  const addToFavDB = () => {
    restaurant.userId = obj.state;
    axios.post('/favourite/', restaurant).then(() => {
    });
  };

  return (
    <div>
      {fav = 'show' && <button onClick={addToFavDB}>Favourite</button>}
    </div>
  );
}
