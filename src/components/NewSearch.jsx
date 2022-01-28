/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useState } from 'react';
import axios from 'axios';
import Restaurants from './Restaurants.jsx';

/*
 * ========================================================
 * ========================================================
 *
 *          Component for New Search (Home Page)
 *
 * ========================================================
 * ========================================================
 */
export default function NewSearch({ obj }) {
  // State and setter for photo and postal code
  const [file, setFile] = useState();
  const [postalCode, setPostalCode] = useState();
  const [uploadedImage, setUploadedImage] = useState();
  // // State and setter for restaurant data
  // const [restaurantData, setRestaurantData] = useState();
  // Callback to send photo, postal code and userId to DB
  const sendInfoToDB = (event) => {
    // Prevent page from refreshing
    event.preventDefault();
    // Store data in a form
    const data = new FormData();
    data.append('postalCode', postalCode);
    data.append('userId', obj.state);
    data.append('file', file);
    axios.post('/new-search/', data).then((response) => {
      // Update restaurant variable state
      obj.resSetter(response.data.restaurantData);
      setUploadedImage(response.data.filePath);
    });
  };

  return (
    <>
      <form action="#">
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" name="postalcode" placeholder="Postal Code" onChange={(event) => setPostalCode(event.target.value)} />
        <br />
        <label htmlFor="file">Upload Food Image</label>
        <input type="file" id="file" name="file" onChange={(event) => setFile(event.target.files[0])} accept="image/*" />
        <button type="submit" onClick={sendInfoToDB}>Submit </button>
      </form>
      <Restaurants restaurantData={obj.resState} fav="show" pastEats="show" obj={obj} />
      { uploadedImage !== undefined && <img src={uploadedImage} alt="chicken rice" />}
    </>
  );
}
