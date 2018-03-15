const booksBuddiesApi = require('api-client')

booksBuddiesApi.protocol = process.env.REACT_APP_API_PROTOCOL
booksBuddiesApi.host = process.env.REACT_APP_API_HOST
booksBuddiesApi.port = process.env.REACT_APP_API_PORT


module.exports = booksBuddiesApi