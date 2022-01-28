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
      <SearchButtons searches={pastSearchData} newSearchObj={newSearchObj} />
      <PastSearchesNew newSearchObj={newSearchObj} obj={obj} />
    </div>
  );
}
