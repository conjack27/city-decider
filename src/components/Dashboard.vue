<template>
  <main class="dashboard">
    <article class="dashboard__header">
      <button @click="showCity('amsterdam')" class="dashboard__header-btn">Amsterdam</button>
      <button @click="showCity('amsterdam')" class="dashboard__header-btn">Madrid</button>
      <button @click="showCity('amsterdam')" class="dashboard__header-btn">Budapest</button>
    </article>
    <City v-show="city.isActive" v-for="(city, i) in cities" :key='i' :cityName="city.name" :cityDescription="city.description" />
  </main>
</template>

<script>
import City from "./City";
export default {
  name: 'Dashboard',
  components: {
    City
  },
  created() {
  },
  data: () => ({
    cities: [
      {
        name: 'Amsterdam',
        description: 'A paradise for cyclists',
        isActive: false
      },
      {
        name: 'Madrid',
        description: 'Siestas in the park',
        isActive: false
      },
      {
        name: 'Budapest',
        description: 'One of the most photogenic cities in Europe',
        isActive: false
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  .dashboard {
    width: 100%;
    border-radius: 12px;
    background-color: snow;
  }
</style>
