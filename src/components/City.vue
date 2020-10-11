<template>
  <div class="city">
    <p class="city__description">"{{ cityDescription }}"</p>

    <div class="city__weather">
      <h4 class="city__weather-heading">Weather</h4>
      <ul class="city__weather-list">
        <li
          class="city__weather-list-item"
          v-for="(dailyForecast, i) in dailyForecasts"
          :class="weatherClass(dailyForecast.Day.IconPhrase)"
          :key="i"
        >
          <p class="city__weather-list-item-date">
            {{ dailyForecast.Date | formatDate }}
          </p>
          <p class="city__weather-list-item-description">
            {{ dailyForecast.Day.IconPhrase }}
          </p>
        </li>
      </ul>
      <h4 class="city__weather-heading">Flights</h4>
      <h6>
        Flight duration: <strong>{{ flightDuration }} mins</strong>
      </h6>
      <ul class="city__flight-list">
        <li
          class="city__flight-list-item"
          v-for="(flightPrice, i) in flightPrices"
          :class="flightPriceClass(flightPrice.price)"
          :key="i"
        >
          <p class="city__flight-list-item-day">{{ flightPrice.day }}</p>
          <div class="city__flight-list-item-price">
            &euro;{{ flightPrice.price }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "City",
  components: {},
  filters: {
    formatDate: function (value) {
      return dayjs(value).format("DD/MM/YYYY");
    },
  },
  methods: {
    weatherClass(weather) {
      let weatherClass = "";
      switch (weather) {
        case "Showers":
          weatherClass = "rain";
          break;
        case "Rain":
          weatherClass = "rain";
          break;
        case "Mostly sunny":
          weatherClass = "sun";
          break;
        case "Partly cloudy":
          weatherClass = "cloud";
          break;
        case "Partly sunny w/ showers":
          weatherClass = "rain";
          break;
        case "Partly sunny":
          weatherClass = "sun";
          break;
        case "Sunny":
          weatherClass = "sun";
          break;
        case "Partly sunny w/ t-storms":
          weatherClass = "rain";
          break;
        case "Mostly cloudy w/ t-storms":
          weatherClass = "rain";
          break;
        case "Mostly cloudy w/ showers":
          weatherClass = "cloud";
          break;
        case "Mostly clear":
          weatherClass = "sun";
          break;
        case "Clear":
          weatherClass = "sun";
          break;
        case "Cloudy":
          weatherClass = "cloud";
          break;
        default:
          break;
      }
      return weatherClass;
    },
    flightPriceClass(price) {
      if (price <= 100) {
        return "low-price";
      } else if (price <= 200) {
        return "mid-price";
      } else {
        return "high-price";
      }
    },
  },
  async created() {
    let cityCode = "";
    switch (this.cityName) {
      case "Amsterdam":
        cityCode = 249758;
        break;
      case "Madrid":
        cityCode = 308526;
        break;
      case "Budapest":
        cityCode = 187423;
        break;
      default:
        break;
    }
    // Get weather data
    const weatherConfig = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=hNC1No7iAnyICLk5rhLpUvGVFSlAHGCM`,
        weatherConfig
      );
      this.dailyForecasts = res.data.DailyForecasts;
    } catch (error) {
      console.error(error);
    }
  },
  props: ["cityName", "cityDescription", "flightDuration", "flightPrices"],
  data: () => ({
    dailyForecasts: [],
  }),
};
</script>

<style lang="scss">
.city {
  padding: 20px;
}

.city__heading {
  text-align: center;
}

.city__description {
  font-style: italic;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: $dark-grey;
}

.city__flight-list,
.city__weather-list {
  list-style-type: none;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
}

.city__flight-list-item,
.city__weather-list-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 2px;
  padding: 4px;

  @media (min-width: 768px) {
    padding: 10px;
    border-right: 1px solid $black;
    margin: 0;
  }

  &:first-child {
    @media (min-width: 768px) {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
  }

  &:last-child {
    border-right: none;
    @media (min-width: 768px) {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  &.rain {
    background-color: rgba(44, 130, 201, 0.7);
  }

  &.cloud {
    background-color: rgba(155, 155, 155, 0.5);
  }

  &.sun {
    background-color: rgba(255, 117, 5, 0.5);
  }
}

.city__weather-list-item-date {
  margin-bottom: 10px;
}

.city__weather-list-item-description {
  text-align: center;
  margin-bottom: 5px;
}

.city__flight-list-item {
  @media (min-width: 768px) {
    padding: 20px 10px;
  }
  &.low-price {
    background-color: #a3ff4a;
  }
  &.mid-price {
    background-color: #ffae19;
  }
  &.high-price {
    background-color: #ff6c4d;
  }
}

.city__flight-list-item-price {
  font-size: 24px;
}

.city__flight-list-item-day {
  font-weight: 700;
  margin-bottom: 5px;
}
</style>