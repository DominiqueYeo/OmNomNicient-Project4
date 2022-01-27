/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import { resolve } from 'path';

// Import routers
import userRouter from '../routers/userRouter.mjs';
import newSearchRouter from '../routers/newSearchRouter.mjs';
import favouriteRouter from '../routers/favouriteRouter.mjs';
import pastEatsRouter from '../routers/pastEatsRouter.mjs';

// Import controllers
import UserController from '../controllers/userController.mjs';
import NewSearchController from '../controllers/newSearchController.mjs';
import FavouriteController from '../controllers/favouriteController.mjs';
import PastEatsController from '../controllers/pastEatsController.mjs';

// Import models
import db from '../models/index.mjs';

// Initialise controllers
const userController = new UserController('User', db, db.User);
const newSearchController = new NewSearchController('Past_search', db, db.PastSearch);
const favouriteController = new FavouriteController('Favourite', db, db.Favourite);
const pastEatsController = new PastEatsController('Past_eat', db, db.PastEat);

/*
 * ========================================================
 * ========================================================
 *
 *                     Bind Routes
 *
 * ========================================================
 * ========================================================
 */
export default function routes(app) {
  // Route for Single Page Application HTML file
  app.get('/main', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  // Redirect all other routes to '/main'
  app.get('*', (request, response) => {
    response.redirect('/main');
  });
  // User sign up and login routes
  app.use('/users', userRouter(userController));
  // Routes for new image searches
  app.use('/new-search', newSearchRouter(newSearchController));
  // Routes for adding restaurant to favourites
  app.use('/favourite', favouriteRouter(favouriteController));
  // Routes for adding restaurant to past eats
  app.use('/past-eats', pastEatsRouter(pastEatsController));
}
