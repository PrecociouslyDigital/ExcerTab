browser.webNavigation.onDOMContentLoaded.addListener(function(details){
	alert("triggered");
	if(details.timeStamp > nextTime){
		browser.tabs.executeScript(details.tabId, {file:"/excertab.js"});
		nextTime =details.timeStamp;
	}else{
		console.log("you're good");
	}
}