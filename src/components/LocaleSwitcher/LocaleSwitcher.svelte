<script>
	import { createEventDispatcher } from 'svelte';

	export let value;
	export let langs;

	const dispatch = createEventDispatcher();

	function switchLocale(e) {
		e.preventDefault();
		dispatch('localeChanged', e.target.value);
	}
</script>

<div>
	<select class="p-2 border-none select" {value} on:blur={switchLocale}>
		{#each langs as lang}
			<option value={lang.value}>{lang.name}</option>
		{/each}
	</select>
</div>
