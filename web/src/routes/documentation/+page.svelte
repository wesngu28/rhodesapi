<script lang="ts">
	import { onMount } from 'svelte'
	function scrollTo(this: HTMLElement) {
		const scroll = document.getElementById(this.textContent!)!
		scroll.scrollIntoView()
	}
	let surtr = {};
	onMount(async () => {
		const response = await fetch('https://raw.githubusercontent.com/wesngu28/rhodesapi/docusite/web/src/stores/default.json');
		surtr = await response.json();
	});
</script>

<div class="wrapper">
	<div class="route-holder">
		<h1>API Routes</h1>
		<h2 id="Get">GET</h2>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/operator
			</p>
			<p>Get a list of all operators and their associated information.</p>
		</div>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/operator/:name
			</p>
			<p>Get a singular operator and their associated information.</p>
		</div>
		<pre>{JSON.stringify(surtr, null, 2)}</pre>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/skins/e2/:name
			</p>
			<p>Get the e2 art of the specified operator, if they have one.</p>
		</div>
		<pre>{JSON.stringify({
			"e2": "https://gamepress.gghttps://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_2.png"
		}, null, 2)}</pre>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/skins/:name
			</p>
			<p>Get the skins of the specified operator, if they have one.</p>
		</div>
		<pre>{JSON.stringify({
			"Liberté//Échec": "https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png"
		}, null, 2)}</pre>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/search?
			</p>
			<p>Search operators based on provided query parameters. Non-case sensitive queries, just specify the corresponding value you seek for these.
				For names with hyphens, hyphens can be provided in the request body but spaces are also supported. Supported parameters are:</p>
			<p>_id, name, rarity, artist, va, affiliation, class, tag, headhunting, recruitable, availability, gender, race, alter (no specified value), module
				(no specified value)
			</p>
			<ul>
				<li>base skill's building => search?building=factory</li>
				<li>place of birth => search?birth=ursus</li>
			</ul>
		</div>
		<pre>{JSON.stringify({
			"Liberté//Échec": "https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png"
		}, null, 2)}</pre>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/recruit/:tagone/:tagtwo?:tagthree?
			</p>
			<p>Similar to the search query but supports only up to three tags. Returns matching operators with the provided tags and are recruitable to simulate the game's recruit system.</p>
		</div>
		<pre>{JSON.stringify({
			"Liberté//Échec": "https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png"
		}, null, 2)}</pre>
		<h2 id="Post">POST</h2>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/operator/:name
			</p>
			<p>Add a specified operator to the database.</p>
		</div>
		<h2 id="Put">PUT</h2>
		<div>
			<p class="route">
				https://rhodesapi.cyclic.app/api/operator/:name
			</p>
			<p>Update a speciifed operator to the database. In order to account for game updates, this is only callable on operator's in which the
				dateAdded field is a week out (which will be all since all were scraped in the same day).
			</p>
		</div>
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

  p {
    line-height: 1.5;
  }

	.route {
		font-family: 'Courier New', Courier, monospace;
	}

	.route-holder div {
		background-color: rgb(57, 59, 59);
		padding: 1rem;
		margin-top: 3rem;
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
    	max-height: 48rem;
    }
  }

	@media (max-width: 525px) {
    pre {
			width: 18rem;
    	max-height: 48rem;
    }
  }
</style>
