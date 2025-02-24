<template>
  <div class="watermark">
    <img src="/src/assets/logo.jpg" alt="Watermark Image" />
  </div>
</template>

<style scoped>
.watermark {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
  opacity: 0.3;
}

.watermark img {
  width: 200px;
  height: auto;
  user-select: none;
}
</style>
