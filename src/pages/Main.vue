<template>
  <div class="page">
    <div class="page__container main-container" ondrag="return false" ondragdrop="return false" ondragstart="return false">
      <div class="page__button">
        <router-link to="/scheme" ondrag="return false" ondragdrop="return false" ondragstart="return false" class="button">
        Схема
        </router-link>

        <router-link to="/program" ondrag="return false" ondragdrop="return false" ondragstart="return false" class="button">
          Программа
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>


