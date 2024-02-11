//this page will work on context of youtube page like add timestamp button
// this page will listen to the content comming from background.js

(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentBookmarks = [];
  let bokmarkButtonAdded = false;

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    // this will give the respnse to background.js
    const { type, value, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    } else if (type === "PLAY") {
      youtubePlayer.currentTime = value;
    } else if (type === "DELETE") {
      currentBookmarks = currentBookmarks.filter((b) => b.time != value);
      chrome.storage.sync.set({
        [currentVideo]: JSON.stringify(currentBookmarks),
      });

      response(currentBookmarks);
    }
  });

  const fetchBookmarks = () => {
    return new Promise((resolve) => {
      if (chrome.runtime && !chrome.runtime.lastError) {
        chrome.storage.sync.get([currentVideo], (obj) => {
          resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
        });
      } else {
        console.error("Extension context invalidated.");
        resolve([]);
      }
    });
  };

  // bookmarkbutton creation

  const newVideoLoaded = async () => {
    const bookmarkbtnExists =
      document.getElementsByClassName("bookmark-btn")[0];
    currentBookmarks = await fetchBookmarks();
    console.log(bookmarkbtnExists);

    if (!bookmarkbtnExists && !bokmarkButtonAdded) {
      const bookmarkbtn = document.createElement("img");
      bookmarkbtn.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkbtn.className = "ytp-button" + "bookmark-btn";
      bookmarkbtn.title = "click to bookmark current timestamp";

      youtubeLeftControls =
        document.getElementsByClassName("ytp-left-controls")[0];
      youtubePlayer = document.getElementsByClassName("video-stream")[0];

      youtubeLeftControls.appendChild(bookmarkbtn);
      bookmarkbtn.addEventListener("click", addNewBookmarkHandler);
      bokmarkButtonAdded = true;
    }
  };
  newVideoLoaded();

  const addNewBookmarkHandler = async () => {
    const currentTime = youtubePlayer.currentTime;
    const newBookmark = {
      time: currentTime,
      desc: "Bookmark at " + getTime(currentTime),
    };
    console.log(newBookmark);

    currentBookmarks = await fetchBookmarks();

    // add to chrome storage
    // currentBookmarks.push(newBookmark);
    chrome.storage.sync.set({
      [currentVideo]: JSON.stringify(
        [...currentBookmarks, newBookmark].sort((a, b) => a.time - b.time)
      ),
    });
  };
})();

const getTime = (t) => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substring(11, 19);
};
