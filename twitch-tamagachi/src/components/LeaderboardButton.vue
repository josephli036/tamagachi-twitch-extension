<template>
  <div class="d-flex leaderboard-button" style="flex-direction: column">
    <div class="d-flex">
      <v-btn
        tile
        color="primary"
        @click="$emit('leaderboardClick')"
      >
        <v-icon>
          mdi-poll
        </v-icon>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
  export default {
    name: "LeaderboardButton",
  }
</script>

<style>
.leaderboard-button {
  position:absolute;
  top:180px;
  right:0;
  z-index: 1;
}
</style>
