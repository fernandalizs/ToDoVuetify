<template>
  <v-main>
    <router-view></router-view>
    <page-footer />
  </v-main>
</template>
<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  data: () => ({}),
  components: { PageFooter },
};
</script>
