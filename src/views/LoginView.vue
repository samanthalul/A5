<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const showData = ref(false);
const submitEvent = () => {
  showData.value = true;
};
</script>

<template>
  <div class="register-container">
    <form @submit.prevent="submitEvent()">
      <input type="text" placeholder="Name" v-model="name" required />
      <br />
      <input type="email" placeholder="Email" v-model="email" required />
      <br />
      <input type="submit" value="Register" />
    </form>
    <div v-if="showData">
      <p>You submitted:</p>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template> 

<style  scoped>

</style>