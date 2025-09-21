<!-- <template>
  <section>
    <div class="card" role="region" aria-labelledby="search-heading">
      <h2 id="search-heading">Search</h2>

      <form @submit.prevent="onSubmit" novalidate>
        <div class="form-row">
          <div class="col">
            <label class="label">Title</label>
            <input v-model="form.title" class="input" placeholder="e.g. The Matrix" />
          </div>
          <div class="col">
            <label class="label">Year</label>
            <input v-model="form.year" class="input" placeholder="e.g. 1999" inputmode="numeric" />
          </div>
        </div>

        <div style="margin-bottom:1rem;">
          <label class="label">Genre (optional: use ID or name)</label>
          <input v-model="form.genre" class="input" placeholder="e.g. 28 or Action" />
        </div>

        <div style="display:flex; gap:0.5rem; align-items:center;">
          <button class="btn" :disabled="submitting">Search</button>
          <div v-if="formError" style="color:#dc2626; font-weight:600;">{{ formError }}</div>
        </div>
      </form>
    </div>

    <section style="margin-top:1.5rem;">
      <h3>Search Results</h3>
      <MovieList :results="results" :loading="loading" />
    </section>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MovieList from '../components/movies/MovieList.vue'
import { useMovies } from '../composables/useMovies'

const { results, loading, search } = useMovies()

const form = reactive({ title: '', year: '', genre: '' })
const submitting = ref(false)
const formError = ref('')

function validate() {
  if (!form.title && !form.year && !form.genre) {
    formError.value = 'Please fill at least one field (title, year, or genre).'
    return false
  }
  formError.value = ''
  return true
}

async function onSubmit() {
  if (!validate()) return
  submitting.value = true
  await search({ title: form.title, year: form.year, genre: form.genre })
  submitting.value = false
}
</script>

<style scoped>
h3 { margin-top: 0.25rem; }
</style> -->

<template>
  <section class="search-section">
    <div class="search-card" role="region" aria-labelledby="search-heading">
      <h2 id="search-heading" class="heading">🎬 Search Movies</h2>

      <form @submit.prevent="onSubmit" novalidate class="search-form">
        <!-- grid inputs -->
        <div class="form-grid">
          <div>
            <label class="label">Title</label>
            <input
              v-model="form.title"
              class="input"
              placeholder="e.g. The Matrix"
            />
          </div>
          <div>
            <label class="label">Year</label>
            <input
              v-model="form.year"
              class="input"
              placeholder="e.g. 1999"
              inputmode="numeric"
            />
          </div>
          <div>
            <label class="label">Genre (optional: use ID or name)</label>
            <input
              v-model="form.genre"
              class="input"
              placeholder="e.g. 28 or Action"
            />
          </div>
        </div>

        <!-- button + error -->
        <div class="form-actions">
          <button class="btn" :disabled="submitting">
            {{ submitting ? 'Searching…' : 'Search' }}
          </button>
          <p v-if="formError" class="error">{{ formError }}</p>
        </div>
      </form>
    </div>
  </section>
   <section class="results">
      <h3 class="heading-sm">Search Results</h3>
      <MovieList :results="results" :loading="loading" />
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MovieList from '../components/movies/MovieList.vue'
import { useMovies } from '../composables/useMovies'

// get composable state
const { results, loading, search } = useMovies()

// form state
const form = reactive({ title: '', year: '', genre: '' })
const submitting = ref(false)
const formError = ref('')

// simple validation: at least one field
function validate() {
  if (!form.title && !form.year && !form.genre) {
    formError.value = 'Please fill at least one field (title, year, or genre).'
    return false
  }
  formError.value = ''
  return true
}

async function onSubmit() {
  if (!validate()) return
  submitting.value = true
  await search({ title: form.title, year: form.year, genre: form.genre })
  submitting.value = false
}
</script>

<style scoped>
/* wrapper */
.search-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 2rem auto;
}

/* card */
.search-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* headings */
.heading {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}
.heading-sm {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  text-align: center;
}

/* grid for inputs */
.form-grid {
  display: grid;
  gap: 1rem;
}

  .form-grid {
    grid-template-columns: repeat(3, 1fr);
  }

@media (max-width: 767px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .form-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* labels & inputs */
.label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
}

/* button + error */
.form-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1rem;
}
.btn {
  background: #111;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover:not(:disabled) {
  background: #000;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error {
  color: #dc2626;
  font-weight: 600;
  font-size: 0.9rem;
}

/* results section */
.results {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
}
</style>
