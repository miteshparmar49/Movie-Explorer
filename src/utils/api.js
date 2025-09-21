// import axios from 'axios'

// const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY
// const BASE = 'https://api.themoviedb.org/3'
// const IMAGE_BASE = 'https://image.tmdb.org/t/p/'

// if (!TMDB_KEY) {
//   console.warn('VITE_TMDB_API_KEY is not set in .env')
// }

// const client = axios.create({
//   baseURL: BASE,
//   params: { api_key: TMDB_KEY, language: 'en-US' }
// })

// export function buildImagePath(path, size = 'w342') {
//   if (!path) return null
//   return `${IMAGE_BASE}${size}${path}`
// }

// export async function searchMovies({ query, year, with_genres, page = 1 }) {
//   const params = { query, page }
//   if (year) params.year = year
//   if (with_genres) params.with_genres = with_genres
//   const res = await client.get('/search/movie', { params })
//   return res.data
// }

// export async function getMovieDetails(id) {
//   const res = await client.get(`/movie/${id}`)
//   return res.data
// }

// /* Optionally: fetch genre list (not implemented in UI by default) */
// export async function getGenres() {
//   const res = await client.get('/genre/movie/list')
//   return res.data.genres || []
// }
// src/utils/api.js
import axios from 'axios'

const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE = 'https://api.themoviedb.org/3'
const IMAGE_BASE = 'https://image.tmdb.org/t/p/'

const client = axios.create({
  baseURL: BASE,
  params: { api_key: TMDB_KEY, language: 'en-US' }
})

export function buildImagePath(path, size = 'w185') {
  if (!path) return null
  return `${IMAGE_BASE}${size}${path}`
}

export async function searchMovies({ query, year, with_genres, page = 1 }) {
  const params = { query, page }
  if (year) params.year = year
  if (with_genres) params.with_genres = with_genres
  const res = await client.get('/search/movie', { params })
  return res.data
}

// 👇 add this
export async function discoverMovies({ year, with_genres, page = 1 }) {
  const params = { page }
  if (year) params.year = year
  if (with_genres) params.with_genres = with_genres
  const res = await client.get('/discover/movie', { params })
  return res.data
}

export async function getMovieDetails(id) {
  const res = await client.get(`/movie/${id}`)
  return res.data
}

export async function getGenres() {
  const res = await client.get('/genre/movie/list')
  return res.data.genres || []
}
