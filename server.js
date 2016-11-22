var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('homework3list', ['homework3list']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/homework3list', function (req, res) {
  console.log('I received a GET request');

  db.homework3list.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/homework3list', function (req, res) {
  console.log('I received a GET request');

  dbskill.skilllist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.listen(8080);
console.log('Server running on port 8080');
