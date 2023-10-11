//server.js

const express = require('express');
const bodyParser = require('body-parser');
const convertFiles = require('./index.js'); // import the function

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/convert', function (req, res) {
    const directory = req.body.directory;
    const output = req.body.output;
    const outputFile = req.body.outputFile;  // retrieve the new input value

    convertFiles(directory, output, outputFile);  // pass the new value to your function

    res.send('Files converted successfully!');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

/*
app.post('/convert', function (req, res) {
    console.log(req.body); // log the request body

    const directory = req.body.directory;
    const output = req.body.output;

    convertFiles(directory, output); // call the function

    res.send('Files converted successfully!');
});
*/
