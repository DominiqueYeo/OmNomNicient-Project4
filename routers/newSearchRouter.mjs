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
import multer from 'multer';

// Set name of photo upload directory
const multerUpload = multer({ dest: './public/uploads' });
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
export default function newSearchRouter(controller) {
  // Route for new image search by user
  router.post('/', multerUpload.single('file'), controller.newSearch.bind(controller));
  return router;
}
