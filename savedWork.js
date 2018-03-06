// app.get('/news', (req,res)=>{
//     res.send("TODAY'S HEADLINES")
// });

//  app.use(function(req, res, next) {
//      res.send("Under construction");
//      next();
//  })

// app.get("/tweets", (req,res){

// })


// Route GET & POST requests for /tweets/ to two different functions:
// one to send an HTML page of tweets
// another to add a tweet to our data store (and send an OK status back).
// app.use(function(req,res,next){
//    console.log(`${req.method} /  ${req.path}`)

//     console.log(`${req.method} /  ${res.statusCode}`)
//     next();
// })
// app.use('/special/',function(req,res,next){
//     console.log("You have reached a special area")

//      next();
//  })

//  const locals = {
//          title: 'My Tweeter',
//          head: 'welcome',
//          people: [
//              { name: 'Gandalf' },
//              { name: 'Frodo' },
//              { name: 'Hermione' }
//          ]
//      }
//  const data = {
//      tweets: tweetBank.dataArray();
//  }


//  const tweets = [];
//  tweetBank.tweetsToExport.forEach(function(tweet) {
//      tweets.push(tweet['content']);
//  })
//  console.log(tweets);

// app.use(volleyball);
//  app.get('/special/',(req,res)=>{
//      res.send("we are special")
//  });