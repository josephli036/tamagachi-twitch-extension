<template>
  <v-app-bar rounded dense dark color="#6441A4">
    <v-spacer />
    <v-icon>mdi-currency-php</v-icon>
    <v-toolbar-title class="text-h5">{{ points }}</v-toolbar-title>
    <v-spacer />
  </v-app-bar>

</template>

<script>

  export default {
    props: {
      points: {
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
  }
</script>
