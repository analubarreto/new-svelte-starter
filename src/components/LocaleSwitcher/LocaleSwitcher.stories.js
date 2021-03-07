import LocaleSwitcher from './LocaleSwitcher.svelte';
import { array } from '@storybook/addon-knobs';

// Default export
export default {
  title: 'Locale Switcher',
  component: LocaleSwitcher,
  argTypes: {
    value: {
      name: 'value',
      type: { name: 'string', required: true },
      default: '$locale',
      description: 'select element value',
      control: { type: 'text' }
    },
    langs: {
      name: 'langs',
      type: { name: 'array', required: true },
      description: 'array of languages',
      control: { type: null }
    },
    localeChanged: { action: 'localeChanged' }
  }
};

// Setting up knob variables
const defaultValue = [
  {
    value: 'en',
    name: 'English'
  },
  {
    value: 'pt',
    name: 'Português'
  },
  {
    value: 'es',
    name: 'Español'
  },
]

// Stories
const Template = ({ langs, localeChanged, ...args }) => ({
  Component: LocaleSwitcher,
  props: {
    langs: array('langs', defaultValue, '|'),
    ...args
  },
  on: {
    localeChanged: localeChanged,
  },
});

export const Default = Template.bind({});
Default.args = {
  switcher: {
    value: 'en',
    langs: defaultValue
  }
}