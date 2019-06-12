<template>
  <div>
    <Clock/>
    <br>
    <input hidden type="file" id="file-upload" accept="image/*" @change="uploadFoto" capture="user">
    <button v-if="!isProcessing" @click="chooseFile" class="ui massive primary button">START</button>
    <div v-else class="startPage-spinner-wrapper">
      <FulfillingSquareSpinner
        class="startPage-spinner"
        :animation-duration="2000"
        :size="75"
        color="white"
      />
    </div>
  </div>
</template>

<script>
import Clock from "../components/Clock";
import { Api } from "../main";
import { FulfillingSquareSpinner } from "epic-spinners";
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
          console.log(response);

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
    FulfillingSquareSpinner
  }
};
</script>

<style >
.startPage-spinner-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>