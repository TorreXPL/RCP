<template>
    <div>

            <div class="ui medium image">
                <vue-web-cam ref="webcam"
                             :device-id="deviceId"
                             width="100%"
                             height="100%"
                             screenshotFormat="image/png"
                             @started="onStarted"
                             @stopped="onStopped"
                             @error="onError"
                             @cameras="onCameras"/>
                <button class="ui blue button" @click="onCapture">
                    Zrób zdjęcie</button>
            </div>
                <div id="selekcik">
                <div class="figure">
                    <img :src="img" width="100%" height="100%" class="ui fluid image">

                </div>
                </div>

    </div>
</template>

<script>
    import { WebCam } from "vue-web-cam";

    export default {
        name: "App",
        components: {
            "vue-web-cam": WebCam
        },
        data() {
            return {
                img: null,
                camera: null,
                deviceId: null,
                devices: []
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
                this.$refs.webcam.start();
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
            }
        }
    };

</script>
<style>
    #selekcik{
        position:absolute;
        width:20vw;
        height:20vh;
        bottom:8vh;

    }
    .ui.medium.image{
        background-image:url("../../assets/webcam-bg.png");
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size:100% 100%;
        width:20vw;
        height:20vh;
        bottom: 10vh;
        right:7%;
        position:absolute;

    }
</style>