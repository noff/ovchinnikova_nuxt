<template>
  <section>
    <PageTitle title="Читать бесплатно" />

    <div class="container">
      <div class="row">
        <div class="col">
          <p class="lead">Список текстов, которые можно прочитать легально бесплатно:</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <hr class="mb-5">
          <FreeBook url="http://kniguru.info/korotkiy-spisok-sedmogo-sezona/4770-2"
                    title="Рассказы"
                    details="Часть рассказов из сборника «Мортал комбат и другие 90-е» в списке финалистов на сайте конкурса «Книгуру»."
          />
          <FreeBook url="http://kniguru.info/korotkiy-spisok-vosmogo-sezona/idi-i-vozvrashhaysya"
                    title="Иди и возвращайся"
                    details="Детективный триллер. В списке финалистов на сайте конкурса «Книгуру»."
          />
          <FreeBook url="http://kniguru.info/korotkiy-spisok-devyatogo-sezona/magiya-zero"
                    title="Магия Зеро"
                    details="Приключения, детектив. Продолжение «Иди и возвращайся», читается как самостоятельное произведение. В списке финалистов на сайте конкурса «Книгуру»."
          />
          <FreeBook url="https://newstyle-mag.com/new-style-story-november-2019/"
                    title="Монолог вампира"
                    details="Рассказ. Финалист премии имени Дмитрия Горчева. Журнал New Style."
          />
          <FreeBook url="https://prochtenie.ru/experiments/14972"
                    title="Немного о священных крокодилах"
                    details="Рассказ. Онлайн-журнал «Прочтение»."
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Читать бесплатно – Евгения Овчинникова, писательница',
  meta: [
    { name: 'description', content: 'Список текстов, которые можно прочитать легально бесплатно.' },
  ],
})
</script>