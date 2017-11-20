// Explains Mocha's testing framework - describe(), it() and before()/etc hooks - https://gist.github.com/samwize/8877226

// Supertest is library to test Express app routes created by the same guys who cretated Express
// Hence, built-in support for Express ---- https://github.com/visionmedia/supertest

const request = require('supertest');
const expect = require('expect'); // without explicitly requiring expect, default expect from supertest supports equal assertions only!

var app = require('./server.js').app;

/* global it, describe */ // Using Mocha, Supertest and Expect custom assertions

describe('Express Server', () => {

    describe('GET /', () => {
        it/* still using mocha */('should return Hello Express! response', (done) => { // Passing argument 'done' to the callback since mocha is testing async code
            request(app)
                .get('/') // chain all the requests - in our case only one GET
                .expect(404) // Default expect from Supertest - Status code 200 OK
                .expect((res) => {
                    expect(res.body).toEqual({ // Custom assertions using Expect
                        'error': 'Page not found.',
                        'name': 'ToDo App v1.0'
                    }); // chain the assertions
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should returm my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body[0].name).toBe('Vlad');
                    expect(res.body[1].age).toBe(14);
                })
                .end(done);
        });

    });

});
