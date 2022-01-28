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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
export default function Favourites({ obj }) {
  const [retrievedFavData, setRetrievedFavData] = useState();

  // Get favourited restaurants to render on page
  useEffect(() => {
    axios.post('/favourite/retrieve', obj).then((response) => {
      setRetrievedFavData(response.data);
    });
  }, []);

  const removeFavObj = {
    state: retrievedFavData,
    setter: setRetrievedFavData,
  };

  return (
    <div>
      <Restaurants restaurantData={retrievedFavData} remove="removeFav" obj={obj} removeFavObj={removeFavObj} />
    </div>
  );
}
