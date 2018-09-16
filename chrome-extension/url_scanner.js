let redirect = document.getElementById('redirect');

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  console.log('hell yeah!!!!!');
  if(tab.url.indexOf("horrible_poachers.com") > -1){ 
    //do things here 
    console.log('hell yeah');
    alert('HOLY FUCKING SHIT!!!!');
  }
});


chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

 chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {
  alert('OH SHIT!');
 
 });

  //here we read the current url that the user is on
  var link = tabs[0].url;
  console.log('current url is: '+link);
  alert('OH SHIT!');

  //here we see what link we are going to
  link = 'localhost:3001';
  console.log('redirecting to: '+link);
  chrome.tabs.executeScript(
    tabs[0].id,
    chrome.tabs.create({active: true, url:link}));
});
