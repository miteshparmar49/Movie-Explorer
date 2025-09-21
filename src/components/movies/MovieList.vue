<template>
  <div>
    <div v-if="loading"><slot name="loading">Loading...</slot></div>
    <div v-else-if="results.length === 0" class="empty">No movies found.</div>
    <div v-else class="grid">
      <MovieCard v-for="m in results" :key="m.id" :movie="m" />
    </div>
  </div>
</template>

<script setup>
import MovieCard from './MovieCard.vue'
const props = defineProps({
  results: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false }
})
</script>

<style scoped>
.grid { margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
 }
 .empty{
  text-align: center;
}

 .grid {
    grid-template-columns: repeat(3, 1fr);
  }

@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
