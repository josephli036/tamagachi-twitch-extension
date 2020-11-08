<template>
  <v-fab-transition>
    <v-speed-dial
      direction="top"
      transition="slide-x-reverse-transition"
      style="padding-right: 10px; padding-left: 10px"
      open-on-hover
    >
      <template v-slot:activator>
        <v-btn :color="color" dark fab small depressed>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </template>

      <v-tooltip :right="right" :left="!right" :color="color">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :color="color" dark fab small depressed v-bind="attrs" v-on="on" @click.stop="$emit('upgrade', 1)">
            <v-icon>mdi-numeric-1</v-icon>
          </v-btn>
        </template>
        <div class="d-flex" style="flex-direction: column">
          Chance: 95% <br/>
          Cost: 75
        </div>
      </v-tooltip>

      <v-tooltip :right="right" :left="!right" :color="color">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :color="color" dark fab small depressed v-bind="attrs" v-on="on" @click.stop="$emit('upgrade', 3)">
            <v-icon>mdi-numeric-3</v-icon>
          </v-btn>
        </template>
        <div class="d-flex" style="flex-direction: column">
          Chance: 60% <br/>
          Cost: 125
        </div>
      </v-tooltip>

      <v-tooltip :right="right" :left="!right" :color="color">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :color="color" dark fab small depressed v-bind="attrs" v-on="on" @click.stop="$emit('upgrade', 5)">
            <v-icon>mdi-numeric-5</v-icon>
          </v-btn>
        </template>
        <div class="d-flex" style="flex-direction: column">
          Chance: 10% <br/>
          Cost: 200
        </div>
      </v-tooltip>

    </v-speed-dial>
  </v-fab-transition>
</template>

<script>
export default {
  name: "AttributeButton",
  props: {
    color: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({}),

  computed: {},

  methods: {
  },
};
</script>
