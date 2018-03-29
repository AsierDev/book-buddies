const mongoose = require('mongoose')
const assert = require('assert')
const should = require('should')
const { User, Review, Book } = require('../src/models')
const logic = require('../src/logic')

describe('logic', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/book-boodies-logic-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    beforeEach((done) => {Promise.all([
        User.remove().then(() => true),
        Book.remove().then(() => true)
    ]).then(() => done()).catch(done)})

    describe('retrieve book', () => {
        let user, book, review, id = '51dPDwAAQBAJ'

        before(() => {
            user = new User({
                name: 'name',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            book = new Book({
                id,
                title: 'title'
            })

            Promise.all([
                user.save()
                    .then(_user => user = _user),
                book.save()
                    .then(_book => book = _book)
            ])
                .then(() => {
                    review = new Review({
                        user: user._id,
                        vote: 5,
                        comment: 'comment'
                    })

                    book.reviews = [review]

                    user.reviews = [book._id]

                    return Promise.all([
                        user.save()
                            .then(_user => user = _user),
                        book.save()
                            .then(_book => book = _book)
                    ])
                })
                .then(() => {
                    debugger

                    return logic.retrieveBook(book.id)
                })
                .then(_book => book = _book)
        })

        it('should retrieve book', () => {
            assert(book, 'should book been retrieved')

            assert.equal(book.id, id, 'should book id match')
            assert.equal(book.title, 'title', 'should book title match')

            assert(book.reviews, 'should book have reviews')

            assert.equal(book.reviews.length, 1, 'should book have 1 review')

            const [_review] = book.reviews

            assert.equal(_review.user._id.toString(), user._id.toString(), 'should review user id match')
            assert.equal(_review.user.username, user.username, 'should review user username match')
            assert.equal(_review.vote, 5, 'should review vote match')
            assert.equal(_review.comment, 'comment', 'should review vote match')
        })
    })

    false && describe('add book to favorites', () => {
        let user, book, id = '51dPDwAAQBAJ'

        before(() => {
            user = new User({
                name: 'name',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            book = new Book({
                id,
                title: 'title'
            })

            return Promise.all([
                user.save()
                    .then(_user => user = _user),
                book.save()
                    .then(_book => book = _book)
            ])
                .then(() => {
                    const userId = user._id.toString()
                    const bookId = book.id

                    return logic.addBookToFavorites(userId, bookId)
                })
                .then(_user => user = _user)
        })

        it('should add book to favorites', () => {
            assert(book, 'should book been retrieved')

            assert.equal(book.id, id, 'should book id match')

            assert.equal(user.favorites.length, 1, 'should user have 1 favorite')

            const [book_id] = user.favorites

            should(book_id.toString()).be.exactly(book._id.toString())
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})