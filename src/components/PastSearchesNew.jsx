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
import React from 'react';
import Restaurants from './Restaurants.jsx';
/*
 * ========================================================
 * ========================================================
 *
 *           Component for Favourited Foods
 *
 * ========================================================
 * ========================================================
 */
export default function PastSearchesNew({ obj, newSearchObj }) {
  return (
    <div>
      <Restaurants restaurantData={newSearchObj.state} fav="show" pastEats="show" obj={obj} />
    </div>
  );
}
