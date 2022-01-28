/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
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
import axios from 'axios';
import React from 'react';

/*
 * ========================================================
 * ========================================================
 *
 *      Component for all restaurant results
 *
 * ========================================================
 * ========================================================
 */
export default function SearchButton({ searches }) {
  const runNewSearch = () => {
    // restaurant.userId = obj.state;
    // axios.post('/favourite/', restaurant).then((response) => {
    //   console.log(response.data);
    // });
  };
  console.log(searches);
  const historyList = searches.map((search) => (
    <button onClick={runNewSearch} key={search.id}>
      {search.dishName}
      {' '}
      at
      {' '}
      {search.postalCode}
    </button>
  ));

  console.log(historyList);

  return (
    <div>
      {/* {historyList} */}
    </div>
  );
}
