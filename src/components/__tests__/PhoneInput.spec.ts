import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PhoneInput from '../PhoneInput.vue'

describe('PhoneInput', () => {
  it('renders properly', () => {
    const wrapper = mount(PhoneInput)
    expect(wrapper.find('input[type="tel"]').exists()).toBe(true)
  })

  it('updates model value on input', async () => {
    const wrapper = mount(PhoneInput)
    const input = wrapper.find('input[type="tel"]')
    await input.setValue('1234567890')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['1234567890'])
  })

  it('filters out non-numeric characters', async () => {
    const wrapper = mount(PhoneInput)
    const input = wrapper.find('input[type="tel"]')
    await input.setValue('123dsd@$%££456789a')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['123456789'])
  })

  it('sets placeholder based on locale', async () => {
    const originalNavigator = global.navigator
    global.navigator = { language: 'en-US' } as any
    const wrapper = mount(PhoneInput)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('input[type="tel"]').attributes('placeholder')).toBe('(123) 456-7890')
    global.navigator = originalNavigator
  })

  it('uses default placeholder when locale is not found', async () => {
    const originalNavigator = global.navigator
    global.navigator = { language: 'fr-FR' } as any
    const wrapper = mount(PhoneInput)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('input[type="tel"]').attributes('placeholder')).toBe('Phone number')
    global.navigator = originalNavigator
  })
})

