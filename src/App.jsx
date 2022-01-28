/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Favourites from './components/Favourites.jsx';
import NewSearch from './components/NewSearch.jsx';
import PastEats from './components/PastEats.jsx';
import PastSearches from './components/PastSearches.jsx';
import NavBar from './components/NavBar.jsx';

/*
 * ========================================================
 * ========================================================
 *
 *                  Main App Component
 *
 * ========================================================
 * ========================================================
 */
export default function App() {
  // State and setter for userId to be passed to child components
  const [userId, setUserId] = useState();
  // State and setter for restaurant data to be passed to child components
  const [restaurantData, setRestaurantData] = useState();
  // State and setter stored in obj, to be sent as a prop
  const data = {
    state: userId,
    setter: setUserId,
    resState: restaurantData,
    resSetter: setRestaurantData,
  };

  return (
    <div>
      <Routes>
        <Route exact path="/main" element={<LandingPage obj={data} />} />
        <Route exact path="/" element={<NavBar />}>
          <Route index element={<NewSearch obj={data} />} />
          <Route exact path="fav" element={<Favourites obj={data} />} />
          <Route exact path="eats" element={<PastEats obj={data} />} />
          <Route exact path="searches" element={<PastSearches obj={data} />} />
        </Route>
      </Routes>
    </div>
  );
}
