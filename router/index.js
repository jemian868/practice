const usersRoute = require('../resources/users/route')

module.exports = {
    init: app => {
        console.log('route col');
        app.use('/users', usersRoute)
    }
}