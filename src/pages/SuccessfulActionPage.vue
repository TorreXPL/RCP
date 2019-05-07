<template>
  <div>
    <Clock/>
  </div>
</template>

<script>
import Clock from "../components/Clock";
import settings from "./../settings.json";
import { setInterval } from "timers";

export default {
  mounted: function() {

    setTimeout(() => {
      this.$router.push("/");
    }, settings.return_timeout);
  },
  components: {
    Clock
  }
};
</script>
<style lang="scss" >
</style>