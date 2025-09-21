<template>
  <div class="card">
    <div class="moviedetails">
      <img
        :src="poster"
        v-if="poster"
        class="poster"
        alt=""
      />
      <div class="info">
        <h2 class="title">
          {{ movie.title }}
          <small class="year">({{ releaseYear }})</small>
        </h2>
        <p v-if="movie.tagline" class="tagline">{{ movie.tagline }}</p>
        <p class="overview">{{ movie.overview }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average || '—' }}</p>
        <p><strong>Runtime:</strong> {{ movie.runtime ? movie.runtime + ' min' : '—' }}</p>
        <div class="actions">
          <button class="btn-fav" @click="toggleFav">
            {{ isFav ? 'Remove from Favorites' : 'Add to Favorites' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { buildImagePath } from '../../utils/api'
import { useFavoritesStore } from '../../store/favorites'

const props = defineProps({
  movie: { type: Object, required: true }
})

const poster = computed(() => buildImagePath(props.movie.poster_path, 'w500'))
const releaseYear = computed(() =>
  props.movie.release_date ? new Date(props.movie.release_date).getFullYear() : '—'
)

const fav = useFavoritesStore()
const isFav = computed(() => fav.isFavorite(props.movie.id))

function toggleFav() {
  fav.toggle(props.movie)
}
</script>

<style scoped>
/* card container */
.card {
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* flex layout for poster + info */
.moviedetails {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* stack on small screens */
  align-items: flex-start;
}

/* poster image */
.poster {
  width: 260px;
  height: 380px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

/* text info */
.info {
  flex: 1;
  min-width: 250px;
}

/* headings */
.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}
.year {
  color: #6b7280;
  font-size: 1rem;
  font-weight: 400;
}
.tagline {
  font-style: italic;
  color: #6b7280;
  margin-top: 0.25rem;
}
.overview {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

/* actions */
.actions {
  margin-top: 1rem;
}

/* button */
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

/* responsive tweaks */
@media (max-width: 640px) {
  .poster {
    width: 100%;
    height: auto;
  }
  .moviedetails {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .info {
    width: 100%;
  }
}
</style>
