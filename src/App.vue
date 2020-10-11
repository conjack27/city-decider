<template>
  <div id="app" :class="currentCity">
    <Dashboard />
  </div>
</template>

<script>
import store from "./store/store";
import Dashboard from "./components/Dashboard.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({}),
  store,
  computed: mapGetters(["currentCity"]),
  components: {
    Dashboard,
  },
};
</script>

<style lang='scss'>
@import "./assets/css/normalize.css";
@import "./assets/css/skeleton.css";

* {
  padding: 0;
  margin: 0;
  border: 0;
}

html {
  color: $black;
}

body {
  width: 100%;
  height: 100%;
  @media (min-width: 600px) {
    height: 100vh;
  }
}

#app {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  backdrop-filter: blur(5px);

  &::before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    filter: blur(5px);
    margin: 0px;
  }
}

.Amsterdam {
  background-image: url("./assets/img/amsterdam.jpg");
}

.Madrid {
  background-image: url("./assets/img/madrid.jpg");
}

.Budapest {
  background-image: url("./assets/img/budapest.jpg");
}
</style>
