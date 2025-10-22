<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="~/assets/images/logo/eo-logo-color.svg" alt="Евгения Овчинникова, писатель" class="py-3 me-5" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Показать меню">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item me-xl-3">
            <a class="nav-link text-uppercase" aria-current="page" href="/about">Обо мне</a>
          </li>
          <li class="nav-item me-xl-3">
            <a class="nav-link text-uppercase" aria-current="page" href="/books">Книги</a>
          </li>
          <li class="nav-item me-xl-3">
            <a class="nav-link text-uppercase" aria-current="page" href="/librarians">Библиотекарям и учителям</a>
          </li>
          <li class="nav-item me-xl-3">
            <a class="nav-link text-uppercase" aria-current="page" href="/read_free">Бесплатно</a>
          </li>
          <li class="nav-item me-xl-3">
            <a class="nav-link text-uppercase" aria-current="page" href="/audio_video">Аудио и ТВ</a>
          </li>
          <li class="nav-item me-xl-3">
            <a class="nav-link text-uppercase" aria-current="page" href="/contacts">Контакты</a>
          </li>
        </ul>
        <div>
          <a href="https://t.me/pisatel_ovchinnikova" target="_blank">
            <img src="~/assets/images/icons/social/tg.svg" alt="Я в Telegram" class="social-icon" />
          </a>
          <a href="https://vk.com/eugenia_ovchinnikova" target="_blank" class="ms-2">
            <img src="~/assets/images/icons/social/vk.svg" alt="Я в VK" class="social-icon" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>