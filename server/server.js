const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        'error': 'Page not found.',
        'name': 'ToDo App v1.0'
    });
});

app.get('/users', (req, res) => {

    res.send([
        {
            'name': 'Vlad',
            'age': 96
        },

        {
            'name': 'Andrew',
            'age': 14
        }
    ]);


});


app.listen(3000, () => console.log(`Express server has started on port ${port}`));


module.exports.app = app; // Need to export app var to server.test.js
