const books = require('google-books-search')
const validate = require('./validate')
const { User, Review, Book } = require('../models')

const defaultPic = 'http://ring49magic.com/blog/wp-content/plugins/google-bookshelves/images/no_cover_thumb.png'

const googleBookProps = ['authors', 'categories', 'description', 'id', 'industryIdentifiers', 'pageCount', 'publishedDate', 'thumbnail', 'title']

module.exports = {

    retrieveGeneralSearch(query) {

        const options = {
            limit: 20,
            type: 'books',
            lang: 'es'
        };

        return new Promise((resolve, reject) => {


            books.search(query, options,
                (error, results) => {
                    if (!error) {

                        results = results.map((book) => {

                            book.authors ? book.authors[0] : book.authors = ["Varios Autores"]

                            if (!book.title) {
                                book.title = "Este libro no cuenta con título"
                            } else if (book.title.length > 45) {
                                book.title = book.title.substring(0, 45) + "..."
                            } else {
                                book.title
                            }


                            if (!book.description) {
                                book.description = "Este libro no cuenta con descripción."
                            } else if (book.description.length > 160) {
                                book.description = book.description.substring(0, 160) + "..."
                            } else {
                                book.description
                            }

                            !book.thumbnail ? book.thumbnail = defaultPic : book.thumbnail


                            return book

                        })


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

                        results = results.map((book) => {

                            book.authors ? book.authors[0] : book.authors = ["Varios Autores"]

                            if (!book.title) {
                                book.title = "Este libro no cuenta con título"
                            } else if (book.title.length > 45) {
                                book.title = book.title.substring(0, 45) + "..."
                            } else {
                                book.title
                            }


                            if (!book.description) {
                                book.description = "Este libro no cuenta con descripción."
                            } else if (book.description.length > 160) {
                                book.description = book.description.substring(0, 160) + "..."
                            } else {
                                book.description
                            }

                            !book.thumbnail ? book.thumbnail = defaultPic : book.thumbnail


                            return book

                        })


                        resolve(results)


                    } else {
                        reject(error)
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

    retrieveBook(id) {
        return Promise.resolve()
            .then(() => {
                if (!id) throw Error('id should be valid')

                const book = {}

                const promises = [
                    new Promise((resolve, reject) => {
                        books.lookup(id, (error, results) => {
                            if (error) return reject(error)

                            googleBookProps.forEach(prop => {


                                if (!results[prop])
                                    results[prop] = ["Sin datos"]

                                book[prop] = results[prop]
                            })


                            resolve()
                        })
                    }),
                    Book.findOne({ id })
                        .then(_book => {
                            if (_book)
                                book.reviews = _book.reviews
                            else
                                Book.create({ id })
                        })
                ]

                return Promise.all(promises)
                    .then(() => book)
                    .then(book => {
                        return User.populate(book.reviews, { path: "user", select: "username" }).then(() => book)
                    })



            })
    },

    addReview(bookId, userId, vote, comment) {
        return Promise.resolve()
            .then(() => {
                return Book.findOneAndUpdate({ id: bookId },
                    {
                        "$push": {
                            reviews: { user: userId, vote, comment }
                        }
                    }, {
                        new: true
                    }
                )
            })
            .then(() => {
                return User.findOneAndUpdate({ _id: userId },
                    {
                        "$push": {

                            reviews: { _id: bookId }
                        }
                    }, {
                        new: true
                    }
                )
            })
    },

    addBookToList(bookId, userId, list) {
        return Promise.resolve()


            .then(() => {
                let _list
                if (list == "wishlist") {
                    return User.findOneAndUpdate({ _id: userId },
                        {
                            "$push": {

                                wishlist: { _id: bookId }
                            }
                        }, {
                            new: true
                        }
                    )

                }
                if (list == "favoritos") {

                    return User.findOneAndUpdate({ _id: userId },
                        {
                            "$push": {

                                favorites: { _id: bookId }
                            }
                        }, {
                            new: true
                        }
                    )

                }
            })

    },

    createUser(name, username, email, password) {
        return Promise.resolve()
            .then(() => {
                validate({ name, username, email, password })

                return User.findOne({ username })
            })
            .then(user => {
                if (user) throw Error('username already exists')

                return User.create({ name, username, email, password })
            })
    },

    loginUser(username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ username, password })

                return User.findOne({ username })
            })
            .then(user => {
                if (!user || user.password != password) throw Error('username or/and password incorrect')

                return User.findOne(user, { password: 0 })
            })
    },









}