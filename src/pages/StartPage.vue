<template>

  <div>
  <Camera/>
    <Clock/>
    <router-link tag="button" class="ui massive primary button" id="btn" to="/action">START</router-link>
    <br/>
      <input type="file" id="file" @change="uploadFoto" style="display:none;">

  </div>
</template>

<script>
  import Clock from "../components/Clock";
import axios from "axios";
  import Camera from "../components/Camera";

export default {
  methods: {
    uploadFoto: function(event) {
      if (!event.target.files) return;

      var load = new FormData();
      load.append("file", event.target.files[0]);
      axios
        .post(process.env.VUE_APP_WEBSERVICE_URL + "/check", load)
        .then(response => {
          let destiledData = response.data;

          if (!destiledData._id || destiledData._id == "undefined") {
            return this.$router.push("/error");
          }
          return this.$router.push({
            name: `ActionPage`,
            params: { name: destiledData.name, id: destiledData._id }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
    Clock,
      Camera
  }

};



</script>

<style >

</style>