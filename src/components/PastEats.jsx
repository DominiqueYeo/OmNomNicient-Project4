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

  // Get restaurants added to past eats, to render on page
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
      <div className="top-section-past-eats">
        <div className="home-description-container-past-eats">
          <p className="main-text-large">Past Eats.</p>
          <p className="main-text">Don't Worry!</p>
          <p className="main-text">We're All Creatures Of Habit.</p>
        </div>
        {/* <div id="img-container-fav">
          <img className='fav-img' src="https://st.depositphotos.com/30046358/53398/v/380/depositphotos_533989162-stock-illustration-fast-food-hamburger-vector-isolated.jpg?forcejpeg=true" alt="burger" />
        </div> */}
      </div>
      <Restaurants restaurantData={retrievedPastEatData} remove="removePastEats" fav="show" obj={obj} removePastEatsObj={removePastEatsObj} />
    </div>
  );
}
