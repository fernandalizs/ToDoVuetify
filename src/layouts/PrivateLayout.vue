<template>
  <div>
    <v-main class="pa-16 mb-16">
      <page-bar />
      <router-view></router-view>
    </v-main>
    <page-footer />
  </div>
</template>
<script>
import PageFooter from "@/components/PageFooter.vue";
import PageBar from "@/components/PageBar.vue";
export default {
  data: () => ({}),
  components: { PageFooter, PageBar },
};
</script>
