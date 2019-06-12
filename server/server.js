const express = require('express')
const app = express()
const Twitter = require('twitter');
const cors = require('cors');

var config = require('./config.js');
var TweetHelper = require('./random-quote-bot');

var T = new Twitter(config);


const port = 4000

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/timeline', (req, res) => {
  var params = { screen_name: '' };
  T.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      return res.json(tweets);
    } else {
      res.end(error);
    }
  });
});

app.post('/random-quotes', (req, res) => {
  res.send(TweetHelper.randomQuotes());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))