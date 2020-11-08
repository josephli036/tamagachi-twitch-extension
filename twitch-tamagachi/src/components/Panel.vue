<template>
  <v-card class="pa-0" height="500">
    <v-container py-0>
      <v-row>
        <v-col class="pa-0" cols="5" offset="7">
          <upgrade-options @upgrade="onUpgrade"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import BackendApi from "../services/backend.js";
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
  methods: {
    onUpgrade({attribute, type}) {
      BackendApi.upgrade(window.Twitch.ext.viewer.id, window.channelId, attribute, type, window.authToken).then(data => {
        console.log(data);
      });
    },

    updatePoints() {
      setInterval(() => {
        BackendApi.updatePoints(window.Twitch.ext.viewer.id, window.channelId, window.authToken)
      }, 10000)
    }
  },
  created () {
    this.updatePoints()
  }
};
</script>
