import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(App)
    // to figure out if the App renders, we can check that the title is displayed...
    expect(wrapper.text()).to.include(`Welcome to the challenge app`)
  })
})

