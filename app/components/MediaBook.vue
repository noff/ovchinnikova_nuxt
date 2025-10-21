<template>
  <h3><a :href="url" target="_blank">«{{ title }}»</a></h3>
  <p>{{ details }}</p>
  <div><a :href="url" target="_blank" class="btn btn-primary">{{ action }}</a></div>
  <hr class="my-5">
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String,
  details: String,
  action: String
})
</script>