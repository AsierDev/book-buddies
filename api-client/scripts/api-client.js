/**
 * Google Books API
 * 
 * @author AsierDev
 *
 * @version 1.0.0
 */

let bookBuddiesApi;
(() => {
    'use strict';

    function call(path) {
        return fetch(inst.baseUrl + path)
            .then(res => res.json())
    }

    const inst = {
        baseUrl: 'https://content.googleapis.com/books/v1/volumes',

        languageFilter: '?langRestrict=es&q=',

       
        /**
         * Searches books by a matching query in title, author or isbn.
         * 
         * @see https://developers.google.com/books/docs/v1/using#PerformingSearch
         *
         * @param {String} query - The text to search.
         * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
         */
        generalSearch: query => call(languageFilter,query)
            .then(res => console.log(res)),

        /**
         * Retrieve specific book by bookID.
         * 
         * @see https://developers.google.com/books/docs/v1/using#RetrievingVolume
         *
         * @param {String} bookId - The id of the book to retrieve.
         * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
         */
        retrieveBook: bookId => call(`/${bookId}`)
            .then(res => res),

        
    }

    bookBuddiesApi = inst
})()

























//  const books = require('google-books-search')

// const options = {
//     field: 'title',
//     offset: 0,
//     limit: 40,
//     type: 'books',
//     order: 'relevance',
//     lang: 'es'
// }

// /* Search for title, author, publisher, subject or isbn) */
// books.generalSearch(query, (error, results) => {
//     if (!error) {
//         console.log(results)
//     } else {
//         console.log(error)
//     }
// });



// books.search( query, options, function (error, results, apiResponse) {
//     if (!error) {
//         console.log(results);
//     } else {
//         console.log(error);
//     }
// }); 