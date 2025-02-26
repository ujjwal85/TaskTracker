<template>
  <div id="app">
    <Watermark />
    <ErrorPopup />
    <router-view />
  </div>
</template>

<script>
import Watermark from '@/components/Watermark.vue'
import ErrorPopup from './components/ErrorPopup.vue'

export default {
  components: { Watermark, ErrorPopup },
}
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
}
::-webkit-scrollbar {
  width: 7px;
  display: none;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(61, 61, 61);
}
</style>
