<template>
  <div id="app" class="ui container center aligned">
    <router-view  v-if="$router.history.current['path'] =='/webcam'"></router-view>
    <div v-if="$router.history.current['path'] !=='/webcam'">
    <Logo/>
    <PageHeader :header="this.header" :subheader="this.subheader"/>
    <Weather/>
    <div class="background">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
  import Logo from "./components/Logo";
import Weather from "./components/Weather";
import PageHeader from "./components/PageHeader";
import "../public/css/custom.css";
import "../public/css/semantic.css";
import axios from "axios";
import settings from "./settings.json";
import { setInterval } from "timers";

export default {
  name: "app",
  data: () => {
    return {
      fact: "",
      timeleft: Math.round(settings.return_timeout / 1000)
    };
  },
  created: function() {
    this.displayFunFact().then(fact => {
      this.fact = fact;
    });
  },
  computed: {
    header() {
      switch (this.$route.path) {
        case "/":
          return "Czy wiesz, że?";
        case "/error":
          return "Niestety nie udało się rozpoznać twojej twarzy";
        case "/success":
          return "Miłego dnia w pracy :)";
        case "/action":
          return `Cześć ${this.$route.params.name}!`;
        case "/webcam":
          return ``;
        default:
          return "Twoja ścieżka jest inwalidą";
      }
    },
    subheader() {
      switch (this.$route.fullPath) {
        case "/":
          return this.fact;
          break;
        case "/error":
          return `Ponowna próba nastąpi za ${this.timeleft}s`;
        case "/success":
          return `Powrót do ekranu startowego za ${this.timeleft}s`;
        case "/action":
          return "Co robisz?";
        case "/webcam":
          return "";
        default:
          return ":c :c :c :c";
      }
    }
  },
  methods: {
    displayFunFact(callback) {
      let url = `https://my.api.mockaroo.com/fun_fact.json?key=${
        process.env.VUE_APP_MOCKAROO_API_KEY
      }`;
      return axios
        .get(url)
        .then(data => {
          return data.data.fact;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    Logo,
    Weather,
    PageHeader
  }
};
</script>

<style>
</style>
