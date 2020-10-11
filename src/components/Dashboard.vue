<template>
  <div class="container">
    <div class="row dashboard__wrapper">
      <div class="column dashboard">
        <div class="dashboard__header">
          <button
            @click="changeActiveCity('Amsterdam')"
            class="dashboard__header-btn dashboard__header-btn--left"
            :class="{ active: activeCity === 'Amsterdam' }"
          >
            Amsterdam
          </button>
          <button
            @click="changeActiveCity('Madrid')"
            class="dashboard__header-btn dashboard__header-btn--middle"
            :class="{ active: activeCity === 'Madrid' }"
          >
            Madrid
          </button>
          <button
            @click="changeActiveCity('Budapest')"
            class="dashboard__header-btn dashboard__header-btn--right"
            :class="{ active: activeCity === 'Budapest' }"
          >
            Budapest
          </button>
          <div
            :class="underlinePosition"
            class="dashboard__header-underline"
          ></div>
        </div>
        <City
          v-show="city.name === activeCity"
          v-for="(city, i) in cities"
          :key="i"
          :cityName="city.name"
          :cityDescription="city.description"
          :flightDuration="city.flightDuration"
          :flightPrices="city.flightPrices"
        />
      </div>
    </div>
  </div>
</template>

<script>
import City from "./City";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: {
    City,
  },
  created() {},
  methods: {
    ...mapMutations(["setCurrentCity"]),
    ...mapGetters(["currentCity"]),
    changeActiveCity(city) {
      this.activeCity = city;
      this.setCurrentCity(city);
      switch (city) {
        case "Amsterdam":
          this.underlinePosition = "left";
          break;
        case "Madrid":
          this.underlinePosition = "middle";
          break;
        case "Budapest":
          this.underlinePosition = "right";
          break;
        default:
          break;
      }
    },
  },
  data: () => ({
    underlinePosition: "left",
    cities: [
      {
        name: "Amsterdam",
        description: "A paradise for cyclists",
        flightDuration: 60,
        flightPrices: [
          { price: 120, day: "Monday" },
          { price: 140, day: "Tuesday" },
          { price: 200, day: "Wednesday" },
          { price: 80, day: "Thursday" },
          { price: 160, day: "Friday" },
        ],
      },
      {
        name: "Madrid",
        description: "Siestas in the park",
        flightDuration: 110,
        flightPrices: [
          { price: 80, day: "Monday" },
          { price: 125, day: "Tuesday" },
          { price: 92, day: "Wednesday" },
          { price: 73, day: "Thursday" },
          { price: 121, day: "Friday" },
        ],
      },
      {
        name: "Budapest",
        description: "One of the most photogenic cities in Europe",
        flightDuration: 320,
        flightPrices: [
          { price: 240, day: "Monday" },
          { price: 300, day: "Tuesday" },
          { price: 175, day: "Wednesday" },
          { price: 151, day: "Thursday" },
          { price: 220, day: "Friday" },
        ],
      },
    ],
    activeCity: "Amsterdam",
  }),
};
</script>

<style lang='scss'>
.dashboard__wrapper {
  display: flex;
}

div.column.dashboard {
  border-radius: 12px;
  border: 1px solid $grey;
  margin: 200px auto 0 auto;
  max-width: 600px;
  background-color: $white;
}

.dashboard__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
}

.dashboard__header-btn {
  font-family: inherit;
  text-decoration: none;
  background-color: transparent;
  font-size: 14px;
  color: inherit;
  cursor: pointer;
  width: 100%;
  padding: 5px;
  border: none;
  margin-bottom: 0;
  text-transform: none;

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 15px 25px;
  }

  &.active {
    color: $blue;
  }
}

.dashboard__header-btn--left {
  &.active {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid $blue;
  }
}

.dashboard__header-btn--middle {
  &.active {
    border-radius: 0;
    border-right: 1px solid $blue;
    border-left: 1px solid $blue;
  }
}

.dashboard__header-btn--right {
  &.active {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 1px solid $blue;
  }
}

.dashboard__header-underline {
  width: 33.33%;
  display: block;
  top: 98%;
  position: absolute;
  height: 2px;
  background-color: $blue;
  transition: left 0.25s ease-in;

  &.left {
    left: 0;
  }

  &.middle {
    left: 33.33%;
  }

  &.right {
    left: 66.66%;
  }
}
</style>
