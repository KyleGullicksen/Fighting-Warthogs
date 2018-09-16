require("../database/database");
require("../constants/Constants");

var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var storyKey = req.body;

    //Perform any required verification steps here... [none for now]

    var submission = retrieveNGOSubmission(storyKey);

    var result = {};
    result[module.exports.HOOK_KEY] = submission[module.exports.HOOK_KEY];
    result[module.exports.HOOK_IMAGE_PATH_KEY] = submission[module.exports.HOOK_IMAGE_PATH_KEY];

    res.send(result);
});

module.exports = router;
