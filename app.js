 const express = require("express");
 const app = express();
 const volleyball = require("volleyball");
 const nunjucks = require("nunjucks");
 const tweetBank = require("./tweetBank")


 app.get('/', (req, res) => {
     res.send("Welcome")
 });




 const tweets = [];
 tweetBank.dataArray.forEach(function(tweet) {
     let thisTweet = new Object();
     thisTweet.tweet = tweet.content;
     tweets.push(thisTweet);
 })

 app.set('view engine', 'html');
 app.engine('html', nunjucks.render);
 nunjucks.configure('views', { noCache: true });
 nunjucks.render('index.html', tweets, function(err, output) {
     if (err) throw err;
     console.log(output);
 })



 app.get('/twitter', (req, res) => {
     console.log("our tweets", tweets)
     res.render('index', { tweets: tweets });
 });




 app.listen(3000, () => {
     console.log("listening on port 3000")
 });