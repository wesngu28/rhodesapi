<script lang="ts">
	export let route = '';
	export let age = '';
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
	{#if paramList && age === "old"}
		<ul>
			<li>_id, name, rarity, artist, va, affiliation, class, tag, gender, race</li>
			<li>headhunting, recruitable (yes or no)</li>
			<li>availability</li>
			<li>alter (no specified value), module (no specified value)</li>
			<li>building (building=factory)</li>
			<li>place of birth (birth=ursus)</li>
		</ul>
	{/if}
	{#if paramList && age === "new"}
		<ul>
			<li>_id</li>
			<li>rarity (rarity=4)</li>
			<li>artist (artist=namie)</li>
			<li>va (va=Shizuka Ishigami)</li>
			<li>affiliation (affiliation=victoria)</li>
			<li>class (class=charger)</li>
			<li>tag (tag=vanguard)</li>
			<li>headhunting (headhunting=yes)</li>
			<li>recruitable (recruitable=yes)</li>
			<li>availability (availability=Global)</li>
			<li>gender (gender=female)</li>
			<li>race (race=sarkaz)</li>
			<li>alter (alter=false)</li>
			<li>module (module=true)</li>
			<li>base skill's building (building=factory)</li>
			<li>place of birth (place_of_birth=ursus)</li>
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
