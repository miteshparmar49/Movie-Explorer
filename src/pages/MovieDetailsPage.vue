<template>
  <section>
    <div v-if="loading" class="card">Loading...</div>
    <div v-else-if="error" class="card">Error loading movie.</div>
    <div v-else-if="movie">
      <MovieDetails :movie="movie" />
    </div>
    <div v-else class="card">Movie not found</div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MovieDetails from '../components/movies/MovieDetails.vue'
import { useMovies } from '../composables/useMovies'

const route = useRoute()
const { fetchDetails, loading, error } = useMovies()
const movie = ref(null)

onMounted(async () => {
  const id = route.params.id
  if (id) {
    movie.value = await fetchDetails(id)
  }
})
</script>
