const express = require("express");
const patientsController = require("./controller/patientsController");    
const mongoose = require("mongoose");
const config = require("./config")
const app = express();
const port = 3000;


mongoose.connect(config.getDatabaseConnectionString());
app.use('/', patientsController)

app.listen(port,()=> console.log("`Example app listening on port ${port}!`"))

