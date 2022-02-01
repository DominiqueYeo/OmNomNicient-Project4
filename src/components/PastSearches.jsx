/* eslint-disable react/no-unescaped-entities */
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
import SearchButtons from './SearchButtons.jsx';
import PastSearchesNew from './PastSearchesNew.jsx';
/*
 * ========================================================
 * ========================================================
 *
 *               Component for Past Searches
 *
 * ========================================================
 * ========================================================
 */
export default function PastSearches({ obj }) {
  const [pastSearchData, setPastSearchData] = useState();

  // Pass state and setter to children components
  const [newSearch, setNewSearch] = useState();

  useEffect(() => {
    axios.post('/past-searches/retrieve', obj).then((response) => {
      setPastSearchData(response.data);
    });
  }, []);

  const newSearchObj = {
    state: newSearch,
    setter: setNewSearch,
  };
  return (
    <div>
      <div className="top-section-past-eats">
        <div className="home-description-container-past-eats">
          <p className="main-text-large">Past Searches.</p>
          <p className="main-text">Can't Remember A Restaurant You Saw In A Previous Search?</p>
          <p className="main-text">We Got You Covered!</p>
        </div>
      </div>

      <SearchButtons searches={pastSearchData} newSearchObj={newSearchObj} />
      <PastSearchesNew newSearchObj={newSearchObj} obj={obj} />
      <div id="loader-container">
        <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="food-loader" />
      </div>
    </div>
  );
}
