<template>
  <div class="default">
    <!-- <headerComp /> -->
    <div class="main-container">
      <slot />
    </div>
    <!-- <footerComp /> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import footerComp from './footer.vue'
// import headerComp from './header.vue'

export default defineComponent({
  name: "DefaultLayout",
  components: {
    // footerComp,
    // headerComp
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.default {
  @apply min-h-screen;
  .main-container {
    @apply mx-auto w-full flex overflow-y-auto;
    max-width: 1920px;
  }
}
</style>
