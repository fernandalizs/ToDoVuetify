<template>
  <div>
    <v-main>
      <router-view></router-view>
    </v-main>
    <page-footer />
  </div>
</template>
<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  data: () => ({}),
  components: { PageFooter },
};
</script>
