import { ref } from "vue";
import bookmarksJSON from '../assets/bookmarks.json'

const bookmarks = ref()

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  bookmarks.value = bookmarksJSON.data
} else {
  // Get the bookmarks
  chrome.bookmarks.getTree((tree) => {
    bookmarks.value = tree;
  });

}


const getBookmarks = () => {
  return isDev ? bookmarks.value : bookmarks.value ? bookmarks.value[0].children : null;
}

export default getBookmarks
