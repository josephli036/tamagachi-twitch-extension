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
      <v-expansion-panels v-model="panelModel" accordion flat hover multiple tile class="mb-6">
        <v-expansion-panel
          v-for="(item,i) in playerData"
          :key="i"
        >
          <v-expansion-panel-header :style="panelModel.includes(i) ? activeStyle : ''" disable-icon-rotate>
            {{ item.username }}
            <template v-slot:actions>
              {{ item.ranking }}
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
                    {{ item.attack }}
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
                    {{ item.shield }}
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
                    {{ item.focus }}
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
                    {{ item.jump }}
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

  export default {
    name: "Leaderboard",
    data: () => ({
      activeStyle: "fontSize: 20px;",
      panelModel: [],
      playerData: [
        {
          username: 'Joseph',
          attack: 6,
          shield: 136,
          jump: 52,
          focus: 43,
          totalPoints: 9751345,
          ranking: 1,
        },
        {
          username: 'Ricky',
          attack: 536,
          shield: 1346,
          jump: 552,
          focus: 432343,
          totalPoints: 34135245,
          ranking: 2,
        },
        {
          username: 'Trent',
          attack: 26,
          shield: 14326,
          jump: 572,
          focus: 4773,
          totalPoints: 9133445,
          ranking: 3,
        },
        {
          username: 'Andrew',
          attack: 716,
          shield: 146,
          jump: 562,
          focus: 4893,
          totalPoints: 1334545,
          ranking: 4,
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
        return;
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
