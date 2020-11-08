<template>
  <v-container pa-0 text-center>
    <v-row align-content="center">
      <v-col class="pa-0" cols="12">
        <v-btn :class="buttonClasses" color="pink lighten-2" depressed disabled>
          Upgrade
        </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn :class="buttonClasses" color="pink lighten-2" depressed @click="onAttributeClick('attack')">
          Attack
        </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn :class="buttonClasses" color="blue lighten-3" depressed @click="onAttributeClick('shield')"> Shield </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn :class="buttonClasses" color="green lighten-3" depressed @click="onAttributeClick('jump')"> Jump </v-btn>
      </v-col>
      <v-col class="pa-0" cols="12">
        <v-btn :class="buttonClasses" color="blue-grey darken-1" depressed @click="onAttributeClick('focus')"> Focus </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AttributeSelectionMenu",
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
    onAttributeClick(type) {
      this.$emit('attributeClick', type);
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
