import { getActiveTabURL } from "./utils.js";

const showEditModal = (bookmark) => {
  const editModal = document.getElementById("editModal");
  const editNoteText = document.getElementById("editNoteText");

  // Set the textarea value to the existing note text
  editNoteText.value = bookmark.desc;

  //  show modal
  editModal.style.display = "block";

  // add eventlistens to save the edited notes
  document.getElementById("saveEditNote").onclick = () => {
    saveEditedNote(bookmark, editNoteText.value);
  };
  // event listenser o close the modal on clic x button
  document.getElementById("editModalClose").onclick = () => {
    editModal.style.display = "none";
  };
};

const saveEditedNote = async (bookmark, editedText) => {
  bookmark.desc = editedText;

  // save bookmark edited to storage
  const activeTab = await getActiveTabURL();
  const currentVideo = new URLSearchParams(activeTab.url.split("?")[1]).get(
    "v"
  );

  chrome.storage.sync.get([currentVideo], (data) => {
    let currentBookmarks = data[currentVideo]
      ? JSON.parse(data[currentVideo])
      : [];

    for (let i = 0; i < currentBookmarks.length; i++) {
      if (currentBookmarks[i].time === bookmark.time) {
        currentBookmarks[i].desc = editedText;
        break;
      }
    }

    // update stored bookmark with new note
    chrome.storage.sync.set(
      { [currentVideo]: JSON.stringify(currentBookmarks) },
      () => {
        console.log("Bookmark note updated");
      }
    );

    // refresh the bookmark view
    viewBookmarks(currentBookmarks);

    // hide the modal
    document.getElementById("editModal").style.display = "none";
  });
};

const showFullNote = (bookmarkNoteElement, note) => {
  const fullNote = document.createElement("div");
  fullNote.innerHTML = note;
  fullNote.className = "full-note";
  fullNote.style.display = "none";
  bookmarkNoteElement.appendChild(fullNote);

  bookmarkNoteElement.addEventListener("click", () => {
    if (fullNote.style.display === "none") {
      fullNote.style.display = "block";
    } else {
      fullNote.style.display = "none";
    }
  });
};

const addNewBookmark = (bookmarks, bookmark) => {
  const bookmarkTitleElement = document.createElement("div");
  const controlsElement = document.createElement("div");
  const newBookmarkElement = document.createElement("div");
  const bookmarkNoteElement = document.createElement("div");

  bookmarkTitleElement.textContent = bookmark.desc;
  bookmarkTitleElement.className = "bookmark-title";
  controlsElement.className = "bookmark-controls";
  bookmarkNoteElement.textContent = bookmark.desc;
  bookmarkNoteElement.className = "bookmark-note";

  showFullNote(bookmarkNoteElement, bookmark.desc);

  setBookmarkAttributes("play", onPlay, controlsElement);
  setBookmarkAttributes("delete", onDelete, controlsElement);
  setBookmarkAttributes("edit", onEdit, controlsElement);

  newBookmarkElement.id = "bookmark-" + bookmark.time;
  newBookmarkElement.className = "bookmark";
  newBookmarkElement.setAttribute("timestamp", bookmark.time);

  newBookmarkElement.appendChild(bookmarkTitleElement);
  newBookmarkElement.appendChild(controlsElement);
  bookmarks.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentBookmarks = []) => {
  const bookmarksElement = document.getElementById("bookmarks");
  bookmarksElement.innerHTML = "";

  // deleteAll
  if (currentBookmarks.length >= 2) {
    const deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "Delete all";
    deleteAllButton.id = "delere-all";
    deleteAllButton.className = "delete-all-button";
    bookmarksElement.appendChild(deleteAllButton);

    deleteAllButton.addEventListener("click", onDeleteAll);
  }

  if (currentBookmarks.length > 0) {
    for (let i = 0; i < currentBookmarks.length; i++) {
      const bookmark = currentBookmarks[i];
      addNewBookmark(bookmarksElement, bookmark);
    }
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }

  return;
};

const onPlay = async (e) => {
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const activeTab = await getActiveTabURL();

  chrome.tabs.sendMessage(activeTab.id, {
    type: "PLAY",
    value: bookmarkTime,
  });
};

const onDelete = async (e) => {
  const activeTab = await getActiveTabURL();
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const bookmarkElementToDelete = document.getElementById(
    "bookmark-" + bookmarkTime
  );

  bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);

  chrome.tabs.sendMessage(
    activeTab.id,
    {
      type: "DELETE",
      value: bookmarkTime,
    },
    viewBookmarks
  );
};

const onEdit = async (e) => {
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const activeTab = await getActiveTabURL();
  const currentVideo = new URLSearchParams(activeTab.url.split("?")[1]).get(
    "v"
  );

  chrome.storage.sync.get([currentVideo], (data) => {
    let currentBookmarks = data[currentVideo]
      ? JSON.parse(data[currentVideo])
      : [];

    const bookmarkToEdit = currentBookmarks.find(
      (bookmark) => bookmark.time === parseFloat(bookmarkTime)
    );

    if (bookmarkToEdit) {
      showEditModal(bookmarkToEdit);
    }
  });
};

const onDeleteAll = async () => {
  const activeTab = await getActiveTabURL();
  const currentVideo = new URLSearchParams(activeTab.url.split("?")[1]).get(
    "v"
  );

  // clear all
  chrome.storage.sync.set({ [currentVideo]: JSON.stringify([]) }, () => {
    console.log("all bookmarks deleted");
  });
  viewBookmarks([]);
};

const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
  const controlElement = document.createElement("img");

  controlElement.src = "assets/" + src + ".png";
  controlElement.title = src;
  controlElement.addEventListener("click", eventListener);
  controlParentElement.appendChild(controlElement);
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  const queryParameters = activeTab.url.split("?")[1];
  const urlParameters = new URLSearchParams(queryParameters);

  const currentVideo = urlParameters.get("v");

  if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
    chrome.storage.sync.get([currentVideo], (data) => {
      const currentVideoBookmarks = data[currentVideo]
        ? JSON.parse(data[currentVideo])
        : [];

      viewBookmarks(currentVideoBookmarks);
    });
  } else {
    const container = document.getElementsByClassName("container")[0];

    container.innerHTML =
      '<div class="title">This is not a youtube video page.</div>';
  }
});
