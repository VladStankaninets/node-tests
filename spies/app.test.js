// Spies come built-in with Expect

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

/* global it, describe */
describe('App', () => {
    var db = {'saveUser': expect.createSpy()};
    app.__set__('db', db);


    it('should call saveUser with user object', () => {
        var email = 'vlad@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
