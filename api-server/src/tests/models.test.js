const mongoose = require('mongoose')
const assert = require('assert')
const { User, Review, Book } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/book-boodies-models-test')

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

    describe('create user', () => {
        let user

        before(done => {
            user = new User({
                name: 'name',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            user.save()
                .then(_user => {
                    user = _user

                    done()
                })
                .catch(done)
        })

        it('should create user', () => {
            assert(user, 'should user been saved')

            assert.equal(user.name, 'name', 'should user name match')
            assert.equal(user.email, 'email', 'should user email match')
            // TODO end validation of other field values
        })
    })

    describe('create book', () => {
        let book

        before(done => {
            book = new Book({
                id: 'id'
            })

            book.save()
                .then(() => {
                    const id = book._id.toString()

                    return Book.findOne({ _id: id })
                })
                .then(_book => book = _book)
                .then(() => {
                    done()
                })
                .catch(done)
        })

        it('should create book', () => {
            assert(book, 'should book been saved')

            assert.equal(book.id, 'id', 'should book id match')
        })
    })

    describe('add user review to book', () => {
        let user, review, book

        before(done => {
            user = new User({
                name: 'name',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            book = new Book({
                id: 'id'
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
                .then(() => done())
                .catch(done)
        })

        it('should add user review to book', () => {
            assert(user, 'should user been saved')

            assert(review, 'should review been created')

            assert(book, 'should book been saved')

            assert(user.reviews, 'should user have reviews')
            assert(book.reviews, 'should book have reviews')

            assert.equal(user.reviews.length, 1, 'should user have 1 review')
            assert.equal(book.reviews.length, 1, 'should book have 1 review')

            const [book_id] = user.reviews

            assert.equal(book_id.toString(), book._id.toString(), 'should user review book id match')

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