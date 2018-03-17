const axios = require('axios')

const bookBuddiesApi = {

    _url() {
        //  IT WILL BE THIS
        // return `${this.protocol}://${this.host}:${this.port}/api`
        return 'http://localhost:5555/api'
    },

    generalSearch: function(query) {
        return axios.get(`${this._url()}/results/${query}`)
    },

    categorySearch: function(query) {
        return axios.get(`${this._url()}/category/${query}`)
    },

    authorSearch: function(query) {
        return axios.get(`${this._url()}/author/${query}`)
    },

    retrieveBook: function(id) {
        return axios.get(`${this._url()}/book/${id}`)
    }
}

module.exports = bookBuddiesApi