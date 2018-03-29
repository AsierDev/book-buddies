'use strict';

var axios = require('axios');

var bookBuddiesApi = {
    _url: function _url() {
        //  IT WILL BE THIS
        return "https://aqueous-tundra-90892.herokuapp.com/api"
        //return 'http://localhost:5555/api';
    },


    generalSearch: function generalSearch(query) {
        return axios.get(this._url() + '/results/' + query);
    },

    retrieveRandom: function retrieveRandom() {
        return axios.get(this._url() + '/browse');
    },

    categorySearch: function categorySearch(query) {
        return axios.get(this._url() + '/category/' + query);
    },

    authorSearch: function authorSearch(query) {
        return axios.get(this._url() + '/author/' + query);
    },

    retrieveBook: function retrieveBook(id) {
        return axios.get(this._url() + '/book/' + id);
    },

    addReview: function addReview(bookId, userId, vote, comment, bookTitle) {
        return axios.post(this._url() + '/book/' + bookId + '/review', { userId: userId, vote: vote, comment: comment, bookTitle: bookTitle });
    },

    addBookToList: function addBookToList(bookId, userId, list, bookTitle) {
        return axios.put(this._url() + '/book/' + bookId + '/add', { userId: userId, list: list, bookTitle: bookTitle });
    },

    registerUser: function registerUser(name, username, email, password, description, picture) {
        return axios.post(this._url() + '/user', { name: name, username: username, email: email, password: password, description: description, picture: picture });
    },

    loginUser: function loginUser(username, password) {
        return axios.post(this._url() + '/login', { username: username, password: password });
    },

    retrieveUser: function retrieveUser(id) {
        return axios.get(this._url() + '/user/' + id);
    }

};

module.exports = bookBuddiesApi;
