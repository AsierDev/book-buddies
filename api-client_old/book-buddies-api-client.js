const rp = require('request-promise')


/**
 * Google Places client.
 * 
 * @author AsierDev
 *
 * @version 1.0.0
 */

const api = {
    _baseUrl() {
        with (this) {
            return 'https://content.googleapis.com/books/v1/volumes?langRestrict=es&q='
        }
    },

    _call(query,filter) {
        // return rp(`${this._baseUrl()}/${path}`)
        //     .then(res => JSON.parse(res))
        return rp({
            uri: `${this._baseUrl()}`,
            query,
            filter,
            json: true
        })
    },

    generalSearch(query) {
        return this._call(query)
    },

    /* create(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    remove(id) {
        return this._call('delete', 'id', { username, password })
    } */
}

module.exports = api

 
