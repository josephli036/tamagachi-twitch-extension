<template>
  <v-container>
    <div class="d-flex">
      <v-chip
        color="deep-orange lighten-1"
        text-color="white"
        label
      >
      <v-avatar left>
        <v-icon>mdi-sword-cross</v-icon>
      </v-avatar>
      {{ attack }}
      </v-chip>
      <v-spacer />

      <v-chip
        color="light-blue lighten-2"
        text-color="white"
        label
      >
      <v-avatar left>
        <v-icon>mdi-shield</v-icon>
      </v-avatar>
      {{ shield }}
      </v-chip>
      <v-spacer />

      <v-chip
        color="light-green lighten-2"
        text-color="white"
        label
      >
      <v-avatar left>
        <v-icon>mdi-brain</v-icon>
      </v-avatar>
      {{ focus }}
      </v-chip>
      <v-spacer />

      <v-chip
        color="amber lighten-2"
        text-color="white"
        label
      >
      <v-avatar left>
        <v-icon>mdi-run-fast</v-icon>
      </v-avatar>
      {{ jump }}
      </v-chip>
    </div>
  </v-container>
</template>

<script>

  export default {
    data: () => ({
      attack: 0,
      shield: 0,
      focus: 0,
      jump: 0,
    }),

    components: {
    },

    computed: {
    },

    watch: {
    },
  }
</script>
