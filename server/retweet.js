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

var retweet = function () {
  var params = {
    q: '#100DaysOfCode, #301DaysOfCode, #JavaScript, #PHP, #Algorithms, #Angular, #ES6, #NodeJs', // Hashtags to search tweets within
    result_type: 'mixed',  // recent
    lang: 'en'
  }
  T.get('search/tweets', params, function (err, data) {
    if (!err) {
      //console.log("Data: ", data);
      var retweetId = data.statuses[0].id_str;
      console.log("TweetID: ", retweetId);
      T.post('statuses/retweet/:id', {
        id: retweetId
      }, function (err, response) {
        if (response) {
          console.log('Retweeted!!!');
        }
        if (err) {
          console.log(err);
          console.log('Problem when retweeting. Possibly already retweeted this tweet!');
        }
      });
    }
    else {
      console.log('Error during tweet search call');
    }
  });
};

retweet();