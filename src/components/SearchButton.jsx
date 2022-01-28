/* eslint-disable react/button-has-type */
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
export default function SearchButton({ search, newSearchObj }) {
  // Make new API call in backend when button is pressed - to generate list of restaurants
  const runNewSearch = () => {
    axios.post('/past-searches/new-search', search).then((response) => {
      newSearchObj.setter(response.data);
    });
  };
  // Format restaurant name and address before displaying on button
  const formatString = (string) => {
    const nameWithSpace = string.replaceAll('+', ' ');

    const arr = nameWithSpace.split(' ');

    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const nameUpperCase = arr.join(' ');

    return nameUpperCase;
  };

  return (
    <div>
      <button onClick={runNewSearch}>
        {formatString(search.dishName)}
        {' '}
        @
        {' '}
        {formatString(search.address)}
      </button>
    </div>
  );
}
