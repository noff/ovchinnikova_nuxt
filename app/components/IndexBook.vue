<template>
  <div class="row py-4">
    <div class="col-md-4 text-center pe-6">
      <a :href="url">
        <img :src="cover" :alt="title" class="img-fluid book-img mb-4" />
      </a>
    </div>
    <div class="col-md-8">
      <h3><a :href="url">{{ title }}</a></h3>
      <p class="text-dark">{{ type }}</p>
      <div class="my-4">
        <slot />
      </div>
      <a :href="url" class="btn d-block d-md-inline-block btn-outline-primary btn-md">Подробнее →</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String,
  cover: String,
  year: String,
  type: String
})
</script>