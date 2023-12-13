<template>
  <section class="map">
    <div class="text text-map">
      <h2 v-motion-fade-visible>Mapa de...</h2>
      <p v-motion-fade-visible>Lorem ipsum</p>
    </div>
    <iframe src="https://www.google.com/maps/d/embed?mid=1Ig-Ifb3eAkLRfNdDf7lIIbwBdTTQpag&ehbc=2E312F" width="640" height="480"></iframe>
  </section>
</template>

<style lang="scss" scoped>
  .map {
    padding: 1rem;
    margin-top: 8rem;
  }

  .text-map {
    max-width: var(--text-container);
    margin: 0 auto;
    margin-bottom: 4rem;

    h2 {
      font-size: var(--text-xl);
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    aspect-ratio: 16 / 6;
  }

  @media (max-aspect-ratio: 4 / 3.5) {
    iframe {
      aspect-ratio: 1 / 1;
    }
  }
</style>