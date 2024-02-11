// this page will give us information whether the page you are on is youtube page or not
// i.e the active tab the user is on


export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
  
    return tabs[0];
}