<template>
<h2>{{ route.path }}</h2>
</template>

<style>

</style>

<script setup>
import { useRoute } from 'vue-router';

const route=useRoute();
console.log(route.path);
</script>