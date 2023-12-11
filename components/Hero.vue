<template>
  <header>
    <div class="videos">
      <div class="video">
        <video src="/videos/cctv3.mp4" muted autoplay loop />
      </div>
      <div class="video">
        <video src="/videos/cctv1.mp4" muted autoplay loop />
      </div>
      <div class="video">
        <video src="/videos/cctv2.mp4" muted autoplay loop />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  overflow: hidden;
  padding: 2rem;
}

.video {
  video {
    display: block;
    width: 100%;
    mix-blend-mode: screen;
    border-radius: 2rem;
    opacity: .75;
  }
}
</style>