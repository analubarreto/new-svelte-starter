<script>
	// Svelte Routing
	import { Router, Route } from 'svelte-routing';
	// Pages
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Blog from './pages/blog/BlogIndex.svelte';
	import BlogPost from './pages/blog/BlogPost.svelte';
	// Components
	import Navbar from './components/Navbar.svelte';

	export let url = '';
</script>

<Router {url}>
	<Navbar />
	<div>
		<Route path="blog/:id" component={BlogPost} />
		<Route path="blog" component={Blog} />
		<Route path="about" component={About} />
		<Route path="/"><Home /></Route>
	</div>
</Router>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
