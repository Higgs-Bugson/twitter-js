 const express= require("express");
 const app= express();
const volleyball=require("volleyball");



// app.use(function(req,res,next){
//    console.log(`${req.method} /  ${req.path}`)
   
//     console.log(`${req.method} /  ${res.statusCode}`)
//     next();
// })
// app.use('/special/',function(req,res,next){
//     console.log("You have reached a special area")
   
//      next();
//  })

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

app.listen(3000,()=>{
    console.log("listening on port 3000")
});
//console.log(app.request.path);