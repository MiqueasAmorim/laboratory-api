const { join } = require('path');

const configsDEV = {
   "entities": [join(__dirname, '**', 'entities/*.ts')],
   "migrations": [join(__dirname, '**', 'migrations/*.ts')]
}

const configsPROD = {
   "entities": [join(__dirname, '**', 'entities/*.js')],
   "migrations": [join(__dirname, '**', 'migrations/*.js')]
}

const configs = {
   "type": "postgres",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_DATABASE,
   "entities": process.env.NODE_ENV === 'DEV'
      ? configsDEV.entities
      : configsPROD.entities,
   "migrations": process.env.NODE_ENV === 'DEV'
      ? configsDEV.migrations
      : configsPROD.migrations,
   "logging": false,
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/migrations",
      "subscribersDir": "src/subscribers"
   }
}

module.exports = configs;

