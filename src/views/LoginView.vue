<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="home-container">
    <h1>Login To Browse Movies</h1>
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
    <div v-if="error" class="error">
      <p>HaHa! gimme 100% to enter pls pls pls pls pls pls pls pls pls pls pls pls</p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 500px;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  font-family: "Play", sans-serif;
  line-height: 10px;
}

form {
  display: flex;
  flex-direction: column;
  column-gap: 20px;
}

form input {
  padding: 10px;
  color: black;
  font-size: 15px;
  margin-top: 10px;
}

.error {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
}

.background {
  margin-top: -50px;
}
</style>
