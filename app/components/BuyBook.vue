<template>
  <div class="d-flex justify-content-between py-2">
    <a :href="url" target="_blank">{{ shop }}</a>
    <span class="fw-bold" v-if="price">{{ price }} ₽</span>
  </div>
</template>

<script setup>
const props = defineProps({
  price: String,
  shop: String,
  url: String,
})
</script>