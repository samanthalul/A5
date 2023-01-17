<script setup>
import { ref } from "vue";
import SiteModal from "../components/SiteModal (1).vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const showModal = ref(false);
const selectedId = ref(0);
const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  await store.getMovies(genre.value);
};
</script>

<template>
  <RouterLink to="/cart" custom v-slot="{ navigate }">
    <button @click="navigate"  class="Banana2" role="link">Cart</button>
  </RouterLink>
  <select v-model="genre" class="Banana" @change="getGenres()">
    <option value="28">Action</option>
    <option value="10751">Family</option>
    <option value="878">Science Fiction</option>
    <option value="12">Adventure</option>
    <option value="16">Animation</option>
    <option value="35">Comedy</option>
    <option value="80">Crime</option>
    <option value="99">Documentary</option>
    <option value="18">Drama</option>
    <option value="14">Fantasy</option>
    <option value="36">History</option>
    <option value="80">Horror</option>
    <option value="27">Fantasy</option>
    <option value="10402">Music</option>
    <option value="9648">Mystery</option>
    <option value="10749">Romance</option>
    <option value="10770">T.V Movie</option>
    <option value="53">Thriller</option>
    <option value="10752">War</option>
    <option value="37">Western</option>
    
  </select>
  <div class="purchase-container">
    <img
      v-for="movie in store.movies"
      :id="movie.id"
      @click="openModal(movie.id)"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
    />
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
.purchase-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
img {
  width: 200px;
  aspect-ratio: 2 / 3;
}
.Banana{ 
  Width: 200px;
  height: 50px;
  font-size:40px;
}
.Banana2{
  width:200px;
  height:50px;
  margin-top:-20px;
  padding:0px;
  font-size: 40px; 
}


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
