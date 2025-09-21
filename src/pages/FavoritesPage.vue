<template>
  <section>
    <h2>Favorites</h2>
    <div v-if="items.length === 0" class="empty">You have no favorites yet.</div>
    <div v-else class="grid">
      <article v-for="m in items" :key="m.id" class="movie-card">
        <router-link :to="`/movie/${m.id}`" class="poster-link">
         <img :src="image(m.poster_path)" alt="" class="poster-img" v-if="m.poster_path" />
          <div v-else style="height:270px;display:flex;align-items:center;justify-content:center;color:#6b7280;">No Image</div>
        </router-link>
        <div class="meta">
           <h3 class="title">
            <router-link :to="`/movie/${m.id}`">{{ m.title }}</router-link>
          </h3>
          <div class="year">{{ year(m.release_date) }}</div>
          <div v-if="m.userRating">Your rating: {{ m.userRating }}</div>
          <div v-if="m.userNotes">Notes: {{ m.userNotes }}</div>
          <div style="margin-top:0.5rem;">
            <button class="btn-fav" @click="remove(m.id)">Remove</button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../store/favorites'
import { buildImagePath } from '../utils/api'

const fav = useFavoritesStore()

const items = computed(() => fav.items)

function remove(id) {
  fav.remove(id)
}

function image(path) {
  return buildImagePath(path, 'w342')
}
function year(d) {
  return d ? new Date(d).getFullYear() : '—'
}
</script>



<style scoped>
.poster-img{
  width: 100%;
}
.grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
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

.movie-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.movie-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.poster-link {
  display: block;
  width: 100%;
  aspect-ratio: 1/1; /* keeps image aspect ratio */
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
  color: #f59e0b; /* gold star color */
  font-weight: 600;
}

.btn-fav {
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 6px;
  background: #6366f1;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-fav:hover {
  background: #4f46e5;
}
</style>