<template>
  <div class="errorPage-container">
    <PageHeader header="Nie rozpoznano twojej twarzy" :subheader="`Ponowna próba nastąpi za ${secondsLeft}s`"/>
    <fa-icon class="errorPage-icon" icon="sad-cry"></fa-icon>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import settings from "./../settings.json";
import PageHeader from "../components/PageHeader";

export default {
  components: {
    PageHeader
  },
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

};
</script>

<style >
.errorPage-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
   justify-content: space-around;

  color: white;
  font-size: 25rem;
  padding-bottom: 5rem;
}
@media (max-width: 700px) {
 .errorPage-icon{
   font-size: 12rem;
 }
}
</style>