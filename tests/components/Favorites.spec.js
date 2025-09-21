import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import FavoritesPage from '@/pages/FavoritesPage.vue'
import { useFavoritesStore } from '@/store/favorites'

describe('FavoritesPage.vue', () => {
  let wrapper
  let favoritesStore

  beforeEach(() => {
    wrapper = mount(FavoritesPage, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    })

    favoritesStore = useFavoritesStore()
  })

  it('renders empty state when no favorites', () => {
    favoritesStore.favorites = []
    expect(wrapper.text()).toContain('No favorite movies yet')
  })

  it('renders a list of favorite movies', async () => {
    favoritesStore.favorites = [
      { id: 1, title: 'Inception', poster_path: '/inception.jpg', vote_average: 8.8 },
      { id: 2, title: 'Interstellar', poster_path: '/interstellar.jpg', vote_average: 8.6 }
    ]
    await wrapper.vm.$nextTick()

    // Should show movie titles
    expect(wrapper.text()).toContain('Inception')
    expect(wrapper.text()).toContain('Interstellar')

    // Should render correct number of cards
    const cards = wrapper.findAll('[data-test="favorite-card"]')
    expect(cards.length).toBe(2)
  })

  it('allows removing a favorite movie', async () => {
    favoritesStore.favorites = [
      { id: 1, title: 'Inception', poster_path: '/inception.jpg', vote_average: 8.8 }
    ]
    await wrapper.vm.$nextTick()

    const removeBtn = wrapper.find('[data-test="remove-favorite"]')
    expect(removeBtn.exists()).toBe(true)
    await removeBtn.trigger('click')

    expect(favoritesStore.removeFavorite).toHaveBeenCalled()
  })
})
