/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import fs from 'fs';
import axios from 'axios';
import BaseController from './baseController.mjs';
/*
 * ========================================================
 * ========================================================
 *
 *                  New Search Controller
 *
 * ========================================================
 * ========================================================
 */
class NewSearchController extends BaseController {
  constructor(name, db, model) {
    super(name, db, model);
  }

  /*
  * ========================================================
  *      When user submits picture and postal code:
  *      1. Save photo in backend server
  *      2. Analyse dish in photo
  *      3. Search google maps for places selling dish
  *      4. Send data back to front-end to be displayed
  * ========================================================
  */
  async newSearch(req, res) {
    /*
    * ========================================================
    *           1. Save photo in backend server
    *              with appropriate extension
    * ========================================================
    */
    // Get file type
    const fileType = req.file.mimetype.split('/')[1];
    // Get file name
    const newFileName = `${req.file.filename}.${fileType}`;
    // Add file type as extension to file name
    fs.rename(`./public/uploads/${req.file.filename}`, `./public/uploads/${newFileName}`, () => {
      console.log('callback');
    });
    const filePath = `uploads/${newFileName}`;
    /*
    * ========================================================
    *               2. Analyse dish in photo
    * ========================================================
    */

    /*
    * ========================================================
    *               3. Store dish and postal code
    *                     in past searches DB table
    * ========================================================
    */
    const { userId } = req.body;
    const { postalCode } = req.body;
    // Hardcoded for now
    const dish = 'chocolate+cake';

    /* After search is made and TensorFlow has identified dish,
    check if stored in DB, else store data in DB */
    await this.model.findOrCreate({
      where: {
        userId,
        dishName: dish,
        postalCode,
      },
    });
    /*
    * ========================================================
    *         4. Search google maps for places selling dish
    * ========================================================
    */
    let restaurantData = [];
    let lat = '';
    let lng = '';

    // 1. Convert users postal code into lat and long coordinates for next API call
    const coordinatesConfig = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${process.env.REACT_APP_API_KEY}`,
      headers: { },
    };

    await axios(coordinatesConfig).then((response) => {
      console.log('lat long working');
      console.log(response.data.results);
      // to get lat long
      lat = JSON.stringify(response.data.results[0].geometry.location.lat);
      lng = JSON.stringify(response.data.results[0].geometry.location.lng);
    }).catch((error) => {
      console.log('lat long not working');
      console.log(error);
    });

    // 2. Get request to generate restaurant data
    const restaurantConfig = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${dish}/@${lat},${lng}&key=${process.env.REACT_APP_API_KEY}`,
      headers: { },
    };

    await axios(restaurantConfig).then((response) => {
      console.log('restaurant search working');

      // To store restaurant data
      restaurantData = [];
      const restaurantsArr = response.data.results;
      // Run loop to extract relevant data to be displayed
      for (let i = 0; i < 10; i += 1) {
        const restaurantObj = {};
        restaurantObj.name = restaurantsArr[i].name ? restaurantsArr[i].name : 'No Name';
        restaurantObj.address = restaurantsArr[i].formatted_address ? restaurantsArr[i].formatted_address : 'No Address';
        restaurantObj.rating = restaurantsArr[i].rating ? restaurantsArr[i].rating : 'No Rating';
        restaurantObj.photoRef = restaurantsArr[i].photos ? restaurantsArr[i].photos[0].photo_reference : 'Aap_uEB1Z8sY-kbW61m_hwL4_OqEWGoKVfMM4O-fc3pWW587J8H1640bPYwadvw4tJ26sxe_bvqgocbpeLgbkrU4fjAOsrIxD4re6W-jmYg7fMpfUjCK4hZPi7yl9RZfpxwO1EFxGzsMrv6HzmfY7nKHde6iRVW6Afh4aCOQcZmhpouHkyUc';
        restaurantData.push(restaurantObj);
      }
    }).catch((error) => {
      console.log('restaurant search not working');
      console.log(error);
    });

    // 3. Get restaurant photo
    for (let j = 0; j < restaurantData.length; j += 1) {
      const photoConfig = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurantData[j].photoRef}&key=${process.env.REACT_APP_API_KEY}`,
        headers: { },
      };
      await axios(photoConfig).then((photoRes) => {
        console.log('photo search working');
        restaurantData[j].photoRef = `https://lh3.googleusercontent.com/${photoRes.request.path}`;
      }).catch((error) => {
        console.log('photo search not working');
        console.log(error);
      });
    }
    /*
    * ========================================================
    *        5. Send data back to front-end to be displayed
    * ========================================================
    */
    const data = {
      restaurantData, filePath,
    };
    res.send(data);
  }
}

export default NewSearchController;
