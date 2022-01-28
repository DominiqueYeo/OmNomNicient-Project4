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
export default function SearchButton({ search }) {
  // const runNewSearch = () => {
  //   // restaurant.userId = obj.state;
  //   // axios.post('/favourite/', restaurant).then((response) => {
  //   //   console.log(response.data);
  //   // });
  // };
  console.log('search button component', search);

  return (
    <div>
      <button>
        {search.dishName}
        {' '}
        at
        {' '}
        {search.address}
      </button>
    </div>
  );
}
