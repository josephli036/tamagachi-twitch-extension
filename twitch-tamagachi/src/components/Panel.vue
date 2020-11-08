<template>
  <v-container pa-0>
    <v-card class="pa-0" height="500" width="320" color="#f7f7f7">
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
      <upgrade-button @upgrade="onUpgrade"/>
      <point-counter ref="pcounter"/>
      <leaderboard-button @leaderboardClick="openLeaderboard" />
      <v-fade-transition>
        <loading-overlay v-if="loading" />
      </v-fade-transition>
    </v-card>
    <v-dialog
      v-model="leaderboardDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <leaderboard ref="leaderboard" @leaderboardClose="leaderboardDialog=false" />
    </v-dialog>
  </v-container>
</template>

<script>
import BackendApi from "../services/backend.js";
import StatBanner from "../components/StatBanner.vue";
import UpgradeButton from "../components/UpgradeButton.vue";
import PointDisplay from "../components/PointDisplay.vue";
import PointCounter from "../components/PointCounter.vue";
import Leaderboard from "../components/Leaderboard.vue";
import LeaderboardButton from "../components/LeaderboardButton.vue";
import LoadingOverlay from "../components/LoadingOverlay.vue";

export default {
  name: "Panel",
  components: {
    UpgradeButton,
    StatBanner,
    PointDisplay,
    PointCounter,
    Leaderboard,
    LeaderboardButton,
    LoadingOverlay,
  },
  mixins: [],
  data() {
    return {
      loading: true,
      leaderboardDialog: false,
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
    setTimeout(() => {
        this.getPoints();
      }, 1000
    );
    setTimeout(() => {
        this.loading = false;
      }, 2000
    );
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
        instance.updateData(data);
      });
    },

    getPoints() {
      const instance = this;
      BackendApi.updatePoints(
        window.Twitch.ext.viewer.id,
        window.channelId,
        window.authToken
      ).then(data => {
        instance.updateData(data);
        instance.resetCounter();
      });
    },

    updateData(data) {
      const instance = this;
      instance.attack = String(data.attack_stat);
      instance.shield = String(data.shield_stat);
      instance.focus = String(data.focus_stat);
      instance.jump = String(data.jump_stat);
      instance.points = String(data.points_to_spend);
    },

    resetCounter() {
      this.$refs.pcounter.counter = "0";
    },

    openLeaderboard() {
      this.leaderboardDialog = true;
      if ('leaderboard' in this.$refs){
        this.$refs.leaderboard.getData();
      }
    },
  },
  created() {
    const instance = this;
    setInterval(() => {
      instance.getPoints();
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
