<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Евгения Овчинникова, писательница',
  meta: [
    { name: 'description', content: 'Пишу детективные триллеры' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Podkova:wght@400;500;600;700;800&display=swap'
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      type: 'image/png'
    }
  ],
  script: [
      {
        innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(85400275, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
        `
      },
  ],
  bodyAttrs: {
    class: 'h-100 m-0 d-flex flex-column min-vh-100'
  },
  htmlAttrs: {
    class: 'h-100 m-0'
  }
})
</script>