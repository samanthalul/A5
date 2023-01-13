<script setup>
import SiteFooter from "../components/SiteFooter.vue";
import axios from "axios";
import { ref } from 'vue';
import SiteModal from '../components/SiteModal (1).vue';
const showModal = ref(false);
const selectedId = ref(0);
const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  showModal.value = false;
};

const data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
  params: {
    api_key: "f944b70daa59b60504fca0c383e63483"
  }
})).data.results;
console.log(data)
</script>

<template>
  <div>
    <h1> movies that are just for me and no one else!</h1>

  </div>

  <div>
    <img v-for="movie in data" @click="openModal(movie.id)" class="poster"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div>
    <SiteFooter />
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-family: 'Zen Dots', cursive;
  padding: 20px;
  font-size: 25px;
  text-align: center;
  font-size: 40px;
}

img {
  width: 270px;
  border-style: solid;
  border-color: rgb(33, 8, 156);
  border-width: 15px;
  margin-right: 10px;
  margin-top: 15px;
}

footer {
  font-size: 15px;
  font-family: 'Play', sans-serif;
  text-align: center;
  padding: 3px;
  background-color: rgb(33, 8, 156);
  color: navy;
  position: relative;
  bottom: -10px;

}
</style>
