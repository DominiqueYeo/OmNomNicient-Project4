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
class PastEatsController extends BaseController {
  constructor(name, db, model) {
    super(name, db, model);
  }

  /*
  * ========================================================
  *      When user clicks on tick icon, add restaurant
  *           details to past eats table in DB
  * ========================================================
  */
  async addToPastEats(req, res) {
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

    // Check if user has this restaurant stored under their past eats
    await this.model.findOrCreate({
      where: {
        userId,
        restaurantId: restaurant[0].id,
      },
    });
    res.send('done!');
  }
}

export default PastEatsController;
