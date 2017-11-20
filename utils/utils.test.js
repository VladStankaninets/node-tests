const expect = require('expect');

const utils = require('./utils');

/* global it, describe */ // Using Mocha and Expect

describe('Utils', () => {

    it('should add two numbers together', () => { // it(string, function) is a method from Moca laibrary
        var result = utils.add(33, 11);

        expect(result).toBe(44);
        expect(typeof result).toBe('number'); // Using EXPECT library's assertions. Documentation - github.com/mjackson/expect
        // if (result !== 44) throw new Error(`Expected 44, but got ${result}`);
    });


    it('should square a number', () => {
        var result = utils.square(5);

        expect(result).toBe(25);
        expect(typeof result).toBe('number');
        // if (result !== 25) throw new Error(`Expected 25, but got ${result}`);
    });

    it('should verify that First Name and Last Name of the userObject are properly set', () => {

        var userObject = {
            'age': 96,
            'location': 'Canada'
        };

        var userObjectDuplicate = utils.setName(userObject, 'Vlad Stankaninets');

        expect(userObjectDuplicate).toEqual(userObject); // proves that in JS object sent by refrence is updated as well
        expect(userObjectDuplicate.firstName).toBe('Vlad');
        expect(userObjectDuplicate.lastName).toBe('Stankaninets');
    });

});
