 const express= require("express");
 const app= express();
const volleyball=require("volleyball");
const nunjucks = require("nunjucks");



// app.use(function(req,res,next){
//    console.log(`${req.method} /  ${req.path}`)
   
//     console.log(`${req.method} /  ${res.statusCode}`)
//     next();
// })
// app.use('/special/',function(req,res,next){
//     console.log("You have reached a special area")
   
//      next();
//  })

const locals = {
    title: 'My Tweeter', 
    head: 'welcome',
    people: [
        {name: 'Gandalf'}, 
        {name: 'Frodo'},
        {name: 'Hermione'}
    ]
}

app.use(volleyball);
 app.get('/special/',(req,res)=>{
     res.send("we are special")
 });
app.get('/', (req,res)=>{
    res.send("Welcome")
});

app.get('/news', (req,res)=>{
    res.send("TODAY'S HEADLINES")
});

app.get('/twitter', (req,res)=>{
    res.render('index', {title: 'Twitter', head: locals.head, people: locals.people});
});



app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output){
    console.log(output);
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
});
//console.log(app.request.path);