<template>
  <v-container>
    <v-row id="create">
      <v-col cols="12">
        <v-speed-dial
          absolute
          :value="true"
          bottom
          right
          direction="top"
          transition="slide-y-reverse-transition"
        >
          <!-- Upgrade button -->
          <template v-slot:activator>
            <v-tooltip min-width="84px" left color="purple lighten-4">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-model="fab"
                  color="purple lighten-4"
                  dark
                  fab
                  v-bind="attrs"
                  v-on="on"
                  depressed
                >
                  <v-icon v-if="fab"> mdi-close </v-icon>
                  <v-icon v-else> mdi-chevron-up-circle </v-icon>
                </v-btn>
              </template>
              <div style="text-align: center; width: 100%">
                <span v-if="fab">Close</span>
                <span v-else>Upgrade</span>
              </div>
            </v-tooltip>
          </template>

          <!-- Attack button -->
          <v-speed-dial
            direction="left"
            transition="slide-x-reverse-transition"
          >
            <template v-slot:activator>
              <v-btn color="deep-orange lighten-1" dark fab small depressed>
                <v-icon>mdi-sword-cross</v-icon>
              </v-btn>
            </template>

            <v-btn
              color="deep-orange lighten-1"
              dark
              fab
              small
              depressed
              @click.stop=""
            >
              <v-icon>mdi-numeric-positive-1</v-icon>
            </v-btn>
          </v-speed-dial>

          <!-- Defense button -->
          <v-tooltip min-width="84px" left color="light-blue lighten-2">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                dark
                small
                color="light-blue lighten-2"
                v-bind="attrs"
                v-on="on"
                depressed
              >
                <v-icon>mdi-shield</v-icon>
              </v-btn>
            </template>
            <div style="text-align: center; width: 100%">
              <span>Defense</span>
            </div>
          </v-tooltip>

          <!-- Sanity button -->
          <v-tooltip min-width="84px" left color="light-green lighten-2">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                dark
                small
                color="light-green lighten-2"
                v-bind="attrs"
                v-on="on"
                depressed
              >
                <v-icon>mdi-brain</v-icon>
              </v-btn>
            </template>
            <div style="text-align: center; width: 100%">
              <span>Sanity</span>
            </div>
          </v-tooltip>

          <!-- Speed button -->
          <v-tooltip min-width="84px" left color="amber lighten-2">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                dark
                small
                color="amber lighten-2"
                v-bind="attrs"
                v-on="on"
                depressed
              >
                <v-icon>mdi-run-fast</v-icon>
              </v-btn>
            </template>
            <div style="text-align: center; width: 100%">
              <span>Speed</span>
            </div>
          </v-tooltip>
        </v-speed-dial>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    direction: "bottom",
    att: false,
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
  }),

  computed: {},

  watch: {},
};
</script>

<style>
#create .v-btn--floating {
  position: relative;
}
</style>
