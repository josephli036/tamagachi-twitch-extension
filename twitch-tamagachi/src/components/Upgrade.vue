<template>
  <v-container>
    <div
      class="d-flex align-center justify-center"
      style="flex-direction: column"
    >
      <attribute-button
        color="amber lighten-2"
        icon="mdi-run-fast"
        v-show="open"
      />

      <attribute-button
        color="light-green lighten-2"
        icon="mdi-brain"
        v-show="open"
      />

      <attribute-button
        color="light-blue lighten-2"
        icon="mdi-shield"
        v-show="open"
      />

      <attribute-button
        color="deep-orange lighten-1"
        icon="mdi-sword-cross"
        v-show="open"
      />

      <v-btn
        fab
        color="purple lighten-4"
        dark
        depressed
        align-self="center"
        @click="open = !open"
      >
        <v-icon v-if="open"> mdi-close </v-icon>
        <v-icon v-else> mdi-chevron-up-circle </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import AttributeButton from "../components/AttributeButton.vue";

export default {
  data: () => ({
    open: false,
    transition: "slide-y-reverse-transition",
  }),

  components: {
    AttributeButton,
  },

  computed: {},

  watch: {},
};
</script>
