<template>
  <v-overlay absolute color="#f7f7f7" opacity="1" z-index="2">
    <div class="d-flex fill-height" style="flex-direction:column">
      <div class="d-flex fill-height align-center justify-center">
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          indeterminate
          color="teal lighten-3"
        />
      </div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  name: "LoadingOverlay",
  props: {},
  data: () => ({
    counter: 0
  }),

  components: {},

  computed: {},

  watch: {},
};
</script>
