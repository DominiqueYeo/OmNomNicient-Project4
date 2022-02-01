/* eslint-disable jsx-a11y/alt-text */
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
  // State and setter for photo and address
  const [file, setFile] = useState();
  const [address, setAddress] = useState();
  const [description, setDesciption] = useState(true);
  const [displayDish, setDisplayDish] = useState();
  const [displayAddress, setDisplayAddress] = useState();
  // const [uploadedImage, setUploadedImage] = useState();

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

  // Callback to send photo, address and userId to DB
  const sendInfoToDB = (event) => {
    const loader = document.getElementById('loader-container');
    loader.style.display = 'flex';
    // Prevent page from refreshing
    event.preventDefault();
    // Store data in a form
    const data = new FormData();
    data.append('address', address);
    data.append('userId', obj.state);
    data.append('file', file);
    axios.post('/new-search/', data).then((response) => {
      const { dish } = response.data;
      const addressResult = response.data.address;
      setDisplayAddress(formatString(addressResult));
      setDisplayDish(formatString(dish));

      // Update restaurant variable state
      obj.resSetter(response.data.restaurantData);

      // setUploadedImage(response.data.filePath);
      loader.style.display = 'none';

      // Update description to show dish determined
      setDesciption(false);
    });
  };

  return (
    <div>
      <div className="top-section">
        <div className="home-description-container">
          { description ? (
            <div className="home-description">
              <p className="main-text">Upload a photo of any food</p>
              <p className="main-text">Enter an address</p>
              <p className="main-text">We'll identify the dish </p>
              <p className="main-text">And recommend good (hopefully) stalls near you!</p>
            </div>
          )
            : (
              <div className="home-results">
                <p className="results-text">Your Dish: </p>
                <p className="results-text-dish">{displayDish}</p>
              </div>
            )}
        </div>
        <form id="submitImageForm" action="#">
          <div id="img-container">

            { file !== undefined
              ? (
                <div id="scanner">

                  <img src={URL.createObjectURL(file)} width="200" height="200" id="form-img" />

                </div>
              ) : <div />}
          </div>
          <div id="form-container">
            <div id="form-img-btn">
              <label className="imageChooseLabel btn" htmlFor="file">
                Upload Food Image
              </label>
              <input
                type="file"
                className="invis"
                id="file"
                name="file"
                onChange={(event) => setFile(event.target.files[0])}
                accept="image/*"
              />
            </div>
            <div id="form-address">
              <label htmlFor="address" />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Input Address Here!"
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div id="form-submit">
              <button className="btn submit" type="submit" onClick={sendInfoToDB}>
                Submit
                {' '}
              </button>
            </div>
          </div>
        </form>
      </div>
      {displayAddress !== undefined ? (
        <div id="search-made">
          Showing results for:
          <p id="search-results">
            {displayDish}
            {' '}
            near
            {' '}
            {displayAddress}
          </p>
        </div>
      ) : <div />}
      <Restaurants
        restaurantData={obj.resState}
        fav="show"
        pastEats="show"
        obj={obj}
      />
      <div id="loader-container">
        <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" />
      </div>
    </div>
  );
}
