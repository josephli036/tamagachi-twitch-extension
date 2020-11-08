<template>
  <v-overlay absolute opacity="0" z-index="0">
    <div class="d-flex fill-height" style="flex-direction:column">
      <div class="d-flex fill-height align-center justify-center">
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :value="counter"
          color="teal lighten-3"
        >
          <img src="../assets/tlBlueCry.png" class="mh50"/>
        </v-progress-circular>
      </div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  props: {},
  data: () => ({
    counter: 0
  }),

  components: {},

  computed: {},

  watch: {},

  methods: {
    tick() {
      this.counter += 1;
      this.counter = this.counter > 100 ? 0 : this.counter;
    }
  },

  created() {
    const instance = this;
    setInterval(() => {
      instance.tick();
    }, 300);
  }
};
</script>

<style scoped>
.mh50 {
  max-height: 50px !important;
}
>>> .v-progress-circular__underlay {
  stroke: #f7f7f7;
}
</style>
