<template>
  <div>
    <div id="buttons_1row">
      <button @click="markRCP($event)" value="ToWork" class="ui massive blue button">Idę do pracy</button>
      <button @click="markRCP($event)" value="ToBreak" class="ui massive blue button">Idę na przerwę</button>
      <button
        @click="markRCP($event)"
        value="ToDelegation"
        class="ui massive blue button"
      >Wyjazd służbowy</button>
    </div>
    <div id="buttons_2row">
      <button
        @click="markRCP($event)"
        value="FromWork"
        class="ui massive violet button"
      >Wychodzę z pracy</button>
      <button
        @click="markRCP($event)"
        value="FromBreak"
        class="ui massive violet button"
      >Wychodze na przerwę</button>
      <button
        @click="markRCP($event)"
        value="FromDelegation"
        class="ui massive violet button"
      >Wracam z wyjazdu</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    markRCP: function(event) {
      let id = this.$route.params.id;
      axios
        .post(
          process.env.VUE_APP_WEBSERVICE_URL +
            `/rcp?time_stamp=${new Date().getTime()}&employee_id=${id}&action=${
              event.target.value
            }`
        )
        .then(responce => {
          if (responce.status == "200") {
            this.$router.push({ name: "SuccessPage" });
          } else {
            //TODO: wyświetl snackbar z błędem
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" >
</style>