import express from 'express';

const router = express.Router();

/*
 * ========================================================
 * ========================================================
 *
 *            User Router with various paths
 *
 * ========================================================
 * ========================================================
 */
export default function userRouter(controller) {
  router.post('/signup', controller.signUp.bind(controller));
  router.post('/login', controller.login.bind(controller));
  return router;
}
