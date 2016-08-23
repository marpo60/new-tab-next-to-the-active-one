chrome.commands.onCommand.addListener(function(command) {
  chrome.windows.getLastFocused(null, function(w) {
    chrome.tabs.query({ active: true, windowId: w.id }, function(tabs) {
      const tab = tabs[0];
      chrome.tabs.create({ url: "chrome://newtab/", windowId: w.id, index: tab.index + 1 });
    });
  });
});
