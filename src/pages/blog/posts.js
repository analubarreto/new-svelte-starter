import { writable } from 'svelte/store';

const posts = writable([
  {
    id: 1,
    title: 'First Post'
  },
  {
    id: 2,
    title:'Second Post'
  },
  {
    id: 3,
    title: 'Third Post'
  },
]);

export default posts;