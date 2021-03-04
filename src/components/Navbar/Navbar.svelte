<script>
	import { locale } from 'svelte-i18n';
	import { Link } from 'svelte-routing';
	import { setupI18n, _ } from '../../services/i18n.js';
	import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher.svelte';
	import langs from '../LocaleSwitcher/langs';

	export let links;
</script>

<nav class="flex justify-evenly py-5">
	<div class="flex justify-evenly">
		{#each links as link}
			<Link class="mr-10" to={link.url}>{$_(link.name)}</Link>
		{/each}
	</div>
	<LocaleSwitcher
		{langs}
		value={$locale}
		on:localeChanged={(e) => setupI18n({ withLocale: e.detail })}
	/>
</nav>
