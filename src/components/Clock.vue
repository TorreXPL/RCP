<template>
  <h1 class="clock-time">{{this.time}}</h1>
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
.clock-time {
  font-weight: bold;
  font-size: 8rem;
  color: white;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
}

@media (max-width: 700px) {
 .clock-time{
   font-size: 6rem;
 }
}
</style>