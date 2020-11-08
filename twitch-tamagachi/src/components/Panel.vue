<template>
  <v-card class="pa-0" height="500" width="300">
    <v-row>
      <stat-banner
        :attack="attack"
        :shield="shield"
        :focus="focus"
        :jump="jump"
      />
    </v-row>
    <v-overlay absolute opacity="0">
      <div class="d-flex fill-height" style="flex-direction: column">
        <v-spacer></v-spacer>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <div class="pa-0">
            <upgrade-button
              @upgrade="onUpgrade"
            />
          </div>
        </div>
      </div>
    </v-overlay>
  </v-card>
</template>

<script>
import BackendApi from "../services/backend.js";
import StatBanner from "../components/StatBanner.vue";
import UpgradeButton from "../components/UpgradeButton.vue";

export default {
  name: "Panel",
  components: {
    UpgradeButton,
    StatBanner,
  },
  mixins: [],
  data() {
    return {
      attack: 0,
      shield: 0,
      focus: 0,
      jump: 0,
      spend: 0,
    };
  },
  computed: {},
  mounted() {
    this.updatePoints();
  },
  methods: {
    onUpgrade({ attribute, type }) {
      BackendApi.upgrade(
        window.Twitch.ext.viewer.id,
        window.channelId,
        attribute,
        type,
        window.authToken
      ).then((data) => {
        this.attack = data.attack_stat;
        this.shield = data.shield_stat;
        this.focus = data.focus_stat;
        this.jump = data.jump_stat;
        console.log(data);
      });
    },

    updatePoints() {
      BackendApi.updatePoints(
        window.Twitch.ext.viewer.id,
        window.channelId,
        window.authToken
      ).then(data => {
        this.attack = data.attack_stat;
        this.shield = data.shield_stat;
        this.focus = data.focus_stat;
        this.jump = data.jump_stat;
        console.log(data);
      });
    },
  },
  created() {
    setInterval(() => {
      this.updatePoints();
    }, 30000);
  },
};
</script>

<style>
  .v-overlay__content {
    height: 100%;
    width: 100%;
  }
</style>
