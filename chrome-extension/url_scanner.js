let redirect = document.getElementById('redirect');
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  
  //here we read the current url that the user is on
  var link = tabs[0].url;
  console.log('current url is: '+link);

  //here we see what link we are going to
  link = 'localhost:3001';
  console.log('redirecting to: '+link);
  chrome.tabs.update({url:link});
});
