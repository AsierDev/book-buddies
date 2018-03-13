const books = require('google-books-search')


module.exports = {

    retrieveGeneralSearch(query) {

        const options = {
            limit: 40,
            type: 'books',
            lang: 'es'
        };
        return new Promise((resolve, reject) => {

            books.search(query, options,
                (error, results) => {
                    if (!error) {
                        resolve(results)

                    } else {
                        reject(error)
                    }
                })
        })
    },

    retrieveCategory(query) {

        const options = {
            field: 'subject',
            limit: 40,
            type: 'books',
            lang: 'es'
        };

        return new Promise((resolve, reject) => {


            books.search(query, options,
                (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        resolve(error)
                    }
                })

        })

    },

    retrieveAuthor(query) {

        const options = {
            field: 'author',
            limit: 40,
            order: "newest",
            lang: 'es'
        };

        return new Promise((resolve, reject) => {


            books.search(query, options,
                (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        resolve(error)
                    }
                })

        })

    },
}