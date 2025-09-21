<template>
  <article class="movie-card" :aria-label="movie.title">
    <router-link :to="`/movie/${movie.id}`" class="poster-link">
      <img :src="posterUrl" :alt="movie.title" v-if="posterUrl" />
      <div v-else class="no-image">No Image</div>
    </router-link>

    <div class="meta">
      <h3 class="title">
        <router-link :to="`/movie/${movie.id}`">{{ movie.title }}</router-link>
      </h3>
      <div class="sub">
        <span class="year">{{ releaseYear }}</span>
        <span v-if="movie.vote_average" class="rating">
          ★ {{ movie.vote_average.toFixed(1) }}
        </span>
      </div>

      <!-- new inputs for rating and notes -->
      <div v-if="!isFav" class="fav-form">
        <label class="label-sm">Your Rating (1–10)</label>
        <input
          v-model="userRating"
          type="number"
          min="1"
          max="10"
          class="input"
          placeholder="Rate this movie"
        />

        <label class="label-sm">Notes</label>
        <textarea
          v-model="userNotes"
          class="input"
          rows="2"
          placeholder="Write a note"
        ></textarea>
      </div>

      <button class="btn-fav" @click="toggleFav">
        {{ isFav ? 'Remove from Favorites' : 'Add to Favorites' }}
      </button>
    </div>
  </article>
</template>


<script setup>
import { ref, computed } from 'vue'
import { buildImagePath } from '../../utils/api'
import { useFavoritesStore } from '../../store/favorites'

const props = defineProps({
  movie: { type: Object, required: true }
})

const favorites = useFavoritesStore()
const isFav = computed(() => favorites.isFavorite(props.movie.id))

const userRating = ref('')
const userNotes = ref('')

function toggleFav() {
  if (isFav.value) {
    favorites.remove(props.movie.id)
  } else {
    favorites.add({
      ...props.movie,
      userRating: userRating.value,
      userNotes: userNotes.value
    })
    // clear form
    userRating.value = ''
    userNotes.value = ''
  }
}

const posterUrl = computed(() =>
  buildImagePath(props.movie.poster_path, 'w342')
)
const releaseYear = computed(() => {
  if (!props.movie.release_date) return '—'
  return new Date(props.movie.release_date).getFullYear()
})
</script>


<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.movie-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.poster-link {
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
}
.poster-link img {
  width: auto;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  display: flex;
  margin: 0 auto;
}
.movie-card:hover .poster-link img {
  transform: scale(1.05);
}
.no-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  color: #6b7280;
  font-size: 0.9rem;
  height: 100%;
}
.meta {
  padding: 0.75rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.title a{
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
}
.title a:hover{
  color: #4f46e5;;
}
.sub {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #6b7280;
}
.rating {
  color: #f59e0b;
  font-weight: 600;
}
.btn-fav {
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 6px;
  background: #111;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-fav:hover {
  background: #4f46e5;
}
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 0.5rem;
}
.input:focus {
  border-color: #111;
}
.input{
  box-sizing: border-box;
}
.fav-form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.5rem;
}
.label-sm {
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
