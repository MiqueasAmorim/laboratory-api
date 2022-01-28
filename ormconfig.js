const { join } = require('path');

const configsDEV = {
   "entities": [join(__dirname, '**', 'entities/*.ts')],
   "migrations": [join(__dirname, '**', 'migrations/*.ts')],
   "ssl": null
}

const configsPROD = {
   "entities": [join(__dirname, '**', 'entities/*.js')],
   "migrations": [join(__dirname, '**', 'migrations/*.js')],
   "ssl": {
      rejectUnauthorized: false
   }
}

const configs = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "ssl": process.env.NODE_ENV === 'DEV'
      ? configsDEV.ssl
      : configsPROD.ssl,
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

