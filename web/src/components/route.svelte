<script lang="ts">
	import { currentDropdownSelection } from '../stores/stores';
</script>

<div class="text">{`https://rhodesapi.cyclic.app/api${$currentDropdownSelection}`}</div>

<style>
	.text {
		background-color: grey;
		padding: 0.75rem;
		font-size: 1rem;
	}
</style>
