/*
module.exports.TITLE_KEY = "TITLE_KEY";
module.exports.HOOK_KEY = "HOOK_KEY";
module.exports.TRAFFIC_STATS_KEY = "TRAFFIC_STATS_KEY";
module.exports.DEATH_STATS_KEY = "DEATH_STATS_KEYS";
module.exports.GLOBAL_SAVED_KEY = "GLOBAL_SAVED_KEY";
module.exports.CLOSING_KEY = "CLOSING_KEY";
module.exports.URLS_KEY = "URLS_KEY";
module.exports.HOOK_IMAGE_PATH_KEY = "HOOK_IMAGE_PATH_KEY";
 */

require("database/database.js");

var submission = {
    "TITLE_KEY": "Macaws"
    "HOOK_KEY": "Here's some of the reasons why you should be alarmed by the decline in the Macaw populations across the globe",
    "TRAFFIC_STATS_KEY": null,
    "DEATH_STATS_KEYS", null,
    "GLOBAL_SAVED_KEY", null,
    "CLOSING_KEY": "In conclusion, here's our conclusion",
    "URLS_KEY": [
        "https://www.ebay.com/itm/Large-Hand-Carved-Wood-Majestic-Elephant-Sculpture-With-Tusks-Beautiful-Vintage/142939752110?hash=item2147df86ae:g:U0gAAOSwPSRbiq1Q"
    ]
};

function submitTestData() {
    var storykey = storeNGOSubmission(submission);
    return storykey;
}

submitTestData();