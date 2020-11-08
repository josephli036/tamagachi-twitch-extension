<template>
  <v-card class="pa-0" height="500" width="300">
    <v-overlay
      absolute
      opacity=0
    >
      <div class="d-flex fill-height" style="flex-direction:column">
        <v-spacer></v-spacer>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <div class="pa-0"><upgrade /></div>
        </div>
      </div>

    </v-overlay>
  </v-card>
</template>

<script>
import BackendApi from "../services/backend.js";
// import UpgradeOptions from "../components/UpgradeOptions.vue";
// import UpgradeButton from "../components/UpgradeButton.vue";
import Upgrade from "../components/Upgrade.vue"

export default {
  name: "Panel",
  components: {
    Upgrade,
  },
  mixins: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    onUpgrade({attribute, type}) {
      BackendApi.upgrade(window.Twitch.ext.viewer.id, window.channelId, attribute, type, window.authToken).then(data => {
        console.log(data);
      });
    },

    updatePoints() {
      setInterval(() => {
        BackendApi.updatePoints(window.Twitch.ext.viewer.id, window.channelId, window.authToken)
      }, 30000)
    }
  },
  created () {
    this.updatePoints()
  }
};
</script>

<style>
  .v-overlay__content {
    height: 100%;
    width: 100%;
  }
</style>
