//allows user to enable and disable the preview of search links

// document.addEventListener('DOMContentLoaded', function() {
//   var switchButton = document.getElementById('switch');
//   switchButton.addEventListener('click', function() {
//   }, false);
// }, false);

var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.tabs.executeScript(tab.id, {file:"SCRIPT.user.js"});
  }
  else{
    chrome.tabs.executeScript(tab.id, {code:"alert()"});
  }
});