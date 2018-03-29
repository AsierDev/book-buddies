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

    beforeEach(() => Promise.all([
        User.remove(),
        Book.remove()
    ]))

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
                id: 'id',
                title: 'title'
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
                id: 'id',
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

    describe('populate books in favorites', () => {
        let user, book, book2

        before(() => {
            user = new User({
                name: 'name',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            book = new Book({
                id: 'id',
                title: 'title'
            })

            book2 = new Book({
                id: 'id-2',
                title: 'title-2'
            })

            return Promise.all([
                user.save()
                    .then(_user => user = _user),
                book.save()
                    .then(_book => book = _book),
                book2.save()
                    .then(_book => book2 = _book),
            ])
                .then(() => {
                    user.favorites = [book._id, book2._id]

                    return user.save()
                })
                .then(user => {
                    const id = user._id.toString()

                    return User.findOne({ _id: id }).populate({ path: 'favorites' })
                })
                .then(_user => user = _user)
        })

        it('should add user review to book', () => {
            assert(user, 'should user been saved')

            assert(book, 'should book been saved')
            assert(book2, 'should book been saved')

            assert(user.favorites, 'should user have favorites')

            assert.equal(user.favorites.length, 2, 'should user have 2 favorites')

            const [_book, _book2] = user.favorites

            assert.equal(_book._id.toString(), book._id.toString(), 'should user favorite book id match')
            assert.equal(_book2._id.toString(), book2._id.toString(), 'should user favorite book id match')

            assert.equal(_book.id, 'id', 'should book id match')
            assert.equal(_book.title, 'title', 'should book title match')

            assert.equal(_book2.id, 'id-2', 'should book id match')
            assert.equal(_book2.title, 'title-2', 'should book title match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})