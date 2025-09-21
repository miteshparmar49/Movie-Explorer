import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieDetails from '@/components/movies/MovieDetails.vue'

describe('MovieDetails.vue', () => {
  let wrapper

  const mockMovie = {
    id: 123,
    title: 'The Matrix',
    poster_path: '/poster.jpg',
    overview: 'A computer hacker learns about the true nature of reality.',
    release_date: '1999-03-31',
    vote_average: 8.7
  }

  beforeEach(() => {
    wrapper = mount(MovieDetails, {
      props: { movie: mockMovie }
    })
  })

  it('renders the movie title', () => {
    expect(wrapper.text()).toContain('The Matrix')
  })

  it('renders the movie overview', () => {
    expect(wrapper.text()).toContain('A computer hacker learns about the true nature of reality.')
  })

  it('renders the release date', () => {
    expect(wrapper.text()).toContain('1999-03-31')
  })

  it('renders the rating', () => {
    expect(wrapper.text()).toContain('8.7')
  })

  it('displays the poster image', () => {
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toContain('/poster.jpg')
  })
})
