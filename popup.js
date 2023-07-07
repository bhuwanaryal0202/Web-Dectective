// Function to send a message to content script for extracting styling info
function extractStylingInfo() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: "extract_styling_info" });
  });
}

// Attach event listener to the pick button
document.getElementById("pickButton").addEventListener("click", extractStylingInfo);
