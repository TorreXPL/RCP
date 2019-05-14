<template>
    <div class="ui two column stackable grid">
        <div class="row">
            <div class="column">
                <h2 class="ui header">Obecna Kamera</h2>
                <code style="color:orangered" v-if="device">{{ device.label }}</code>
                <div class="ui orange raised segment" id="cam" ref="camcia">
                    <vue-web-cam ref="webcam"
                                 :device-id="deviceId"
                                 width="100%"
                                 @started="onStarted"
                                 @stopped="onStopped"
                                 @error="onError"
                                 @cameras="onCameras"
                                 @camera-change="onCameraChange" />
                </div>
                <div class="column">
                    <select v-model="camera">
                        <option>-- Wybierz Kamerkę --</option>
                        <option v-for="device in devices"
                                :key="device.deviceId"
                                :value="device.deviceId">{{ device.label }}</option>
                    </select>
                </div>
                <div class="row">
                    <div class="column">
                    <br/>
                    </div>
                    <div class="column">
                    <div class="ui three buttons">
                        <button type="button"
                                class="ui blue button"
                                @click="uploadFoto">Zrób zdjęcie</button>
                        <button type="button"
                                class="ui red button"
                                @click="onStop">Zatrzymaj kamerę</button>
                        <button type="button"
                                class="ui green button"
                                @click="onStart">Przejdź dalej</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <h2 class="ui header">Podgląd zdjęcia</h2>
                <div class="ui orange raised segment" id="review" ref="rev">
                    <img :src="img" id="file" class="ui rounded image">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { WebCam } from "vue-web-cam";
    import axios from "axios";
    export default {
        name: "App",
        mounted:function(){
            this.calculateHeight();
        },
        components: {
            "vue-web-cam": WebCam
        },
        data(){
            return {
                img: null,
                camera: null,
                deviceId: null,
                devices: [],
                height: 0
            };
        },
        computed: {
            device: function() {
                return this.devices.find(n => n.deviceId === this.deviceId);
            }
        },
        watch: {
            camera: function(id) {
                this.deviceId = id;
            },
            devices: function() {
                // Once we have a list select the first one
                const [first, ...tail] = this.devices;
                if (first) {
                    this.camera = first.deviceId;
                    this.deviceId = first.deviceId;
                }
            }
        },
        methods: {
            uploadFoto: function(event) {
                this.img= this.$refs.webcam.capture();
                if (!event.target.files) return;

                var load = new FormData();
                load.append("file", this.img);
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
            },
            onCapture() {
                this.img = this.$refs.webcam.capture();
            },
            onStarted(stream) {
                console.log("Włączyłeś kamerkę", stream);
            },
            onStopped(stream) {
                console.log("Wyłączyłeś kamerkę", stream);
            },
            onStop() {
                this.$refs.webcam.stop();
            },
            onStart() {
               /* this.$refs.webcam.start();*/
                this.$router.push("/action");
            },
            onError(error) {
                console.log("Błąd wczytywania", error);
            },
            onCameras(cameras) {
                this.devices = cameras;
                console.log("Zdarzenie Kamera", cameras);
            },
            onCameraChange(deviceId) {
                this.deviceId = deviceId;
                this.camera = deviceId;
                console.log("Zdarzenie Zmień Kamere", deviceId);
            },
            calculateHeight() {
                this.height = this.$refs.camcia.clientHeight;
                this.$refs.rev.style.height= this.height+3+"px";

            }

        }


    };

</script>
<style>

</style>