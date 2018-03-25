const axios = require('axios')

const bookBuddiesApi = {

    _url() {
        //  IT WILL BE THIS
        //return `https://aqueous-tundra-90892.herokuapp.com/api`
        return 'http://localhost:5555/api'
    },

    generalSearch: function (query) {
        return axios.get(`${this._url()}/results/${query}`)
    },

    retrieveRandom: function() {
        return axios.get(`${this._url()}/browse`)
    },

    categorySearch: function (query) {
        return axios.get(`${this._url()}/category/${query}`)
    },

    authorSearch: function (query) {
        return axios.get(`${this._url()}/author/${query}`)
    },

    retrieveBook: function (id) {
        return axios.get(`${this._url()}/book/${id}`)
    },

    addReview: function (bookId, userId, vote, comment, bookTitle) {
        return axios.post(`${this._url()}/book/${bookId}/review`, { userId, vote, comment, bookTitle })
    },

    addBookToList: function (bookId, userId, list) {
        return axios.put(`${this._url()}/book/${bookId}/add`, { userId, list })
    },

    registerUser: function (name, username, email, password) {
        return axios.post(`${this._url()}/user`, { name, username, email, password })
    },

    loginUser: function (username, password) {
        return axios.post(`${this._url()}/login`, { username, password })
    },

    retrieveUser: function(id) {
        return axios.get(`${this._url()}/user/${id}`)
    },

  

}

module.exports = bookBuddiesApi