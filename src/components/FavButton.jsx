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
  const addToFavDB = () => {
    restaurant.userId = obj.state;
    axios.post('/favourite/', restaurant).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      {fav = 'show' && <button onClick={addToFavDB}>Favourite</button>}
    </div>
  );
}
