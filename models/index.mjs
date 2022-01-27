import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

// Import models
import userModel from './user.mjs';
import pastEatModel from './pastEat.mjs';
import pastSearchModel from './pastSearch.mjs';
import favouriteModel from './favourite.mjs';

const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = userModel(sequelize, Sequelize.DataTypes);
db.PastEat = pastEatModel(sequelize, Sequelize.DataTypes);
db.PastSearch = pastSearchModel(sequelize, Sequelize.DataTypes);
db.Favourite = favouriteModel(sequelize, Sequelize.DataTypes);

db.User.hasMany(db.PastEat);
db.PastEat.belongsTo(db.User);
db.User.hasMany(db.PastSearch);
db.PastSearch.belongsTo(db.User);
db.User.hasMany(db.Favourite);
db.Favourite.belongsTo(db.User);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
