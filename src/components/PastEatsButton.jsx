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
export default function PastEatsButton({ restaurant, pastEats, obj }) {
  if (pastEats !== 'show') {
    return <div />;
  }

  const addToPastEatsDB = () => {
    restaurant.userId = obj.state;
    axios.post('/past-eats/', restaurant).then(() => {
    });
  };

  return (
    <div>
      {pastEats = 'show' && <button onClick={addToPastEatsDB}>Past Eats</button>}
    </div>
  );
}
