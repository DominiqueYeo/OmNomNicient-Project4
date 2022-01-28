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
 *            Past Searches Router with various paths
 *
 * ========================================================
 * ========================================================
 */
export default function pastSearchesRouter(controller) {
  // Route for retrieving past searches
  router.post('/', controller.pastSearch.bind(controller));

  return router;
}
