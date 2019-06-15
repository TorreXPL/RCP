<template>
  <div class="actionPage-container">
    <PageHeader :header="`Cześć ${this.$route.params.name}`" subheader="Co chcesz zrobić?"/>
    <div class="actionPage-button-rows">
      <div class="actionPage-button-row">
        <button @click="markRCP($event)" value="ToWork">Idę do pracy</button>
        <button @click="markRCP($event)" value="ToBreak">Idę na przerwę</button>
        <button @click="markRCP($event)" value="ToDelegation">Wyjazd służbowy</button>
      </div>
      <div class="actionPage-button-row">
        <button
          @click="markRCP($event)"
          value="FromWork"
          class="actionPage-secondary"
        >Wychodzę z pracy</button>
        <button
          @click="markRCP($event)"
          value="FromBreak"
          class="actionPage-secondary"
        >Wracam z przerwy</button>
        <button
          @click="markRCP($event)"
          value="FromDelegation"
          class="actionPage-secondary"
        >Wracam z wyjazdu</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from "../main";
import PageHeader from "../components/PageHeader";

export default {
  components: {
    PageHeader
  },
  methods: {
    markRCP: function(event) {
      let id = this.$route.params.id;
      Api.post(
        `/rcp?time_stamp=${new Date().getTime()}&employee_id=${id}&action=${
          event.target.value
        }`
      )
        .then(responce => {
          if (responce.status == "200") {
            this.$router.push({ name: "SuccessPage" });
          } else {
            alert("Status code /= 200");
          }
        })
        .catch(error => {
          console.log(error);
          alert(error.message);
        });
    }
  }
};
</script>

<style>
.actionPage-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
}
.actionPage-secondary {
  background-color: var(--action-color);
}
.actionPage-button-rows {
  overflow: auto;
  max-width: 100%;
  max-height: 100%;
  justify-content: center;
}
.actionPage-button-row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
}
button {
  margin: 2rem;
  width: 12rem;
  height: 8rem;
}
@media (max-width: 700px) {
  .actionPage-container {
    display: grid;
    grid-template-rows: 1fr 2fr;
    margin: 2rem 0;
  }
  .actionPage-button-row {
    justify-content: center;
  }
}
</style>