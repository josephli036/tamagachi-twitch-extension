<template>
  <v-container pa-0 text-center>
    <v-row align-content="center">
      <v-col class="pa-0" cols="12">
        <v-btn
          :class="buttonClasses"
          color="pink lighten-2"
          depressed
          @click="onUpgradeClick('5')"
        >
          +5 10% 200pts
        </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn
          :class="buttonClasses"
          color="blue lighten-3"
          depressed
          @click="onUpgradeClick('3')"
        >
          +3 60% 125pts
        </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn
          :class="buttonClasses"
          color="green lighten-3"
          depressed
          @click="onUpgradeClick('1')"
        >
          +1 95% 75pts
        </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn
          :class="buttonClasses"
          color="blue-grey darken-1"
          depressed
          @click="onUpgradeClick('back')"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UpgradeSelectionMenu",
  components: {},
  mixins: [],
  data() {
    return {
      buttonClasses: ["option-button", "white--text"],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onUpgradeClick(type) {
      this.$emit("upgradeClick", type);
    },
  },
};
</script>

<style scoped>
.theme--light.v-btn.v-btn--disabled {
  color: rgba(0, 0, 0, 1) !important;
}
.option-button {
  border-radius: 0px !important;
  width: 90%;
}
</style>
