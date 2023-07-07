const express = require('express')
const app = express()
const port = 3000

app.get("/",function(req,res){
  console.log(req);
  res.send("<h1>Asru is not listening</h1>")
});
app.get("/contact",function(req,res){
  console.log(req);
  res.send("<h1>Asru contact</h1>")
});
app.get("/about",function(req,res){
  console.log(req);
  res.send("<h1>My name is Asra</h1>")
});
app.get("/hobbies",function(req,res){
  console.log(req);
  res.send("<h1>playing</h1>")
});
app.listen(port, function(){
  console.log(`app listening on port ${port}`)
});
