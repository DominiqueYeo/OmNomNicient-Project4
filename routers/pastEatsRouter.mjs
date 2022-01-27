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
export default function pastEatsRouter(controller) {
  // Route for new adding restaurant to favourites
  router.post('/', controller.addToPastEats.bind(controller));
  return router;
}
