var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function (req, res) {
res.sendfile(__dirname +"/index.html");
});
app.post('/',function(req,res){
  var num1 = req.body.h1;
  var num2=req.body.w1;
  var n3= num1*num1;
  var bmi=num2/n3;
  res.send("Your BMI is "+bmi);
})
app.listen(3000,function(){console.log("Express running on port");});
