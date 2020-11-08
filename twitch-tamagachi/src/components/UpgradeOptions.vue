<template>
  <v-slide-x-reverse-transition hide-on-leave>
    <attribute-selection-menu
      v-if="!showUpgradeOptions"
      @attributeClick="onAttributeClick"
    />
    <upgrade-selection-menu v-else @upgradeClick="onUpgradeClick" />
  </v-slide-x-reverse-transition>
</template>

<script>
import AttributeSelectionMenu from "../components/AttributeSelectionMenu.vue";
import UpgradeSelectionMenu from "../components/UpgradeSelectionMenu.vue";

export default {
  name: "UpgradeOptions",
  components: { AttributeSelectionMenu, UpgradeSelectionMenu },
  mixins: [],
  data() {
    return {
      currentAttribute: null,
    };
  },
  computed: {
    showUpgradeOptions() {
      return this.currentAttribute ? true : false;
    },
  },
  mounted() {},
  methods: {
    onAttributeClick(type) {
      this.currentAttribute = type;
    },
    onUpgradeClick(type) {
      if (type === "back") {
        this.currentAttribute = null;
      } else {
        this.$emit("upgrade", {attribute: this.currentAttribute, type: type});
      }
    },
  },
};
</script>
