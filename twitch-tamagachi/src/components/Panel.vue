<template>
  <v-card class="pa-0" height="500" width="300">
    <v-container py-0>
      <v-row>
        <v-col class="pa-0" cols="5" offset="7">
          <upgrade-button />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import BackendApi from "../services/backend.js";
// import UpgradeOptions from "../components/UpgradeOptions.vue";
import UpgradeButton from "../components/UpgradeButton.vue";

export default {
  name: "Panel",
  components: {
    UpgradeButton,
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
