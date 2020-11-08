<template>
  <v-card class="pa-0" height="500">
    <v-container py-0>
      <v-row>
        <v-col class="pa-0" cols="5" offset="7">
          <upgrade-options />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import UpgradeOptions from "../components/UpgradeOptions.vue";

export default {
  name: "Panel",
  components: {
    UpgradeOptions,
  },
  mixins: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
