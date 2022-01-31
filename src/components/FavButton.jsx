/* eslint-disable jsx-a11y/control-has-associated-label */
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
export default function FavButton({ restaurant, fav, obj }) {
  if (fav !== 'show') {
    return <div />;
  }

  const [favBtn, setFavBtn] = useState(false);

  // Send data to server to be stored in DB
  const addToFavDB = () => {
    setFavBtn(true);
    restaurant.userId = obj.state;
    axios.post('/favourite/', restaurant).then(() => {
    });
  };

  return (
    <div>
      {fav = 'show' && (
      <button onClick={addToFavDB}>
        {favBtn ? (
          <i className="fas fa-heart fa-heart-filled">
            <div className="favourite-bubble">Favourite</div>
          </i>
        ) : (
          <i className="fas fa-heart">
            <div className="favourite-bubble">Favourite</div>
          </i>
        ) }
      </button>
      )}
    </div>
  );
}
