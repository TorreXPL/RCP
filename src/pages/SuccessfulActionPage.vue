<template>
  <div class="successfulActionPage-container">
    <PageHeader header="Powodzenia w pracy :)" :subheader="`Powrót za ${secondsLeft}s`"/>
    <Clock/>
  </div>
</template>

<script>
import Clock from "../components/Clock";
import settings from "./../settings.json";
import { setInterval } from "timers";
import PageHeader from "../components/PageHeader";

export default {
   data: function(){
    return{
      secondsLeft: 0,
    }
  },
  mounted: function() {
  this.secondsLeft = settings.return_timeout / 1000;
     setInterval(() => {
       if(this.secondsLeft > 0) this.secondsLeft--;
      }, 1000);
    setTimeout(() => {
      this.$router.push("/");
    }, settings.return_timeout);
  },
  components: {
    Clock,
    PageHeader
  }
};
</script>
<style>
.successfulActionPage-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
}
@media (max-width: 700px) {
 .errorPage-icon{
   font-size: 12rem;
 }
}
</style>