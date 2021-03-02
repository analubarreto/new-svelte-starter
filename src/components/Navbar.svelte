<script>
	import { Link } from 'svelte-routing';
	import { setupI18n, _ } from '../services/i18n.js';

	// setup i18n
	setupI18n({ withLocale: 'pt' });
</script>

<nav class="flex justify-evenly py-5">
	<Link to="/">{$_('navbar.home', { default: 'Home' })}</Link>
	<Link to="/about">{$_('navbar.about', { default: 'About' })}</Link>
	<Link to="/blog">{$_('navbar.blog', { default: 'Blog' })}</Link>
</nav>
