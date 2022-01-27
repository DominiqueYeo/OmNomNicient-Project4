/*
 * ========================================================
 * ========================================================
 *
 *                    Imports
 *
 * ========================================================
 * ========================================================
 */
import express from 'express';

const router = express.Router();

/*
 * ========================================================
 * ========================================================
 *
 *            Favourite Router with various paths
 *
 * ========================================================
 * ========================================================
 */
export default function favouriteRouter(controller) {
  // Route for new adding restaurant to favourites
  router.post('/', controller.addToFavourites.bind(controller));
  // Route for retrieving all restaurants that were added to fav
  router.post('/retrieve', controller.retrieveFromFavourites.bind(controller));
  // Route for removing restaurant from favourites
  router.post('/remove', controller.removeFromFavourites.bind(controller));
  return router;
}
