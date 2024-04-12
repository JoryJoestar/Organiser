<script setup lang="ts">

import { nextTick, onMounted, ref } from 'vue';
import postDify from './core/dify';
import getBookmarks from './core/bookmarks';

const text = ref();

const bookmarks = ref()

onMounted(async () => {
  await nextTick();

  let res = await postDify();

  bookmarks.value = getBookmarks();



  console.log(bookmarks.value, res)
  text.value = res.data.data.outputs.text;
})

</script>

<template>
  <header>
    <nav>
      <div id="history">历史</div>
    </nav>
  </header>
  <section>
    <main></main>
  </section>
  <footer>
    <div class="copyright"></div>
  </footer>
</template>

<style>
@import './assets/reset.css';

#app {
  margin: 0;
  padding: .5rem;
  text-align: start;
  width: 100vw;
  height: 100vh;
  font-size: 16px;
}

header nav {
  width: 100%;
}
</style>
