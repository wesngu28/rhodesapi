<script lang="ts">
	import { currentDropdownSelection, api, currResponse, operatorName } from '../stores/stores';
	let search = '';
	const handleKeydown = async (event: KeyboardEvent) => {
		if (search) {
			if (event.key === 'Enter') {
				const response = await fetch(`https://rhodesapi.cyclic.app/api${$currentDropdownSelection}${search}`, {
					method: $api,
					mode: 'cors'
				});
				const json = await response.json();
				currResponse.set(json);
				operatorName.set(search);
			}
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<input type="text" bind:value={search} />

<style>
	input {
		width: 25vw;
		padding: 0.75rem;
	}
	@media (max-width: 550px) {
		input {
			width: 75vw;
		}
	}
</style>
