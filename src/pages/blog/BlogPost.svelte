<script>
	import { Link } from 'svelte-routing';

	export let id;
</script>

<main class="flex flex-col items-center">
	<h1 class="text-2xl">Blog post id: {id}</h1>
	<Link to="/blog">Back to Blog</Link>
</main>
