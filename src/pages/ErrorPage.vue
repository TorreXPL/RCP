<template>
  <fa-icon class="errorPage-icon" icon="sad-cry"></fa-icon>
</template>

<script>
import { setTimeout } from "timers";
import settings from "./../settings.json";
export default {
  mounted: function() {

    setTimeout(() => {
      this.$router.push("/");
    }, settings.return_timeout);

  }
};
</script>

<style >

.errorPage-icon {
  padding-top: 50vh;
  color: white;
  font-size: 60rem;
  width:0.45em!important;
}
</style>