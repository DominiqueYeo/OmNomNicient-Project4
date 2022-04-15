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
export default function SearchButtons({ searches, newSearchObj }) {
  if (!searches) {
    return <div />;
  }

  const searchArr = searches;
  const searchList = searchArr.map((search, index) => (
    <SearchButton search={searchArr[index]} key={search.index} newSearchObj={newSearchObj} />
  ));

  return (
    <div id="buttons-container">
      {searchList}
    </div>
  );
}
