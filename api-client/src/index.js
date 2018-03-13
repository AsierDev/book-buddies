const axios = require('axios')

const bookBuddiesApi = {

    _url() {
        //  IT WILL BE THIS
        // return `${this.protocol}://${this.host}:${this.port}/api`
        return 'http://localhost:5000'
    },

    generalSearch: function(query) {
        return axios.get(`${this._url()}/users/${query}`)
    },

    categorySearch: function(query) {
        return axios.get(`${this._url()}/category/${query}`)
    },

    authorSearch: function(query) {
        return axios.get(`${this._url()}/author/${query}`)
    },
}

module.exports = bookBuddiesApi