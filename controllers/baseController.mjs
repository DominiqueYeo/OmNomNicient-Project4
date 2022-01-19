class BaseController {
  constructor(name, db, model) {
    //import db model here
    this.name = name;
    this.db = db;
    this.model = model;
  }
}

export default BaseController;
