<script setup>

</script>

<template>
  <div class="header">
    <h1> Movies only for me</h1>
    <RouterLink to="/account" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Login</button>
    </RouterLink>
  </div>
</template>


<style  scoped>
.header {
  text-decoration: underline;
  text-align: center;
  font-size: 50px;
  /* margin-top: -60px; */
}
</style>