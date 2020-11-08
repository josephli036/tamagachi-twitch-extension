<template>
  <v-container pa-0>
    <v-card class="pa-0" height="500" width="320" color="#f7f7f7">
      <v-app-bar
        color="#6441A4"
        dense
        dark
      >
        <v-btn icon>
          <v-icon>mdi-poll</v-icon>
        </v-btn>

        <v-toolbar-title class="font-weight-bold h6">LeaderBoard</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="$emit('leaderboardClose')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="cyan"
      ></v-progress-linear>
      <v-expansion-panels v-model="panelModel" accordion flat hover multiple tile class="mb-6">
        <v-expansion-panel
          v-for="(item,i) in playerData"
          :key="i"
        >
          <v-expansion-panel-header :style="panelModel.includes(i) ? activeStyle : ''" disable-icon-rotate>
            {{ item.user_id }}
            <template v-slot:actions>
              {{ item.player_rank }}
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pb-0">
            <v-container py-0>
              <v-row class="py-1">
                <v-col class="pa-0" cols=2>
                  <v-chip
                    style="min-width: 47px"
                    color="deep-orange lighten-1"
                    text-color="white"
                    label
                  >
                    <v-icon>mdi-sword-cross</v-icon>
                  </v-chip>
                </v-col>
                <v-col class="py-1" cols=4>
                  <span class="stat-numbers">
                    {{ item.attack_stat }}
                  </span>
                </v-col>
                <v-col class="pa-0" cols=2>
                  <v-chip
                    style="min-width: 47px"
                    color="light-blue lighten-2"
                    text-color="white"
                    label
                  >
                    <v-avatar>
                      <v-icon>mdi-shield</v-icon>
                    </v-avatar>
                  </v-chip>
                </v-col>
                <v-col class="py-1" cols=4>
                  <span class="stat-numbers">
                    {{ item.shield_stat }}
                  </span>
                </v-col>
              </v-row>
              <v-row class="py-1">
                <v-col class="pa-0" cols=2>
                  <v-chip
                    style="min-width: 47px"
                    color="light-green lighten-2"
                    text-color="white"
                    label
                  >
                    <v-avatar>
                      <v-icon>mdi-brain</v-icon>
                    </v-avatar>
                  </v-chip>
                </v-col>
                <v-col class="py-1" cols=4>
                  <span class="stat-numbers">
                    {{ item.focus_stat }}
                  </span>
                </v-col>
                <v-col class="pa-0" cols=2>
                  <v-chip
                    style="min-width: 47px"
                    color="amber lighten-2"
                    text-color="white"
                    label
                  >
                    <v-avatar>
                      <v-icon>mdi-run-fast</v-icon>
                    </v-avatar>
                  </v-chip>
                </v-col>
                <v-col class="py-1" cols=4>
                  <span class="stat-numbers">
                    {{ item.jump_stat }}
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
  import BackendApi from "../services/backend.js";

  export default {
    name: "Leaderboard",
    data: () => ({
      activeStyle: "fontSize: 20px;",
      panelModel: [],
      loading: true,
      playerData: [
        {
          user_id: 'Joseph',
          attack_stat: 6,
          shield_stat: 136,
          jump_stat: 52,
          focus_stat: 43,
          total_points: 9751345,
          player_rank: 1,
        },
        {
          user_id: 'Ricky',
          attack_stat: 536,
          shield_stat: 1346,
          jump_stat: 552,
          focus_stat: 432343,
          total_points: 34135245,
          player_rank: 2,
        },
        {
          user_id: 'Trent',
          attack_stat: 26,
          shield_stat: 14326,
          jump_stat: 572,
          focus_stat: 4773,
          total_points: 9133445,
          player_rank: 3,
        },
        {
          user_id: 'Andrew',
          attack_stat: 716,
          shield_stat: 146,
          jump_stat: 562,
          focus_stat: 4893,
          total_points: 1334545,
          player_rank: 4,
        },
      ]
    }),

    components: {},

    computed: {
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        this.loading = true;
        BackendApi.getLeaderboard(
          window.Twitch.ext.viewer.id,
          window.channelId,
          window.authToken
        ).then(data => {
          this.playerData = data;
          this.loading = false;
        })
      },
    },
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
>>>.v-toolbar__title {
  font-family: 'Amatic SC', cursive;
}

.v-expansion-panel {
  font-family: 'Righteous', cursive;
}

>>>.v-expansion-panel-content__wrap {
  padding: 0 24px 0px;
  background-color: #f7f7f7;
  color: #100303;
  border-bottom: 1px solid black;
}

>>>.v-expansion-panel-header {
  padding: 0 24px 0px;
  background-color: #f7f7f7;
  color: #100303;
  border-bottom: 1px solid black;
}
</style>
