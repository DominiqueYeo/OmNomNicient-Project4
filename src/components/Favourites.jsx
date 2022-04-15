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
      <div className="top-section-fav">
        <div className="home-description-container-fav">
          <p className="main-text-large">Favourites.</p>
          <p className="main-text">Save Places To Eat At Later!</p>
        </div>
        {/* <div id="img-container-fav">
          <img className='fav-img' src="https://st.depositphotos.com/30046358/53398/v/380/depositphotos_533989162-stock-illustration-fast-food-hamburger-vector-isolated.jpg?forcejpeg=true" alt="burger" />
        </div> */}
      </div>
      <Restaurants restaurantData={retrievedFavData} remove="removeFav" pastEats="show" obj={obj} removeFavObj={removeFavObj} />
    </div>
  );
}
