<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
</script>

<template>
  <div>
    <BNav>
      <BNavItem to="/">Castellano</BNavItem>
      <template #logo-append>Escoles en joc</template>
    </BNav>
    <slot />
  </div>
</template>

<style lang="scss">
body,
html {
  background: var(--gray-1000);
  color: var(--white);
}
</style>