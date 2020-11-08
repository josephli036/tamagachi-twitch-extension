<template>
  <v-overlay absolute opacity="0">
    <div class="d-flex fill-height" style="flex-direction:column">
      <div class="d-flex fill-height align-center justify-center">
        <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="15"
            :value="value"
            color="primary"
          >
            {{ value }}
          </v-progress-circular>
      </div>
    </div>
  </v-overlay>
</template>

<script>

  export default {
    props: {
      value: {
        type: String,
        required: true,
      },
    },
    data: () => ({
    }),

    components: {
    },

    computed: {
    },

    watch: {
    },

    methods: {
      tick() {
        this.value += 1;
        this.value = this.value > 100 ? 0 : this.value;
      },
    },

    created() {
      const instance = this;
      setInterval(() => {
        instance.tick();
      }, 300);
    },
  }
</script>
