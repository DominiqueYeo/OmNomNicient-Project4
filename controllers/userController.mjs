// const bcrypt = require("bcrypt");
// const BaseController = require("./baseController");
// const { PW_SALT_ROUND, JWT_SALT } = process.env;
// const jwt = require("jsonwebtoken");

import bcrypt from 'bcrypt'
import BaseController from './baseController.mjs';
import jwt from 'jsonwebtoken'
const { PW_SALT_ROUND, JWT_SALT } = process.env;


class UserController extends BaseController {
  constructor(name, db, model) {
    super(name, db, model);
  }

  getGame(req, res) {
    return res.status(200).json({ new: "/game" });
  }

  async signup(req, res) {
    const { user_name, user_email, user_password } = req.body;
    if (!user_name || !user_email || !user_password) {
      return res.status(500).json({ msg: "Something is missing" });
    }
    const hash = await bcrypt.hash(user_password, Number(PW_SALT_ROUND));
    const newUser = await this.model.create({
      user_name,
      user_email,
      user_password: hash,
    });
    const payload = { id: newUser.id, user_email: newUser.user_email };
    const token = jwt.sign(payload, JWT_SALT, { expiresIn: "30mins" });
    return res.status(200).json({ newUser, token, payload });
  }

  async login(req, res) {
    const { user_email, user_password } = req.body;
    if (!user_email || !user_password) {
      return res.status(500).json({ msg: "Something is wrong" });
    }
    const user = await this.model.findOne({ where: { user_email } });
    if (!user) {
      res.status(404).json({ err: "user not found" });
    }

    const compare = await bcrypt.compare(user_password, user.user_password);

    if (compare) {
      const payload = { id: user.id, user_email: user.user_email };
      const token = jwt.sign(payload, JWT_SALT, { expiresIn: "30mins" });
      return res.json({ success: true, token, payload });
    }
    return res.status(401).json({ error: "wrong password" });
  }
}

// module.exports = UserController;
export default UserController