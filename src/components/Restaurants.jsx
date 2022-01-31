/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React from "react";
import Restaurant from "./Restaurant.jsx";

/*
 * ========================================================
 * ========================================================
 *
 *        Component for all restaurant results
 *
 * ========================================================
 * ========================================================
 */
export default function Restaurants({
  restaurantData,
  fav,
  pastEats,
  remove,
  obj,
  removeFavObj,
  removePastEatsObj,
}) {
  if (!restaurantData) {
    return <div />;
  }

  const resArr = restaurantData;
  const restaurantList = resArr.map((restaurant, index) => (
    <Restaurant
      key={restaurant.index}
      restaurant={resArr[index]}
      obj={obj}
      removeFavObj={removeFavObj}
      removePastEatsObj={removePastEatsObj}
      fav={fav}
      pastEats={pastEats}
      remove={remove}
    />
  ));

  return <div>{restaurantList}</div>;
}
