<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
</script>

<template>
  <div>
    <BNav>
      <BNavItem to="/">Castellano</BNavItem>
      <template #logo-append>Escoles en joc</template>
    </BNav>

    <slot />
    <div class="container footer">
      <BFooter variant="dark" />
    </div>
  </div>
</template>

<style lang="scss">
.nav-logo-append {
  margin-left: 1rem;
}

.nav-padding {
  display: none;
}

.footer {
  color: var(--white);
  padding: 1rem;
}
</style>