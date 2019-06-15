<template>
  <div class="startPage-container">
    <PageHeader header="Czy wiesz, że?" subheader="ośmiornica..."/>
    <section class="startPage-content">
      <Clock class="startPage-clock"/>
      <input
        hidden
        type="file"
        id="file-upload"
        accept="image/*"
        @change="uploadFoto"
        capture="user"
      >
      <button class="startPage-button" v-if="!isProcessing" @click="chooseFile">START</button>
      <div v-else class="startPage-spinner-wrapper">
        <FulfillingSquareSpinner
          class="startPage-spinner"
          :animation-duration="2000"
          :size="75"
          color="white"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Clock from "../components/Clock";
import { Api } from "../main";
import { FulfillingSquareSpinner } from "epic-spinners";
import PageHeader from "../components/PageHeader";

export default {
  data: () => {
    return {
      isProcessing: false
    };
  },
  methods: {
    chooseFile: () => document.getElementById("file-upload").click(),
    uploadFoto: function(event) {
      if (!event.target.files) return;
      this.isProcessing = true;

      var load = new FormData();
      load.append("file", event.target.files[0]);

      Api.post("check", load)
        .then(response => {
          let destiledData = response.data;

          if (!destiledData._id || destiledData._id == "undefined") {
            return this.$router.push("/error");
          }
          this.isProcessing = false;
          return this.$router.push({
            name: `ActionPage`,
            params: { name: destiledData.name, id: destiledData._id }
          });
        })
        .catch(err => {
          this.isProcessing = false;
          console.log(err);
          return this.$router.push({
            name: `ErrorPage`,
            params: { name: destiledData.name, id: destiledData._id }
          });
        });
    }
  },

  components: {
    Clock,
    FulfillingSquareSpinner,
    PageHeader
  }
};
</script>

<style >
.startPage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.startPage-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
}
.startPage-spinner-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
@media (max-width: 420px) {
  .startPage-clock {
    font-size: 5rem;
  }
  .startPage-button {
    width: 10rem;
  }
}
</style>