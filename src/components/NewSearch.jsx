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
  const [uploadedImage, setUploadedImage] = useState();

  // Callback to send photo, address and userId to DB
  const sendInfoToDB = (event) => {
    const scanner = document.getElementById('scanner');
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
      // Update restaurant variable state
      obj.resSetter(response.data.restaurantData);
      setUploadedImage(response.data.filePath);
      loader.style.display = 'none';
      scanner.style.display = 'block';
    });
  };

  return (
    <div>
      <div className="top-section">
        <div className="home-description-container">
          <div className="home-description">
            <p className="main-text">Upload a photo of any food</p>
            <p className="main-text">Enter an address</p>
            <p className="main-text">We'll identify the dish </p>
            <p className="main-text">And recommend good (hopefully) stalls near you!</p>
          </div>
        </div>
        <form id="submitImageForm" action="#">
          <div id="img-container">
            <div id="scanner">

              {file !== undefined && (
              <img src={URL.createObjectURL(file)} width="200" height="200" id="form-img" />
              )}
            </div>
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
