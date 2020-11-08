<template>
  <v-card class="pa-0" height="500" width="300">
    <v-container>
      <v-row>
        <!-- put stat banner here -->
      </v-row>
      <v-overlay
        absolute
        opacity=0
      >
        <div class="d-flex fill-height" style="flex-direction:column">
          <v-spacer></v-spacer>
          <div class="d-flex">
            <v-spacer></v-spacer>
            <div class="pa-0"><upgrade-button /></div>
          </div>
        </div>

      </v-overlay>
    </v-container>
  </v-card>
</template>

<script>
import BackendApi from "../services/backend.js";
// import StatBanner from "../components/StatBanner.vue";
import UpgradeButton from "../components/UpgradeButton.vue";

export default {
  name: "Panel",
  components: {
    UpgradeButton,
    // StatBanner,
  },
  mixins: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    onUpgrade({attribute, type}) {
      BackendApi.upgrade(window.Twitch.ext.viewer.idd, window.channelId, attribute, type, window.authToken).then(data => {
        console.log(data);
      });
    },
  },
};
</script>

<style>
  .v-overlay__content {
    height: 100%;
    width: 100%;
  }
</style>
