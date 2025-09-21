import { mount } from '@vue/test-utils'
import SearchPage from '../../src/pages/SearchPage.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('SearchPage', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('shows validation message when submitting empty form', async () => {
    const wrapper = mount(SearchPage)
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.text()).toContain('Please fill at least one field')
  })
})
