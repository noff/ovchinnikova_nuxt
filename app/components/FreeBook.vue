<template>
  <h3><a :href="url" target="_blank">«{{ title }}»</a></h3>
  <p>{{ details }}</p>
  <hr class="my-5">
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String,
  details: String,
})
</script>