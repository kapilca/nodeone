const express = require("express");
const bodyParser = require("body-parser");
const dateFormat = require("date-format");
require('dotenv').config();

const { format } = require("./app/models/db.js");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodeone application." });
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. at ` + dateFormat('dd-mm-yy hh:mm'));
});
