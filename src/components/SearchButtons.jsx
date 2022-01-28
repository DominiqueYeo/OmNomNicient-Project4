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
import SearchButton from './SearchButton.jsx';

/*
 * ========================================================
 * ========================================================
 *
 *      Component for all restaurant results
 *
 * ========================================================
 * ========================================================
 */
export default function SearchButtons({ searches }) {
  // const runNewSearch = () => {
  //   // restaurant.userId = obj.state;
  //   // axios.post('/favourite/', restaurant).then((response) => {
  //   //   console.log(response.data);
  //   // });
  // };
  if (!searches) {
    return <div />;
  }
  console.log('search button component', searches);
  const searchArr = searches;
  const searchList = searchArr.map((search, index) => (
    <SearchButton search={searchArr[index]} key={search.index} />
  ));

  return (
    <div>
      {searchList}
    </div>
  );
}
