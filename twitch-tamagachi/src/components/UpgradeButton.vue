<template>
  <div class="upgrade-button d-flex" style="flex-direction: column">
    <div class="d-flex">
      <div class="pa-0">
        <div class="d-flex align-center justify-center" style="flex-direction:column">
          <attribute-button
            color="amber lighten-2"
            icon="mdi-run-fast"
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'jump', type: arguments[0] })"
          />

          <attribute-button
            color="light-green lighten-2"
            icon="mdi-brain"
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'focus', type: arguments[0] })"
          />

          <attribute-button
            color="light-blue lighten-2"
            icon="mdi-shield"
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'shield', type: arguments[0] })"
          />

          <attribute-button
            color="deep-orange lighten-1"
            icon="mdi-sword-cross"
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'attack', type: arguments[0] })"
          />
          <v-tooltip
            min-width="84px"
            left
            color="purple lighten-4"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab
                color="purple lighten-4"
                dark
                depressed
                align-self="center"
                v-bind="attrs"
                v-on="on"
                @click="open = !open"
              >
                <v-icon v-if="open">
                  mdi-close
                </v-icon>
                <v-icon v-else>
                  mdi-chevron-up-circle
                </v-icon>
              </v-btn>
            </template>
            <div style="text-align: center; width: 100%">
              <span v-if="open">Close</span>
              <span v-else>Upgrade</span>
            </div>
          </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AttributeButton from "../components/AttributeButton.vue"

  export default {
    data: () => ({
      open: false,
      transition: 'slide-y-reverse-transition',
    }),

    components: {
      AttributeButton,
    },

    computed: {
    },

    watch: {
    },
  }
</script>

<style>
.upgrade-button {
  position:absolute;
  bottom:0;
  right:0;
  z-index: 1;
}
</style>
