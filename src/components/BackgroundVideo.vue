<template>
  <div
    class="video-container position-fixed fill-height w-100 overflow-hidden top-0 left-0"
  >
    <video autoplay loop muted class="background-video w-100 h-100">
      <source src="/video/login.mp4" type="video/mp4" />
    </video>
    <div class="video-shadow top-0 left-0 w-100 h-100 position-absolute"></div>
  </div>
</template>

<style scoped>
.background-video {
  object-fit: cover;
}

.video-shadow {
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
</style>
