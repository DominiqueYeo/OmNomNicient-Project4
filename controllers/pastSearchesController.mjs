/* eslint-disable no-continue */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
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
import axios from 'axios';
import BaseController from './baseController.mjs';

/*
 * ========================================================
 * ========================================================
 *
 *                  Past Seach Controller
 *
 * ========================================================
 * ========================================================
 */
class PastSeachesController extends BaseController {
  constructor(name, db, model) {
    super(name, db, model);
  }

  /*
  * ========================================================
  *      When user clicks on heart icon, add restaurant
  *           details to favourites table in DB
  * ========================================================
  */
  async pastSearch(req, res) {
    const userId = req.body.state;
    // Retrieve all past searches by users
    const pastSearches = await this.model.findAll({
      where: {
        userId,
      },
    });
    // Send data to client
    res.send(pastSearches);
  }

  /*
  * ========================================================
  *       When user clicks on past search button
  *     use dish name and address to start new search
  * ========================================================
  */
  async createNewSearch(req, res) {
    const { dishName, address } = req.body;
    /*
    * ========================================================
    *       1. Search google maps for places selling dish
    * ========================================================
    */
    let restaurantData = [];
    let lat = '';
    let lng = '';

    // 1. Google API call to convert users address into lat and long coordinates
    const coordinatesConfig = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`,
      headers: {},
    };
    console.log('configURL', coordinatesConfig.url);
    await axios(coordinatesConfig)
      .then((response) => {
        console.log('COORDINATE', response.data.results);
        console.log('lat lng', response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);
        console.log('lat long working');
        // to get lat long
        lat = JSON.stringify(response.data.results[0].geometry.location.lat);
        lng = JSON.stringify(response.data.results[0].geometry.location.lng);
      })
      .catch((error) => {
        console.log('lat long not working');
        console.log(error);
      });

    // 2. Get request to generate restaurant data
    const restaurantConfig = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat}%2C${lng}&query=${dishName}&radius=1500&key=${
        process.env.REACT_APP_API_KEY
      }`,
      headers: {},
    };
    console.log('resaurant configURL', restaurantConfig.url);

    // 2. Google API call to get restaurant data
    await axios(restaurantConfig)
      .then((response) => {
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
          restaurantObj.photoRef = restaurantsArr[i].photos ? restaurantsArr[i].photos[0].photo_reference : 'noPhoto';
          restaurantData.push(restaurantObj);
        }
      })
      .catch((error) => {
        console.log('restaurant search not working');
        console.log(error);
      });

    // 3. Google API call to get restaurant photos
    for (let j = 0; j < restaurantData.length; j += 1) {
      if (restaurantData[j].photoRef === 'noPhoto') {
        restaurantData[j].photoRef = 'https://c.tenor.com/ZztVmkKG2TIAAAAM/pepe-sad-pepe-crying.gif';
        continue;
      }
      const photoConfig = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurantData[j].photoRef}&key=${process.env.REACT_APP_API_KEY}`,
        headers: {},
      };
      await axios(photoConfig)
        .then((photoRes) => {
          console.log('photo search working');
          restaurantData[
            j
          ].photoRef = `https://lh3.googleusercontent.com/${photoRes.request.path}`;
        })
        .catch((error) => {
          console.log('photo search not working');
          console.log(error);
        });
    }
    /*
    * ========================================================
    *       3. Send data back to front-end to be displayed
    * ========================================================
    */
    res.send(restaurantData);
  }
}

export default PastSeachesController;
