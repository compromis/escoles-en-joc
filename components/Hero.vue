<script setup>
const prefersReducedMotion = useState('prefersReducedMotion')

onMounted(() => {
  if (prefersReducedMotion.value) {
    pauseVideos()
  }
})

watch(prefersReducedMotion, (reduced) => {
  if (reduced) {
    pauseVideos()
  } else {
    playVideos()
  }
})

const video1 = ref(null)
const video2 = ref(null)
const video3 = ref(null)
function pauseVideos() {
  video1.value.pause()
  video2.value.pause()
  video3.value.pause()
}

function playVideos() {
  video1.value.play()
  video2.value.play()
  video3.value.play()
}
</script>

<template>
  <header>
    <div class="videos">
      <div class="video video-1">
        <video src="/videos/cctv3.mp4" muted autoplay loop ref="video1" />
      </div>
      <div class="video video-2">
        <video src="/videos/cctv1.mp4" muted autoplay loop ref="video2" />
      </div>
      <div class="video video-3 d-none d-md-block">
        <video src="/videos/cctv2.mp4" muted autoplay loop ref="video3" />
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
  padding: 1rem;
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

@include media-breakpoint-up(md) {
  .videos {
    margin-bottom: 2rem;
  }
}

@include media-breakpoint-down(md) {
  .videos {
    grid-template-columns: 1fr;
    margin-top: -8rem;
    margin-bottom: 1rem;
    padding: .5rem;
    gap: 1.5rem;
  }
  
  .video video {
    border-radius: 1rem;
  }
}
</style>