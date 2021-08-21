import { shallowMount } from '@vue/test-utils'
import Carousel from '@/components/Carousel.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Carousel, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
