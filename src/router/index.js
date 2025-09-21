import { createRouter, createWebHistory } from 'vue-router'

const SearchPage = () => import('../pages/SearchPage.vue')
const FavoritesPage = () => import('../pages/FavoritesPage.vue')
const MovieDetailsPage = () => import('../pages/MovieDetailsPage.vue')

const routes = [
  { path: '/', name: 'search', component: SearchPage },
  { path: '/favorites', name: 'favorites', component: FavoritesPage },
  { path: '/movie/:id', name: 'movie-details', component: MovieDetailsPage, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
