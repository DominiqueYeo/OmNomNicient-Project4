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
 *               Component for Past Eats
 *
 * ========================================================
 * ========================================================
 */
export default function PastEats({ obj }) {
  const [retrievedPastEatData, setRetrievedPastEatData] = useState();

  useEffect(() => {
    axios.post('/past-eats/retrieve', obj).then((response) => {
      setRetrievedPastEatData(response.data);
    });
  }, []);

  const removePastEatsObj = {
    state: retrievedPastEatData,
    setter: setRetrievedPastEatData,
  };

  return (
    <div>
      <Restaurants restaurantData={retrievedPastEatData} remove="removePastEats" obj={obj} removePastEatsObj={removePastEatsObj} />
    </div>
  );
}
