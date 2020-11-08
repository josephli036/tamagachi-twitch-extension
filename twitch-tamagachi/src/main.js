import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

window.Twitch.ext.onAuthorized(function (auth) {
  window.authToken = auth.token;
  window.channelId = auth.channelId;
  console.log(window.authToken);
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
