<script setup lang="ts">

import { nextTick, onMounted, ref } from 'vue';
import postDify from './core/dify';
import getBookmarks from './core/bookmarks';
import { useHomeStore } from './store/homeStore';

const homeStore = useHomeStore();

const text = ref();

const bookmarks = ref()

onMounted(async () => {
  await nextTick();

  let res = await postDify();

  bookmarks.value = getBookmarks();

  console.log(homeStore, bookmarks.value, res)
  text.value = res.data.data.outputs.text;
})

</script>

<template>
  <header>
    <nav id="Mode">
      <input type="radio" id="default" value="default" name="mode" checked></input>
      <label for="default" class="mode">Default</label>
      <input type="radio" id="function" value="function" name="mode"></input>
      <label for="function" class="mode">Function</label>
    </nav>
  </header>
  <section>
    <main>
      <div id="done" class="button icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
        </svg>
      </div>
    </main>
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
  display: flex;
}

nav input:checked+.mode {
  color: cornflowerblue !important;
  border: 1px solid cornflowerblue !important;
}

nav .mode {
  width: 6rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid rgb(178, 178, 178);
  transition: all .3s;
  margin: 0 .25rem;
}

nav .mode:hover {
  color: rgba(100, 148, 237, 0.8) !important;
  border: 1px solid rgba(100, 148, 237, 0.8) !important;
}

main .button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 2rem;
  height: 2rem;
  cursor: pointer;
}

main .button:hover {
  background-color: rgb(42, 42, 42);
}


main .icon svg {
  color: white;
  width: 1.5rem;
  height: 1.5rem;
}
</style>
