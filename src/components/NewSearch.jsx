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
import React, { useState } from "react";
import axios from "axios";
import Restaurants from "./Restaurants.jsx";

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
  // // State and setter for restaurant data
  // const [restaurantData, setRestaurantData] = useState();
  // Callback to send photo, address and userId to DB
  const sendInfoToDB = (event) => {
    const loader = document.getElementById("loader-container");
    loader.style.display = "flex";
    // Prevent page from refreshing
    event.preventDefault();
    // Store data in a form
    const data = new FormData();
    data.append("address", address);
    data.append("userId", obj.state);
    data.append("file", file);
    axios.post("/new-search/", data).then((response) => {
      // Update restaurant variable state
      obj.resSetter(response.data.restaurantData);
      setUploadedImage(response.data.filePath);
      loader.style.display = "none";
    });
  };

  console.log(file);

  return (
    <>
      <form id="submitImageForm" action="#">
        <div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div>
            <label className="imageChooseLabel" htmlFor="file">
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
          {file !== undefined && (
            <img src={URL.createObjectURL(file)} width="200" height="200"></img>
          )}
          <div>
            <button className="btn" type="submit" onClick={sendInfoToDB}>
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
      <Restaurants
        restaurantData={obj.resState}
        fav="show"
        pastEats="show"
        obj={obj}
      />
      <div id="loader-container">
        <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif"></img>
      </div>
    </>
  );
}
