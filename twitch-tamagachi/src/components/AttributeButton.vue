<template>
  <v-fab-transition>
    <v-speed-dial
      direction="left"
      transition="slide-x-reverse-transition"
      style="padding-bottom: 4px"
    >
      <template v-slot:activator>
        <v-btn :color="color" dark fab small depressed>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </template>
      <v-btn :color="color" dark fab small depressed>
        <v-icon>mdi-numeric-5</v-icon>
      </v-btn>
      <v-btn :color="color" dark fab small depressed>
        <v-icon>mdi-numeric-3</v-icon>
      </v-btn>
      <v-btn :color="color" dark fab small depressed>
        <v-icon>mdi-numeric-1</v-icon>
      </v-btn>
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
  },

  data: () => ({
    transition: "slide-y-reverse-transition",
  }),

  computed: {},

  watch: {},
};
</script>
