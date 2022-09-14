<template>
  <v-main>
    <page-bar />
    <router-view></router-view>
    <page-footer />
  </v-main>
</template>
<script>
import PageFooter from "@/components/PageFooter.vue";
import PageBar from "@/components/PageBar.vue";
export default {
  data: () => ({}),
  components: { PageFooter, PageBar },
};
</script>
