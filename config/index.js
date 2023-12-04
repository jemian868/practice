const { instance } = require('./instance')

const knex = require('knex')({
    client: 'mysql',
    connection: instance['development']
})

module.exports = { knex }
