import { ref } from "vue";

const bookmarks = ref()

// Get the bookmarks
chrome.bookmarks.getTree((tree) => {
  bookmarks.value = tree;
});


const getBookmarks = () => {
  return bookmarks.value ? bookmarks.value[0].children : null;
}

export default getBookmarks
