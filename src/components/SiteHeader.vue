<script setup>

</script>

<template>
    <div class="header">
        <h1> Movies for everyone</h1>
        <RouterLink to="/login" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">Login</button>
</RouterLink>
    </div>
</template>


<style  scoped>
.header { 
text-align:center
}
</style>