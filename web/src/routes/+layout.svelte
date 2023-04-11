<script lang="ts">
	import '../assets/main.css';
  function addUnderline(this: HTMLAnchorElement) {
		const allLinks = document.querySelectorAll('.link-list li');
		allLinks.forEach((link) => {
			link.classList.remove('underline');
		});
		this.classList.add('underline');
	}
</script>

<svelte:head>
	<meta name="rating" content="general" />
  <meta name="lang" content="en-us" />
  <meta property="og:title" content="RhodesAPI" />
  <meta property="og:description" content="Web interface for an api for Arknights" />
  <meta property="og:image" content="/Arknights.jpg" />
  <meta name="twitter:title" content="RhodesAPI" />
  <meta name="twitter:description" content="Web interface for an api for Arknights" />
  <meta name="twitter:image" content="/Arknights.jpg" />
  <meta name="twitter:creator" content="wesngu28" />
  <meta name="keywords" content="arknights, api" />
</svelte:head>

<nav>
	<a href="https://github.com/wesngu28/rhodesapi"><img alt="github" src="./github.svg" /></a>
	<ul class="link-list">
		<li><a on:click={addUnderline} href="/">Home</a></li>
		<li><a on:click={addUnderline} href="/about">About</a></li>
		<li><a on:click={addUnderline} href="/documentation">Docs</a></li>
	</ul>
</nav>

<slot />

<style>
	nav {
		display: flex;
		width: 100vw;
		justify-content: space-between;
	}

	ul {
		display: flex;
		list-style: none;
		margin-right: 1rem;
		align-items: center;
		justify-content: center;
	}

	li {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	a {
		text-decoration: none;
		color: white;
	}

	img {
		background-color: white;
		height: 24px;
		width: 24px;
		margin: 1rem;
	}
</style>
