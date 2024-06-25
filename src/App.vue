<template>
  <div id="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Минимальная высота, чтобы контейнер растягивался на всю высоту окна */
}

/* Важно, чтобы у router-view была flex-grow: 1, чтобы занимать оставшееся пространство */
router-view {
  flex-grow: 1;
}

/* Остальные стили остаются без изменений */
</style>
