<script>
	import { createEventDispatcher } from 'svelte';

	export let value;

	const dispatch = createEventDispatcher();

	function switchLocale(e) {
		e.preventDefault();
		dispatch('locale-changed', e.target.value);
	}
</script>

<div>
	<select {value} on:blur={switchLocale}>
		<option value="en">English</option>
		<option value="pt">Português</option>
		<option value="es">Español</option>
	</select>
</div>
