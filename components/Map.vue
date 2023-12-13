<script setup>
import BTabList from '@compromis/blobby/components/tab/BTabList.vue'
import BTab from '@compromis/blobby/components/tab/BTab.vue'

const city = ref('vlc')
</script>

<template>
  <section class="map container dark">
    <div class="text text-map">
      <h2 v-motion-fade-visible>Mapa de...</h2>
      <p v-motion-fade-visible>Lorem ipsum</p>
      <BTabList class="cities" outline>
        <BTab :selected="city == 'vlc'" @click="city = 'vlc'">València</BTab>
        <BTab :selected="city == 'alc'" @click="city = 'alc'">Alacant / Elx</BTab>
        <BTab :selected="city == 'cas'" @click="city = 'cas'">Castelló</BTab>
      </BTabList>
    </div>
    <iframe
      v-if="city == 'vlc'"
      key="vlc"
      src="https://www.google.com/maps/d/embed?mid=1l1gfLCTJU945Tra6nO-bOXD37GOh6Fo&ehbc=2E312F"
      width="640"
      height="480"
      class="map-embed" />
    <iframe
      v-else-if="city == 'alc'"
      key="alc"
      src="https://www.google.com/maps/d/embed?mid=1xrt3RSwsCegSwyyreuX_2PKdFXMNjSI&ehbc=2E312F"
      width="640"
      height="480"
      class="map-embed" />
    <iframe
      v-else-if="city == 'cas'"
      key="cas"
      src="https://www.google.com/maps/d/embed?mid=1hTGP5irqI4DtOwq-qvX9NiLvJER-ogg&ehbc=2E312F"
      width="640"
      height="480"
      class="map-embed" />
  </section>
</template>

<style lang="scss" scoped>
  .map {
    padding: 1rem;
    margin-top: 8rem;

    &-embed {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      aspect-ratio: 4 / 2.5;
    }
  }

  .text-map {
    max-width: var(--text-container);
    margin: 0 auto;

    h2 {
      font-size: var(--text-xl);
    }
  }

  .cities {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
</style>