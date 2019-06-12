var request = require('request');
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#nodejs, #100DaysOfCode, #301DaysOfCode, #JavaScript, #ReactJS',
  count: 5,
  result_type: 'recent',
  lang: 'en'
}

const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en';

function getQuote(callback) {
  request(url, function (error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body);
    callback(body);
  });
}

function postTweet(tweet) {
  console.log(tweet);
  let content = tweet + ' #100DaysOfCode, #301DaysOfCode, #CodeNewbie';
  T.post("statuses/update", { status: content }, function (err, data, response) {
    console.log(data);
    return data;
  });
}

//getQuote(postTweet);

module.exports = {
  randomQuotes: () => getQuote(postTweet)
}