// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'hotel_sorriso',
    user:     'postgres',
    password: 'docker_postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
