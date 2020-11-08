<template>
    <div class="d-flex" style="flex-direction: column; height:384px">
      <v-spacer />
      <div class="d-flex">
        <v-spacer />
        <div class="upgrade-button d-flex align-center">
          <attribute-button
            color="deep-orange lighten-1"
            icon="mdi-sword-cross"
            :right=true
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'attack', type: arguments[0] })"
          />

          <attribute-button
            color="light-blue lighten-2"
            icon="mdi-shield"
            :right=true
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'shield', type: arguments[0] })"
          />

          <v-tooltip
            min-width="84px"
            top
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

          <attribute-button
            color="light-green lighten-2"
            icon="mdi-brain"
            :right=false
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'focus', type: arguments[0] })"
          />

          <attribute-button
            color="amber lighten-2"
            icon="mdi-run-fast"
            :right=false
            v-show="open"
            @upgrade="$emit('upgrade', { attribute: 'jump', type: arguments[0] })"
          />

        </div>
        <v-spacer />
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
  /* position:absolute;
  bottom:10px;
  left:40%;
  z-index: 1; */
  z-index: 1;
}
.upgrade-wrapper {
  position: absolute;
  bottom: 10px;

}
</style>
