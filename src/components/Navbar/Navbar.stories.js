import Navbar from './Navbar.svelte';
import { array } from '@storybook/addon-knobs';

// Default export
export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    links: {
      name: links,
      type: { name: 'array', required: true },
      description: 'navbar links',
      control: { type: null }
    }
  }
}

// Setting up knob variables 
const defaultValue = [
  {
    name: 'navbar.home',
    url: '/'
  },
  {
    name: 'navbar.about',
    url: '/about'
  },
  {
    name: 'navbar.blog',
    url: '/blog'
  }
] 

// Stories
const Template = ({ links, ...args }) => ({
  Component: Navbar,
  props: {
    links: array('links', defaultValue, ':'),
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  navbar: {
    links: defaultValue
  }
}