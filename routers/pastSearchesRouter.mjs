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
  router.post('/retrieve', controller.pastSearch.bind(controller));
  // Route for executing new search based on past search
  router.post('/new-search', controller.createNewSearch.bind(controller));

  return router;
}
