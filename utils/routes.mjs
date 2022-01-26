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
// Import controllers
import UserController from '../controllers/userController.mjs';
import NewSearchController from '../controllers/newSearchController.mjs';
// Import models
import db from '../models/index.mjs';
// Initialise controllers
const userController = new UserController('User', db, db.User);
const newSearchController = new NewSearchController();

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
}
