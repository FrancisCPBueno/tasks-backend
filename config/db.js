const config = require('../knexfile.js')
const knex = require('knex')(config)

// const knex = require('knex')(config['dev']) // para conexoes com outros bancos...

knex.migrate.latest([config])
module.exports = knex
