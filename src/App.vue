<template>
  <div id="app">
    <Logo/>
    <div class="background app-content">
      <router-view></router-view>
    </div>
    <Weather/>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Weather from "./components/Weather";
import PageHeader from "./components/PageHeader";
import "./css/base.css";
import axios from "axios";
import settings from "./settings.json";
import { setInterval } from "timers";

export default {
  name: "app",
  components: {
    Logo,
    Weather
  }
};
</script>

<style>
#app{
  display: grid;
  grid-template-columns: auto 1fr auto;
}
.app-content {
  margin-top: 10rem;
  width: 100%;
  height: 100%;

}
</style>
