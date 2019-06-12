import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

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


let isProduction = process.env.NODE_ENV != "development";
export const Api = axios.create({
  baseURL: !isProduction
    ? process.env.VUE_APP_MOCKED_WEBSERVICE_URL
    : process.env.VUE_APP_WEBSERVICE_URL
});

if (!isProduction) {
  Api.defaults.params = {};
  Api.defaults.params["key"] = process.env.VUE_APP_MOCKAROO_API_KEY;
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
