<script lang="ts">
	import { currentDropdownSelection } from '../stores/stores';

	let curr: string = '';
	currentDropdownSelection.subscribe((value) => {
		curr = value;
	});
</script>

<div class="text">{`https://rhodesapi.cyclic.app/api${curr}`}</div>

<style>
	.text {
		background-color: grey;
		padding: 0.75rem;
		font-size: 1rem;
	}
</style>
