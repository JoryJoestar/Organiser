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

  console.log(bookmarks, res)
  text.value = res.data.data.outputs.text;
})

</script>

<template>
  <div class="main">
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
#post {
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;

}
</style>
