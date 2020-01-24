import { exports as config } from './botConfig.js';

// our app.
const express = require('express');
const app = express();
// const config = require('./botConfig');
const Twit = require('twit');
const T = new Twit(config);

//
// Get the hashtag to search with from the client
//

let params = {
  q: '%23cactus since:2016-01-1',
  count: 5,
};

function gotData(err, data, response) {
  let tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

//T.get('search/tweets', params, gotData);
let twitterReturn = T.get('search/tweets', params, gotData);

app.get('/', (req, res) => res.send(twitterReturn));

app.listen(3000, () =>
  console.log('Twitter (bot.js) is doing the listening on port 3000! \n'),
);
