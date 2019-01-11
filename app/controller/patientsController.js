const express = require("express");
const patientModel = require("../models/patientModel");
const app = express();

const patientsList = app.get('/', (req, res) => {
    const patientSeedData = [{
        name:"Test"
    }]
    patientModel.create(patientSeedData, (err,results) => res.send(results) )
    
});

module.exports = patientsList;