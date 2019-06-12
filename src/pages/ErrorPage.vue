<template>
  <div class="errorPage-container">
    <fa-icon class="errorPage-icon" icon="sad-cry"></fa-icon>
  </div>
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
.errorPage-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  font-size: 25rem;
  padding-bottom: 5rem;
}
</style>