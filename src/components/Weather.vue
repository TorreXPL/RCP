<template>
  <div class="weather-container">
    <fa-icon class="weather-icon" :icon="icon" size="2x"></fa-icon>
    <div class="weather-temperature">{{this.tmp+this.symbol}}</div>
  </div>
</template>

<script>
import { setInterval } from "timers";
import axios from "axios";

export default {
  mounted: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.coords = position.coords;
        this.updateWeather();
        setInterval(() => this.updateWeather(), 600000); //update every 10min becouse weather api updates its data every 10min
      });
    }
  },
  methods: {
    updateWeather() {
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${
        this.coords.latitude
      }&lon=${this.coords.longitude}&appid=${
        process.env.VUE_APP_WEATHER_API_KEY
      }&units=${this.unit}`;
      axios
        .get(url)
        .then(data => {
          this.tmp = Math.round(data.data.main.temp);
          switch (data.data.weather[0].main.toLowerCase()) {
            case "clear":
              this.icon = "sun";
              break;
            case "rain":
              if (data.data.weather[0].description == "shower rain")
                this.icon = "cloud-showers-heavy";
              else this.icon = "cloud-rain";
              break;
            case "thunderstorm":
              this.icon = "bolt";
              break;
            case "snow":
              this.icon = "snowflake";
              break;
            case "mist":
            case "haze":
            case "dust":
            case "fog":
            case "sand":
            case "ash":
            case "squall":
            case "tornado":
              this.icon = "smog";
              break;
            case "clouds":
              if (data.data.weather[0].description == "few clouds")
                this.icon = "cloud-sun";
              else this.icon = "cloud";
              break;
          }
          if (new Date() > new Date(data.data.sys.sunset * 1000))
            this.icon = "moon";
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    symbol() {
      if (this.unit == "metric") return "°C";
      return "°F";
    }
  },
  data() {
    return {
      tmp: "",
      icon: "",
      coords: null,
      unit: "metric"
    };
  }
};
</script>

<style >
.weather-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 40px;
  top: 33px;
}
.weather-icon {
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: normal;
  text-align: center;

  color: #f4622f;
}
.weather-temperature {
  /* Temp */

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  margin-top: 0.5rem;
  color: #878887;
}
</style>