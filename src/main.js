import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";


import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
  faSnowflake,
  faSmog,
  faMoon,
  faSadCry
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
  faSnowflake,
  faSmog,
  faMoon,
  faSadCry
);
Vue.config.productionTip = false;
Vue.use(router);
Vue.component("fa-icon", FontAwesomeIcon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
