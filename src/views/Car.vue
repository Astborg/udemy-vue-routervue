<template>
    <div v-if="car">
        <h1>Car!</h1>
        <p>{{car.name}}</p>
        <p>{{car.year}}</p>
        <p>{{car.price}}</p>
        <button @click="router.push(`/cars/${carId}/contact`)">Contact</button>
        <RouterView></RouterView>
    </div>
    <div v-else>
        <h1>Car not Found</h1>
    </div>
</template>
<script setup>
import {useRoute, useRouter, RouterView} from 'vue-router'
import cars from '../data/cars.json'


const route = useRoute()
const router = useRouter()
const carId = parseInt(route.params.id)
const car = cars.find(c => c.id === carId)


console.log(route.params)


</script>