// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    database: 'project_allocation',
    user: 'root',
    password: 'MyPassword'
  }
};
