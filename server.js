const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const client = require("@mailchimp/mailchimp_marketing");
require('dotenv').config();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("Public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/signup.html", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/success.html", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});

app.get("/failure.html", (req, res) => {
  res.sendFile(__dirname + "/Fail.html");
});

// Signup POST route
app.post("/signup.html", async (req, res) => {
  const { fname: firstName, mname: lastName, lname: email } = req.body;

  const subscribingUser = {
    firstName,
    lastName,
    email
  };

  try {
    const response = await client.lists.addListMember("d794b4208e", {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });

    if (response.status === 'subscribed') {
      return res.redirect('/success.html');
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.redirect('/failure.html');
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Mailchimp client config
client.setConfig({
  apiKey: 'c2cddda40eec5680bcc86823300730b8-us14',
  server: "us14",
});

// Start server
app.listen(3000, () => {
  console.log("Server running on Port 3000.");
});
