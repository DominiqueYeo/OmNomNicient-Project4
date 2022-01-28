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
}

export default PastSeachesController;
