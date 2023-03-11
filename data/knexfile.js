// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config({path: '../.env'});
module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: process.env.DB_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

