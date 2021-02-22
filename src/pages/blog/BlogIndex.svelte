<script>
	// Imports - Routing
	import { Link } from 'svelte-routing';
	// Imports - Store
	import posts from './posts';
</script>

<main class="flex flex-col items-center p-20">
	<h1 class="text-2xl">Blog Index Page</h1>
	<div class="flex flex-col self-start mt-5">
		{#each $posts as post}
			<Link to={`blog/${post.id}`}>{post.title}</Link>
		{/each}
	</div>
</main>
