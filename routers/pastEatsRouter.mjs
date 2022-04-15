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
 *            Past Eats Router with various paths
 *
 * ========================================================
 * ========================================================
 */
export default function pastEatsRouter(controller) {
  // Route for adding new restaurant to past eats
  router.post('/', controller.addToPastEats.bind(controller));
  // Route for retrieving all restaurants that were added to past eats
  router.post('/retrieve', controller.retrieveFromPastEats.bind(controller));
  // Route for removing restaurant from past eats
  router.post('/remove', controller.removeFromPastEats.bind(controller));

  return router;
}
