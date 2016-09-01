chrome.browserAction.onClicked.addListener(function(tab) { run()});
function run(){
  chrome.tabs.executeScript(null,{file:"script.js"});
}
