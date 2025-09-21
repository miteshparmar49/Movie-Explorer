import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const key = 'movie_explorer_favorites'
  const items = ref(JSON.parse(localStorage.getItem(key) || '[]'))

  function persist() {
    localStorage.setItem(key, JSON.stringify(items.value))
  }

  function add(movie) {
    if (!items.value.find(m => m.id === movie.id)) {
      items.value.push(movie)
      persist()
    }
  }

  function remove(id) {
    items.value = items.value.filter(m => m.id !== id)
    persist()
  }

  function toggle(movie) {
    if (items.value.find(m => m.id === movie.id)) {
      remove(movie.id)
    } else {
      add(movie)
    }
  }

  function isFavorite(id) {
    return items.value.some(m => m.id === id)
  }

  return { items, add, remove, toggle, isFavorite }
})
