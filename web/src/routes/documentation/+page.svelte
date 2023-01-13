<script lang="ts">
	import Docuroute from '../../components/Docuroute.svelte';
	import { onMount } from 'svelte';
	let surtr = {};
	let search = {};
	let recruit = {};
	onMount(async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/wesngu28/rhodesapi/main/web/src/stores/default.json'
		);
		const response2 = await fetch(
			'https://raw.githubusercontent.com/wesngu28/rhodesapi/main/web/src/routes/documentation/search.json'
		);
		const response3 = await fetch(
			'https://raw.githubusercontent.com/wesngu28/rhodesapi/main/web/src/routes/documentation/recruit.json'
		);
		surtr = await response.json();
		search = await response2.json();
		recruit = await response3.json();
	});
</script>

<svelte:head>
	<title>Docs - RhodesAPI</title>
</svelte:head>

<div class="wrapper">
	<div class="route-holder">
		<h1>API Routes</h1>
		<h2 id="Get">GET</h2>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/operator'}
			text={'Get a list of all operators and their associated information.'}
		/>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/operator/:name'}
			text={'Get a singular operator and their associated information.'}
		/>
		<p>https://rhodesapi.cyclic.app/api/operator/surtr</p>
		<pre>{JSON.stringify(surtr, null, 2)}</pre>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/skins/e2/:name'}
			text={'Get the e2 art of the specified operator, if they have one.'}
		/>
		<p>https://rhodesapi.cyclic.app/api/operator/surtr</p>
		<pre>{JSON.stringify(
				{
					e2: 'https://gamepress.gghttps://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_2.png'
				},
				null,
				2
			)}</pre>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/skins/:name'}
			text={'Get the skins of the specified operator, if they have one.'}
		/>
		<p>https://rhodesapi.cyclic.app/api/operator/surtr</p>
		<pre>{JSON.stringify(
				{
					'Liberté//Échec':
						'https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png'
				},
				null,
				2
			)}</pre>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/search?'}
			text={'Search operators based on provided query parameters. Non-case sensitive, for names with hyphens, hyphens can be provided in the request body but spaces are also supported.'}
		/>
		<p>https://rhodesapi.cyclic.app/api/search?race=sarkaz&class=guard&tags=dps</p>
		<pre>{JSON.stringify(search, null, 2)}</pre>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/recruit/:tagone/:tagtwo?:tagthree?'}
			text={"Similar to the search query but supports only up to three tags. Returns matching operators with the provided tags and are recruitable to simulate the game's recruit system."}
		/>
		<p>https://rhodesapi.cyclic.app/api/recruit/guard/dps/nuker/</p>
		<pre>{JSON.stringify(recruit, null, 2)}</pre>
		<h2 id="Post">POST</h2>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/operator/:name'}
			text={'Add a specified operator to the database.'}
		/>
		<h2 id="Put">PUT</h2>
		<Docuroute
			route={'https://rhodesapi.cyclic.app/api/operator/:name'}
			text={"Update a speciifed operator in the database. In order to account for game updates, this is only callable on operator's in which thedateAdded field is a week out."}
		/>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		overflow: hidden;
		width: 48rem;
		flex-wrap: wrap;
		word-wrap: break-word;
	}

	@media (max-width: 825px) {
		.wrapper {
			width: 30rem;
		}
	}

	@media (max-width: 525px) {
		.wrapper {
			width: 18rem;
		}
	}

	h1 {
		text-align: left;
	}

	pre {
		width: 48rem;
		max-height: 48rem;
		overflow-x: hidden;
		overflow-y: scroll;
		white-space: pre-wrap;
		margin: 1rem;
	}

	@media (max-width: 825px) {
		pre {
			width: 30rem;
		}
	}

	@media (max-width: 525px) {
		pre {
			width: 18rem;
		}
	}

	p {
		margin-top: 3rem;
	}
</style>
