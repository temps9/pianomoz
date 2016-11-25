/*
Open a new tab, and load "lecjo.html" into it.
*/
function pianomoza() {
   chrome.tabs.create({
     "url": chrome.extension.getURL("pianomoz.html")
   });
}


/*
Add lecjob() as a listener to clicks on the browser action.
*/
chrome.browserAction.onClicked.addListener(pianomoza);
 
