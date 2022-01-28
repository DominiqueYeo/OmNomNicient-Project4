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

  useEffect(() => {
    axios.post('/past-searches/retrieve', obj).then((response) => {
      setPastSearchData(response.data);
    });
    // console.log('useEffectSearach', pastSearchData);
  }, []);

  // console.log('outside useEffect', pastSearchData);
  return (
    <div>
      <SearchButtons searches={pastSearchData} />
    </div>
  );
}
