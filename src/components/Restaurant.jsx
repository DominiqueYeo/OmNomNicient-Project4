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
import FavButton from './FavButton.jsx';
import PastEatsButton from './PastEatsButton.jsx';
import RemoveButton from './RemoveButton.jsx';

/*
 * ========================================================
 * ========================================================
 *
 *      Component for all restaurant results
 *
 * ========================================================
 * ========================================================
 */
export default function Restaurant({
  restaurant, fav, pastEats, remove, obj,
}) {
  if (!restaurant) {
    return <div />;
  }
  return (
    <div>
      <img src={restaurant.photoRef} alt={restaurant.name} />
      <div>
        {restaurant.name}
      </div>
      <div>
        {restaurant.address}
      </div>
      <div>
        {restaurant.rating}
      </div>
      <FavButton restaurant={restaurant} fav={fav} obj={obj} />
      <PastEatsButton restaurant={restaurant} pastEats={pastEats} obj={obj} />
      <RemoveButton restaurant={restaurant} remove={remove} obj={obj} />
    </div>
  );
}
