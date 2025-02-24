<template>
  <div id="app">
    <Watermark />
    <router-view />
  </div>
</template>

<script>
import Watermark from '@/components/Watermark.vue'

export default {
  components: { Watermark },
}
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
}
</style>
