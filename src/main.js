import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/scss/styles.scss";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;
// Vue.use(router);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
