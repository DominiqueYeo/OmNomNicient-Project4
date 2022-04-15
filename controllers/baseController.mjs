/*
 * ========================================================
 * ========================================================
 *
 *                    Base Controller
 *
 * ========================================================
 * ========================================================
 */
class BaseController {
  constructor(name, db, model) {
    this.name = name;
    this.db = db;
    this.model = model;
  }
}

export default BaseController;
