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
    q: '#100DaysOfCode, #301DaysOfCode, #CodeNewbie, #girlswhocode, #coding', // Hashtags to search tweets within
    result_type: 'recent',  // recent
    lang: 'en'
  }
  T.get('search/tweets', params, function (err, data) {
    if (!err) {
      for (let i = 0; i < 5; i++) {
        var retweetId = data.statuses[i].id_str;
        T.post('statuses/retweet/' + retweetId, function (err, response) {
          if (err) {
            console.log(err);
            console.log('Problem when retweeting. Possibly already retweeted this tweet!');
          } else if (response) {
            console.log(`Retweeeted ${response.user.screen_name} with status ${retweetId}`);
          }
        });
      }
    }
    else {
      console.log('Error during tweet search call');
    }
  });
};

retweet();