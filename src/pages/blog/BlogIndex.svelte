<script>
	import { Link } from 'svelte-routing';
	import posts from './posts';
	import { _ } from '../../services/i18n';
</script>

<main class="flex flex-col items-center p-20">
	<h1 class="text-2xl">{$_('blog.title')}</h1>
	<div class="flex flex-col self-start mt-5">
		{#each posts as post}
			<Link to={`blog/${post.id}`}>{$_(post.title)}</Link>
		{/each}
	</div>
</main>
