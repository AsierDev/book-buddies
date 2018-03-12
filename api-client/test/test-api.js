
describe('Google Books API Client', () => {
    'use strict'

    let target = bookBuddiesApi

    bookBuddiesApi = undefined


    describe('search books', () => {
        let books

        beforeEach(done => {
            target.generalSearch('roma victoriosa')
                .then(_books => {
                    books = _books

                    done()
                })
                .catch(done)
        })

        it('should get results on search', () => {
            expect(books).not.toBeUndefined()

            expect(books.length > 0).toBeTruthy()
        })
    })

    
})



/* 
const api = require('./api-client')
const assert = require('assert')

describe('api', () => {
   
    true && it('should return query', done => {
        api.generalSearch('el señor de los anillos')
            .then(res => {
                
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                done()
            })
            .catch(done)
    })

   
}) */
