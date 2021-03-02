<script>
	import { locale } from 'svelte-i18n';
	import { Link } from 'svelte-routing';
	import { setupI18n, _ } from '../services/i18n.js';
	import LocaleSwitcher from '../components/LocaleSwitcher.svelte';
</script>

<nav class="flex justify-evenly py-5">
	<div class="flex justify-evenly">
		<Link class="mr-10" to="/">{$_('navbar.home')}</Link>
		<Link class="mr-10" to="/about">{$_('navbar.about')}</Link>
		<Link class="mr-10" to="/blog">{$_('navbar.blog')}</Link>
	</div>
	<LocaleSwitcher
		value={$locale}
		on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
	/>
</nav>
