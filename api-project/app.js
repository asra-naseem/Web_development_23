const express = require("express");
const app = express();
const bp=require("body-parser");
const https= require("https");
app.use(bp.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");


});
app.post("/",function(req,res){
    const query=req.body.cityName;
    const key = "d4c6322789e941d2b3d6f5921bf0b288"
    const url="https://api.openweathermap.org/data/2.5/weather/?appid="+key+"&q="+query+"&units=metric";
     https.get(url,function(response)
     {
       console.log(response.statusCode);
       response.on("data",function(data){
         const wd=JSON.parse(data);
         console.log(wd);
         const temp= wd.main.temp;
         console.log(temp);
         var wde=wd.weather[0].description
         var icon = wd.weather[0].icon
         var url_1="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<h1> Weather is "+ wde+ "</h1>");
        res.write("<p> Temperature in "+query+" is  "+temp+"</p>");
        res.write("<img src="+url_1+">");
        res.send();
       })
     });
});
app.listen(3000,function(){
  console.log("server is running on port 3000");

});
