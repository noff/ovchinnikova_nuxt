<template>
  <div class="lead mb-2">{{ name }}</div>
  <blockquote>{{ text }}</blockquote>
  <div><a :href="url" target="_blank">Подробнее</a></div>
  <hr class="my-4">
</template>

<script setup>
const props = defineProps({
  name: String,
  text: String,
  url: String,
})
</script>