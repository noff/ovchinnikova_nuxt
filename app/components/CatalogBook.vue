<template>
  <div class="col">
    <div>
      <a :href="url">
        <img :src="cover" :alt="title" class="img-fluid book-img mb-4" />
      </a>
    </div>
    <div>
      <h3><a :href="url">{{ title }}</a></h3>
      <div v-if="!!type">{{ type }}</div>
      <div class="text-muted small" v-if="!!publisher || !!year">
        <span v-if="publisher">
          {{ publisher }}
          <span v-if="!!year">{{ year }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String,
  cover: String,
  year: String,
  type: String,
  publisher: String,
})
</script>