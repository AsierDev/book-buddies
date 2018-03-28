const mongoose = require('mongoose')
const assert = require('assert')
const { User, Review, Book } = require('../src/models')
const logic = require('../src/logic')

describe('logic', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/book-boodies-logic-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    beforeEach(async () => {
        const db = mongoose.connection

        await Promise.all([
            User.remove(),
            Book.remove()
        ])
    })

    describe('retrieve book', () => {
        let user, book, review, id = '51dPDwAAQBAJ'

        before(done => {
            user = new User({
                name: 'name',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            book = new Book({
                id
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
                    return logic.retrieveBook(book.id)
                })
                .then(_book => book = _book)
                .then(() => {
                    done()
                })
                .catch(done)
        })

        it('should retrieve book', () => {
            assert(book, 'should book been retrieved')

            assert.equal(book.id, id, 'should book id match')
            assert.equal(book.title, 'Contacto', 'should book title match')

            assert(book.reviews, 'should book have reviews')

            assert.equal(book.reviews.length, 1, 'should book have 1 review')

            const [_review] = book.reviews

            assert.equal(_review.user.toString(), user._id.toString(), 'should review user id match')
            assert.equal(_review.vote, 5, 'should review vote match')
            assert.equal(_review.comment, 'comment', 'should review vote match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})