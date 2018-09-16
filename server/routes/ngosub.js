require("../database/database");

var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var requestParameters = req.body;

    //Perform any required verification steps here... [none for now]

    var storyKey = storeNGOSubmission(requestParameters);

    //Return a story key to the sender
    req.send(storyKey);
});

module.exports = router;
