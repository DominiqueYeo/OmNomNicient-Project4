/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/*
 * ========================================================
 * ========================================================
 *
 *                    Imports
 *
 * ========================================================
 * ========================================================
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import BaseController from './baseController.mjs';

dotenv.config();
const { PW_SALT_ROUND, JWT_SALT } = process.env;

/*
 * ========================================================
 * ========================================================
 *
 *                    User Controller
 *
 * ========================================================
 * ========================================================
 */
class UserController extends BaseController {
  constructor(name, db, model) {
    super(name, db, model);
  }

  /*
  * ========================================================
  *   When user tries to signup, check if username exists,
  *                else store data in DB
  * ========================================================
  */
  async signUp(req, res) {
    const { userEmail, userPassword } = req.body;
    // If email or password missing, inform player
    if (!userEmail || !userPassword) {
      return res.send('details missing');
    }

    // Check if username already exists
    const checkIfUserExists = await this.model.findOne({
      where: {
        userEmail,
      },
    });

    // If no such username in database, create new one
    if (checkIfUserExists === null) {
      const hash = await bcrypt.hash(userPassword, Number(PW_SALT_ROUND));
      await this.model.create({
        userEmail,
        userPassword: hash,
      });
      return res.status(200).send('sign up success');
    }
    // Else inform user that username already exists
    return res.send('user exists');
  }

  /*
  * ========================================================
  *      When user tries to login, authenticate login
  *         details and let user know the outcome
  * ========================================================
  */
  async login(req, res) {
    const { userEmail, userPassword } = req.body;

    // If email or password missing, inform player
    if (!userEmail || !userPassword) {
      return res.send('details missing');
    }

    // If email not in DB, inform player
    const user = await this.model.findOne({ where: { userEmail } });
    if (!user) {
      return res.send('username or password incorrect');
    }

    // Compare password in DB with password entered
    const compare = await bcrypt.compare(userPassword, user.userPassword);

    // If entered password matches DB password, inform client side JS that login is successful
    if (compare) {
      const userId = user.id;
      const payload = { id: user.id, userEmail: user.userEmail };
      const token = jwt.sign(payload, JWT_SALT, { expiresIn: '30mins' });
      return res.json({
        success: true, token, payload, userId,
      });
    }
    // If password incorrect inform user
    return res.send('username or password incorrect');
  }
}

export default UserController;
