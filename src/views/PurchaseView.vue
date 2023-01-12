<script setup>
import { ref } from "vue";
import axios from "axios";
import SiteModal1Vue from "../components/SiteModal (1).vue";
const movies = ref("");
const response = ref(null);
const showModal = ref(false);
const selectedid = ref(0);

const openmodal = (id) => {
  showModal.value = true;
  selectedid.value = id;
};
const closemodal = () => {
  showModal.value = false;
};

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  console.log(movie.value);
  response.value = (
    await getData("https://api.themoviedb.org/3/trending/movies/week", {
      params: {
        api_key: "24230a1cad348053b89210c835f908ae",
      },
    })
  ).data["results"];
};

await getMovies();
</script>

<template>
  <h1>Trending Movies</h1>
  <div v-for="result in response" class="grid-container">
    <img
      @click="openModal(result.id)"
      v-bind:src="'https://image.tmdb.org/t/p/w500/' + result.poster_path"
    />
  </div>
  <SiteModal1Vue
    >v-if="showModal" @toggleModal='closeModal()' :id="selectedId</SiteModal1Vue
  >
</template>

<style scoped>
.grid-container {
  display: flex;
  display: inline-grid;
  align-content: space-evenly;
  padding: 15px;
  gap: 10%;
  margin-bottom: -260px;
}
</style>
