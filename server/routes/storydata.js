import {retrieveNGOSubmission, storeNGOSubmission} from "../database/database";

var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var storyKey = req.body;
    var storyData = retrieveNGOSubmission(storyKey);
    res.send(storyData);
});

module.exports = router;
