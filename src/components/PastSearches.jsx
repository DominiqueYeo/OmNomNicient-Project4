/* eslint-disable max-len */
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
import SearchButton from './SearchButton.jsx';
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
  // const [pastSearchData, setPastSearchData] = useState();
  // // let historyList;
  // useEffect(() => {
  //   axios.post('/past-searches/', obj).then((response) => {
  //     // const pastSearchArr = response.data;
  //     setPastSearchData(response.data);
  //     // console.log(pastSearchArr);
  //     // historyList = pastSearchArr.map((search, index) => (<SearchButton key={search.id} search={pastSearchArr[index]} />));
  //   });
  // }, []);

  return (
    <div>
      {/* <SearchButton searches={pastSearchData} /> */}
      {/* {historyList} */}
    </div>
  );
}
