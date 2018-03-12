
const api = require('../book-buddies-api-client.js')
const assert = require('assert')

describe('api', () => {
   
    true && it('should return query', done => {
        api.generalSearch('el señor de los anillos')
            .then(res => {
                //console.log(res.status, "heyhey")
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                done()
            })
            .catch(done)
    })

    !true && it('should delete', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.remove(res.data.id, 'u', 'p'))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })

    !true && it('should retrieve', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.retrieve(res.data.id))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                const user = res.data

                assert(user, 'should return data user')

                assert.equal(user.name, 'n')
                assert.equal(user.surname, 's')
                assert.equal(user.email, 'e')
                assert.equal(user.username, 'u')

                done()
            })
            .catch(done)
    })

    !true && it('should update', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.update(res.data.id, 'n', 's', 'e', 'u2', 'p', 'u', 'p'))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })
})