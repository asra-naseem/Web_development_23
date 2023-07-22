const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const request = require("request");

const client = require("@mailchimp/mailchimp_marketing");



app.use(bodyParser.urlencoded({

  extended: true

}));

app.use(express.static("Public"));



app.get("/", function(request, response) {

  response.sendFile(__dirname + "/signup.html");

})







app.post("/", function(req, res) {

  var firstName = req.body.fname;

  var lastName = req.body.mname;

  var email = req.body.lname;



  console.log(firstName, lastName, email)



  const subscribingUser = {

    firstName: firstName,

    lastName: lastName,

    email: email

  }

  const run = async () => {

    const response = await client.lists.addListMember("d794b4208e", {

      email_address: subscribingUser.email,

      status: "subscribed",

      merge_fields: {

        FNAME: subscribingUser.firstName,

        LNAME: subscribingUser.lastName

      }

    });

    console.log(response);

  };



  run();

});



client.setConfig({

  apiKey: "ca99101b3a2422510929a051d83226f3-us14",

  server: "us14",

});



app.listen(3000, function() {

  console.log("Server running on Port 3000.")

});
// app.post("/",function(req,res){
//   console.log("you are inside post");
//   var fname = req.body.fname;
//   var mname= req.body.mname;
//   var lname= req.body.lname;
//
//   var data= {
//    members: [
//      {
//       email_address:lname,
//       status:"subscribed",
//       merge_fields:{
//         FNAME:fname,
//         LNAME:mname
//       }
//     }
//     ]
//   };
//
// const jsondata = JSON.stringify(data);
// console.log(jsondata);
// const url = "https://us14.api.mailchimp.com/3.0/list/d794b4208e/members";
//  const options={
//    method:"POST",
//    auth:"asra2301:ca99101b3a2422510929a051d83226f3-us14"
//  }
//  const request =https.request(url,options,function(response){
//    response.on("data",function(data){
//     console.log(JSON.parse(data));
//    })
// })
//  request.write(jsondata);
//  request.end();
// });

//API ky
//ca99101b3a2422510929a051d83226f3-us14
//listid
//d794b4208e
