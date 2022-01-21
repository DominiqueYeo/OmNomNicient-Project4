/*
 * ========================================================
 * ========================================================
 *
 *                         Imports
 *
 * ========================================================
 * ========================================================
 */
import { resolve } from 'path';
// import routers
import userRouter from '../routers/userRouter.mjs';
// import controllers
import UserController from '../controllers/userController.mjs';
// import models
import db from '../models/index.mjs';

// Initialise controllers
const userController = new UserController('User', db, db.User);

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
  // special JS page. Include the webpack index.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  app.use('/users', userRouter(userController));
}
