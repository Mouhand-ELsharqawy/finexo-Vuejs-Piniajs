<template>
  <header-component />
  <router-view/>
  <footer-component />
</template>
<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: { HeaderComponent, FooterComponent },
}
</script>
<style>
  @import url('./assets/css/style.css');
  @import url('./assets/css/responsive.css');
</style>
