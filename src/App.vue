<template>
  <div id="app">
    <Dashboard  />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  data:() => ({
    cities:[
      {
        name: 'Amsterdam',
        description: 'A cyclists dream'
      },
      {
        name: 'Madrid',
        description: 'A cyclists dream'
      },
      {
        name: 'Amsterdam',
        description: 'A cyclists dream'
      }
    ]
  }),
  components: {
    Dashboard,
  },
};
</script>

<style lang='scss'>
@font-face {
  font-family: "Lato-Light";
  src: local("Lato-Light"), url("./fonts/Lato-Light.ttf") format("truetype"),
    url("/fonts/Lato-Light.woff2") format("woff2"),
    url("/fonts/Lato-Light.woff") format("woff");
}
html {
  font-family: "Lato-Light", Helvetica, sans-serif;
}

body {
  margin: 20px;
}
</style>
