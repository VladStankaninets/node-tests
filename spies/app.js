var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if email already exists

    // Save the user to the database - we have that as saveUser in db.js
    db.saveUser({
        'email': email,
        password // es6 if property name you are setting and a variable name you sending are the same you can simply do the shorthand   password
    });

    // Send the welcome email
};
