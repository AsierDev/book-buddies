const books = require('google-books-search')
const validate = require('./validate')
const { User, Review, Book } = require('../models')

const random = require('lodash.random');

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

                        !results.length ? results = ["No hay resultados para esta búsqueda"] :

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
                                } else if (book.description.length > 200) {
                                    book.description = book.description.substring(0, 200) + "..."
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

    retrieveRandom() {
        let randomQuery = random(0, 17)
        const query = ['posteguillo', 'asimov', 'Stephanie Meyer', 'ken follet', 'arturo perez reverte', 'John Grisham', 'John Boyne', 'saramago', 'j k rowling', 'stephen king', 'Philip K.Dick', 'Terry Pratchett', 'colleen mccullough', 'manfredi', 'george r r martin', 'Richard Dawkins', 'Yuval Noah Harari', 'Kip Thorne']

        return this.retrieveGeneralSearch(query[randomQuery])
    },

    retrieveCategory(query) {

        const options = {
            field: 'subject',
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
                            if (_book) {
                                book.reviews = _book.reviews

                                let sum = 0
                                for (let i = 0; i < book.reviews.length; i++) {
                                    sum += book.reviews[i].vote
                                }
                                sum /= book.reviews.length


                                book.avRate = !isNaN(sum) ? parseFloat(sum).toFixed(1) : "Sin Votos";
                            }
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

    addReview(bookId, userId, vote, comment, bookTitle) {
        return Promise.resolve()
            .then(() => {
                if (!bookId) throw Error('bookId should exist')
                return Book.findOneAndUpdate({ id: bookId }, 
                    {    
                         title: bookTitle ,
                                        
                        "$push": {
                            reviews: { user: userId, vote, comment }
                        }
                    }, {
                        new: true
                    }
                )
            })
            .then(() => {
                if (!userId) throw Error('userId should exist')
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
                if (!list) throw Error('list should be valid')
                if (!userId) throw Error('user should exist')
                if (!bookId) throw Error('bookId should exist')
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

    retrieveUser(id) {
        return Promise.resolve()

            .then(() => {
                if (!id) throw Error('id should be valid')
                return User.findOne({ _id: id }, { password: 0 }).populate({ path: "User.favorites.id", select: "title" })
                

            })
    }


}