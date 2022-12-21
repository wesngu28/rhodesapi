<script lang="ts">
	import { currentDropdownSelection, api, currResponse } from "../stores/stores";
  let search = '';
  let curr = ''
  currentDropdownSelection.subscribe(value => {
		curr = value;
	});
  const handleKeydown = async (event: KeyboardEvent) => {
		if (search) {
			if (event.key === 'Enter') {
        const response = await fetch(`https://rhodesapi.cyclic.app/api${curr}${search}`, {
          mode: 'cors',
        });
        const json = await response.json();
				currResponse.set(json)
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
</style>