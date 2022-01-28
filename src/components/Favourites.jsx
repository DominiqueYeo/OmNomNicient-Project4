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

  useEffect(() => {
    axios.post('/favourite/retrieve', obj).then((response) => {
      setRetrievedFavData(response.data);
    });
    console.log('useEffectSearach', retrievedFavData);
  }, []);
  console.log('outside useEffect', retrievedFavData);

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
