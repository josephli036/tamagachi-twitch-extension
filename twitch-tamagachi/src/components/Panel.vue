<template>
  <v-card class="pa-0" height="500" width="300">
    <v-row no-gutters>
      <point-display :points="points"/>
    </v-row>
    <v-row no-gutters>
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
    <point-counter :value="counter"/>
  </v-card>
</template>

<script>
import BackendApi from "../services/backend.js";
import StatBanner from "../components/StatBanner.vue";
import UpgradeButton from "../components/UpgradeButton.vue";
import PointDisplay from "../components/PointDisplay.vue";
import PointCounter from "../components/PointCounter.vue";

export default {
  name: "Panel",
  components: {
    UpgradeButton,
    StatBanner,
    PointDisplay,
    PointCounter,
  },
  mixins: [],
  data() {
    return {
      attack: "1",
      shield: "2",
      focus: "3",
      jump: "4",
      spend: "0",
      points: "0",
      counter: "0"
    };
  },
  computed: {},
  mounted() {
    this.updatePoints();
  },
  methods: {
    onUpgrade({ attribute, type }) {
      const instance = this;
      BackendApi.upgrade(
        window.Twitch.ext.viewer.id,
        window.channelId,
        attribute,
        type,
        window.authToken
      ).then((data) => {
        instance.attack = String(data.attack_stat);
        instance.shield = String(data.shield_stat);
        instance.focus = String(data.focus_stat);
        instance.jump = String(data.jump_stat);
        instance.points = String(data.points_to_spend);
        console.log(data);
      });
    },

    updatePoints() {
      const instance = this;
      BackendApi.updatePoints(
        window.Twitch.ext.viewer.id,
        window.channelId,
        window.authToken
      ).then(data => {
        instance.attack = String(data.attack_stat);
        instance.shield = String(data.shield_stat);
        instance.focus = String(data.focus_stat);
        instance.jump = String(data.jump_stat);
        instance.points = String(data.points_to_spend);
        instance.counter = "0";
        console.log(data);
      });
    },
  },
  created() {
    const instance = this;
    setInterval(() => {
      instance.updatePoints();
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
