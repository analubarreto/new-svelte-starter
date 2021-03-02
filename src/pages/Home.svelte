<script>
	import { setupI18n, _ } from '../services/i18n.js';

	// setup i18n
	setupI18n({ withLocale: 'en' });
</script>

<main class="flex flex-col items-center">
	<h1 class="text-2xl">{$_('home.title')}</h1>
	<p>{$_('home.exampleText')}</p>
</main>
