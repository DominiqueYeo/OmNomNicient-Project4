import express from 'express';
const router = express.Router();

export default function (controller) {
  // special JS page. Include the webpack index.html file
  router.post("/signup",controller.signup.bind(controller))
}
