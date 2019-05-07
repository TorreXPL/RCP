<template>
  <h1 class="ui header" id="clock">{{this.time}}</h1>
</template>

<script>
import { setInterval } from "timers";
export default {
  data: () => {
    return {
      time: ""
    };
  },
  mounted: function() {
    this.startTimer();
  },
  methods: {
    startTimer: function() {
      var d = new Date();
      if (d.getMinutes() < 10) {
        var hours = "0" + d.getMinutes();
      } else {
        var hours = d.getMinutes();
      }
      this.time = d.getHours() + ":" + hours;
      setInterval(() => {
        var d = new Date();
        if (d.getMinutes() < 10) {
          var hours = "0" + d.getMinutes();
        } else {
          var hours = d.getMinutes();
        }
        this.time = d.getHours() + ":" + hours;
      }, 1000);
    }
  }
};
</script>

<style >
</style>