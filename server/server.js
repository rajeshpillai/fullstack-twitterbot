const express = require('express')
const app = express()
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);


const port = 4000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/timeline', (req, res) => {
  var params = { screen_name: 'nodejs' };
  T.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
  res.end("ok");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))