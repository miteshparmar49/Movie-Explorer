import { mount } from '@vue/test-utils'
import MovieCard from '../../src/components/movies/MovieCard.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('MovieCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders movie title and year', () => {
    const movie = { id: 1, title: 'Test', release_date: '2000-01-01', vote_average: 7.5 }
    const wrapper = mount(MovieCard, { props: { movie } })
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('2000')
  })
})
