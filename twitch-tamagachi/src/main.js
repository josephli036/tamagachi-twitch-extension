import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

window.Twitch.ext.onAuthorized(function(auth) {
  console.log('The JWT that will be passed to the EBS is', auth.token);
  console.log('The channel ID is', auth.channelId);
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
