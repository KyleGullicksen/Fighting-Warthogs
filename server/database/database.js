require('../constants/Constants');

var ghettoDatabase = {}; //Key: StoryKey
var urlToStoryKey = {}; //Key: URL
var counter = 0;

function getNextId() {
    counter++;
    return counter;
}

function associateStoryKeyToURLS(storyKey, urlList) {
    for(var i = 0; i < urlList.length; i++) {
        urlToStoryKey[i] = storyKey;
    }
}

module.exports.storeNGOSubmission = function(submission) {
    var storyKey = getNextId();

    associateStoryKeyToURLS(storyKey, submission[URLS_KEY]); //For reverse lookup

    //store the JSON object into memory
    ghettoDatabase[storyKey] = submission;
}

module.exports.retrieveNGOSubmission =  function(storyKey) {
    return ghettoDatabase[storyKey];

    //return an object representing all of the data in the submission
}
