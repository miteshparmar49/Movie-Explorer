// import { ref } from 'vue'
// import { searchMovies, getMovieDetails } from '../utils/api'

// export function useMovies() {
//   const results = ref([])
//   const totalResults = ref(0)
//   const loading = ref(false)
//   const error = ref(null)

//   async function search({ title, year, genre, page = 1 }) {
//     if (!title && !year && !genre) {
//       results.value = []
//       totalResults.value = 0
//       return
//     }
//     loading.value = true
//     error.value = null
//     try {
//       const q = title || ''
//       const res = await searchMovies({ query: q, year: year || undefined, with_genres: genre || undefined, page })
//       results.value = res.results || []
//       totalResults.value = res.total_results || 0
//     } catch (err) {
//       error.value = err
//     } finally {
//       loading.value = false
//     }
//   }

//   async function fetchDetails(id) {
//     loading.value = true
//     error.value = null
//     try {
//       const detail = await getMovieDetails(id)
//       return detail
//     } catch (err) {
//       error.value = err
//       return null
//     } finally {
//       loading.value = false
//     }
//   }

//   return {
//     results,
//     totalResults,
//     loading,
//     error,
//     search,
//     fetchDetails
//   }
// }

import { ref } from 'vue'
import { searchMovies, discoverMovies, getMovieDetails } from '../utils/api'

export function useMovies() {
  const results = ref([])
  const totalResults = ref(0)
  const loading = ref(false)
  const error = ref(null)

  async function search({ title, year, genre, page = 1 }) {
    if (!title && !year && !genre) {
      results.value = []
      totalResults.value = 0
      return
    }

    loading.value = true
    error.value = null

    try {
      let res
      if (title) {
        // has a title: use /search/movie
        res = await searchMovies({
          query: title,
          year: year || undefined,
          with_genres: genre || undefined,
          page
        })
      } else {
        // no title: use /discover/movie
        res = await discoverMovies({
          year: year || undefined,
          with_genres: genre || undefined,
          page
        })
      }

      results.value = res.results || []
      totalResults.value = res.total_results || 0
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  async function fetchDetails(id) {
    loading.value = true
    error.value = null
    try {
      return await getMovieDetails(id)
    } catch (err) {
      error.value = err
      return null
    } finally {
      loading.value = false
    }
  }

  return { results, totalResults, loading, error, search, fetchDetails }
}
