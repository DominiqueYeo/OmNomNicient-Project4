/* eslint-disable max-len */
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
import React, { useRef, useEffect } from 'react';
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
  restaurant, fav, pastEats, remove, obj, removeFavObj, removePastEatsObj,
}) {
  if (!restaurant) {
    return <div />;
  }
  const starRef = useRef();
  // Convert ratings into stars CSS
  function getRatings(rating) {
    // Total stars
    const starsTotal = 5;
    // Get percentage
    const starPercentage = `${(rating / starsTotal) * 100}%`;
    console.log(starPercentage);
    // Set width of stars-inner to percentage
    useEffect(() => {
      const innerStarElement = starRef.current;
      innerStarElement.style.width = starPercentage;
    }, []);
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
        {getRatings(restaurant.rating)}
        <div className="stars-outer">
          <div className="stars-inner" ref={starRef} />
        </div>
        <div className="number-rating">
          {'  '}
          {restaurant.rating}
          {' '}
          Stars
        </div>
      </div>
      <FavButton restaurant={restaurant} fav={fav} obj={obj} />
      <PastEatsButton restaurant={restaurant} pastEats={pastEats} obj={obj} />
      <RemoveButton restaurant={restaurant} remove={remove} obj={obj} removeFavObj={removeFavObj} removePastEatsObj={removePastEatsObj} />
    </div>
  );
}
