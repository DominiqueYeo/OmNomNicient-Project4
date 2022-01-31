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
import React, { useState } from 'react';

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

  const [pastEatsBtn, setPastEatsBtn] = useState(false);

  const addToPastEatsDB = () => {
    setPastEatsBtn(true);
    restaurant.userId = obj.state;
    axios.post('/past-eats/', restaurant).then(() => {
    });
  };

  return (
    <div>
      {pastEats = 'show' && (
      <button onClick={addToPastEatsDB}>
        {pastEatsBtn ? (
          <i className="fas fa-hamburger fa-hamburger-filled">
            <div className="past-eats-bubble">Past Eats</div>
          </i>
        ) : (
          <i className="fas fa-hamburger">
            <div className="past-eats-bubble">Past Eats</div>
          </i>
        )}
      </button>
      )}
    </div>
  );
}
