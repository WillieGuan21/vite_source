<template>
  <div class="default">
    <headerComp />
    <div class="main-container flex flex-colbg-blue-200">
      <slot />
    </div>
    <footerComp />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import footerComp from './footer.vue'
  import headerComp from './header.vue'

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      footerComp,
      headerComp
    },
    setup() {
      return { };
    },
  });
</script>

<style lang="scss">
.default {
  @apply flex flex-col min-h-screen;
  .main-container {
    @apply mx-auto w-full overflow-y-auto;
    flex: 1 0 0;
    max-width: 1920px;
  }
}
</style>
