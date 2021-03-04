<script>
	// i18n
	import { setupI18n } from './services/i18n';
	// Svelte Routing
	import { Router, Route } from 'svelte-routing';
	// Router config
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Blog from './pages/blog/BlogIndex.svelte';
	import BlogPost from './pages/blog/BlogPost.svelte';

	import links from './components/Navbar/links';
	// Components
	import Navbar from './components/Navbar/Navbar.svelte';

	export let url = '';

	setupI18n({ withLocale: 'en' });
</script>

<Router {url}>
	<Navbar {links} />
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
