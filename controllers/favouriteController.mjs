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
import BaseController from './baseController.mjs';
/*
 * ========================================================
 * ========================================================
 *
 *                  Favourite Controller
 *
 * ========================================================
 * ========================================================
 */
class FavouriteController extends BaseController {
  constructor(name, db, model) {
    super(name, db, model);
  }

  /*
  * ========================================================
  *      When user clicks on heart icon, add restaurant
  *           details to favourites table in DB
  * ========================================================
  */
  async addToFavourites(req, res) {
    const {
      name, address, rating, photoRef, userId,
    } = req.body;
    // Check if restaurant already in DB else, store in DB
    const restaurant = await this.db.Restaurant.findOrCreate({
      where: {
        name,
        photoRef,
        rating: Number(rating),
        address,
      },
    });

    // Check if user has this restaurant stored under their favourites
    await this.model.findOrCreate({
      where: {
        userId,
        restaurantId: restaurant[0].id,
      },
    });
    res.send('done!');
  }

  async retrieveFromFavourites(req, res) {
    const { Op } = this.db.Sequelize;
    const userId = req.body.state;
    // Retrieve all restaurant id's favourited by the user
    const restaurantArr = await this.model.findAll({
      where: {
        userId,
      },
    });
    const restaurantIdArr = [];
    restaurantArr.forEach((restaurant) => { restaurantIdArr.push(restaurant.restaurantId); });
    if (restaurantArr.length !== 0) {
      // Retrieve data for all favourited restaurants
      const retrievedResData = await this.db.Restaurant.findAll({
        where: {
          id: {
            [Op.or]: restaurantIdArr,
          },
        },
      });
      // Send data to client
      res.send(retrievedResData);
    } else {
      res.send([]);
    }
  }

  async removeFromFavourites(req, res) {
    const { userId } = req.body;
    const restaurantId = req.body.id;
    // Remove restaurant from favourites table in DB
    await this.model.destroy({
      where: {
        userId,
        restaurantId,
      },
    });
    const { Op } = this.db.Sequelize;

    // Retrieve all restaurant id's favourited by the user
    const restaurantArr = await this.model.findAll({
      where: {
        userId,
      },
    });
    const restaurantIdArr = [];
    restaurantArr.forEach((restaurant) => { restaurantIdArr.push(restaurant.restaurantId); });

    if (restaurantArr.length !== 0) {
      // Retrieve data for all favourited restaurants
      const retrievedResData = await this.db.Restaurant.findAll({
        where: {
          id: {
            [Op.or]: restaurantIdArr,
          },
        },
      });
      // Send data to client
      res.send(retrievedResData);
    } else {
      res.send([]);
    }
  }
}

export default FavouriteController;
