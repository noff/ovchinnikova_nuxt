<template>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ title }}</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Главная</a></li>
              <li class="breadcrumb-item" v-if="!!secondLabel && !!secondUrl"><a :href="secondUrl">{{ secondLabel }}</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  secondUrl: String,
  secondLabel: String,
})
</script>