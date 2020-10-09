<template>
    <div class="city">
        <h1 class="city__heading">{{ cityName }}</h1>
        <p class="city__description">{{ cityDescription }}</p>
    </div>
</template>

<script>
    export default {
        name: "City",
        components: {
            
        },
        created() {
            console.log(this.$props);
        },
        props: ['cityName', 'cityDescription'],
        data: () => ({
            
        }),
        methods: {

        }
    };
</script>

<style>
    .city {

    }
</style>