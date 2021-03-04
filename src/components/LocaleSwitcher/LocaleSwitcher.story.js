import LocaleSwitcher from './LocaleSwitcher.svelte';

export default {
  title: 'Locale Switcher',
  component: LocaleSwitcher,
  argTypes: {
    value: { control: 'text' },
    onBlur: { action: 'onBlur' }
  }
};

const Template = ({ onBlur, ...args }) => ({
  Component: LocaleSwitcher,
  props: args,
  on: {
    blur: onBlur,
  },
});

export const Default = Template.bind({});
Default.args = {
  switcher: {
    value: 'en'
  }
}