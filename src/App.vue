<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue';

const res = ref();

const text = ref();

const baseUrl = 'https://api.dify.ai/v1'

const apiKey = 'app-X92eXCLkI6Z5y1oEvhM7RVwW'

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
}

const data = {
  inputs: {
    website_url: 'https://www.baidu.com',
  },
  response_mode: 'blocking',
  user: 'workflow01',
  files: null
}

const postDify = async () => {
  res.value = await axios({
    method: 'post',
    url: `${baseUrl}/workflows/run`,
    headers: headers,
    data: data
  });

  text.value = res.value.data.data.outputs.text;
}

onMounted(async () => {
  await postDify();
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
