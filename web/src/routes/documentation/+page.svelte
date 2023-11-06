<script lang="ts">
	import Docuroute from '../../components/Docuroute.svelte';
	import { onMount } from 'svelte';
	let siege = {};
	let search = {};
	let recruit = {};
  let arts = {};
	onMount(async () => {
		const response = await fetch(
			'https://api.rhodesapi.com/api/operator/siege'
		);
		const response2 = await fetch(
			'https://api.rhodesapi.com/api/search?race=sarkaz&class=guard&tags=dps'
		);
		const response3 = await fetch(
			'https://api.rhodesapi.com/api/recruit?tag1=vanguard&tag2=dps'
		);
    const art = await fetch("https://api.rhodesapi.com/api/art/frostleaf")
		siege = await response.json();
		search = await response2.json();
		recruit = await response3.json();
    arts = await art.json()
	});
</script>

<svelte:head>
	<title>Docs - RhodesAPI</title>
</svelte:head>

<div class="wrapper">
	<div class="route-holder">
		<h1>API Routes</h1>
    <a href="/documentation/old">Old Route Documentation</a>
		<h2 id="Get">GET Operators</h2>
    <p>Pass in an exclude parameter to exclude certain keys from the returned json. For example, ?exclude=talents to exclude talents.</p>
		<Docuroute
			route={'https://api.rhodesapi.com/api/operator'}
			text={'Get a list of all operators and their associated information.'}
		/>
		<Docuroute
			route={'https://api.rhodesapi.com/api/operator/:name'}
			text={'Get a singular operator and their associated information.'}
		/>
		<p>https://api.rhodesapi.com/api/operator/siege</p>
		<pre>{JSON.stringify(siege, null, 2)}</pre>
		<Docuroute
			route={'https://api.rhodesapi.com/api/art/frostleaf'}
			text={'Get all the art of the specified operator, if they have one. Pass in ?e2=true to get only the e2.'}
		/>
		<p>https://api.rhodesapi.com/api/operator/frostleaf</p>
		<pre>{JSON.stringify(arts, null, 2)}</pre>
		<Docuroute
			route={'https://api.rhodesapi.com/api/search?'}
			text={'Search operators based on provided query parameters. Non-case sensitive, for names with hyphens, hyphens can be provided in the request body but spaces are also supported.'}
      age={"new"}
    />
		<p>https://api.rhodesapi.com/api/search?race=sarkaz&class=guard&tags=dps</p>
		<pre>{JSON.stringify(search, null, 2)}</pre>
		<Docuroute
			route={'https://api.rhodesapi.com/api/recruit?tag1=tagone&tag2=tagtwo&tag3=tagthree'}
			text={"Similar to the search query but supports only up to three tags. Returns matching operators with the provided tags and are recruitable to simulate the game's recruit system."}
		/>
		<p>https://api.rhodesapi.com/api/recruit?tag1=vanguard&tag2=dps</p>
		<pre>{JSON.stringify(recruit, null, 2)}</pre>
	</div>
</div>

<style>
  a {
    font-size: small;
    text-decoration: none;
    color: antiquewhite;
  }
  a:hover {
    text-decoration: underline;
  }
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
