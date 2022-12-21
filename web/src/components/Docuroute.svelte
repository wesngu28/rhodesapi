<script lang="ts">
	export let route = '';
	export let paramList = false;
	if (route.includes('search')) {
		paramList = true;
	}
	export let text = '';
	export let text2 = '';
</script>

<div>
	<p class="route">{route}</p>
	<p>{text}</p>
	{#if text2}
		<p>{text2}</p>
	{/if}
	{#if paramList}
		<ul>
			<li>_id, name, rarity, artist, va, affiliation, class, tag, gender, race</li>
			<li>headhunting, recruitable (yes or no)</li>
			<li>availability</li>
			<li>alter (no specified value), module (no specified value)</li>
			<li>building (building=factory)</li>
			<li>place of birth (birth=ursus)</li>
		</ul>
	{/if}
</div>

<style>
	div {
		background-color: rgb(57, 59, 59);
		padding: 1rem;
		margin-top: 3rem;
	}

	p {
		line-height: 1.5;
	}
</style>
