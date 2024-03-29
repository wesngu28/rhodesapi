<script lang="ts">
</script>

<svelte:head>
	<title>About - RhodesAPI</title>
</svelte:head>

<div class="wrapper">
	<h1>About</h1>
	<p>
		This website is an API interface for the mobile gacha tower defense game Arknights. All data
		delivered in JSON format is returned in json format.
	</p>
	<h2>API is missing some operators, or some operators are out of date/have missing information</h2>
	<p>
		If the API is missing operators, the cron has likely not hit the route yet. Feel free to raise an issue on Github.
	</p>
	<h2>Data Sources</h2>
	<p>
		The data stored in the database is based off data from <a href="https://gamepress.gg/arknights/"
			>the Gamepress Arknights wiki</a
		>. Information from the site was scraped using Cheerio and
		<a href="https://github.com/taoqf/node-html-parser">node-html-parser</a>. node-html-parser is
		amazing and 🔥🔥🔥 blazingly 🔥🔥🔥 ⚡⚡⚡ fast ⚡⚡⚡. I initially used Puppeteer/Playwright,
		but found that I could hit the script tags with the two above libraries and did not need the
		headless browser overhead.
	</p>
	<h2>Stack</h2>
	<p>
		The REST API is a Fastify-based API. It is paired with a backend that makes use of a
		MongoDB database hosted on Railway, as well as a Redis layer to make cache heavy requests. The API
		is also hosted on Railway.
	</p>
	<p>
		The API was originally conceived in Javascript before I transitioned it
		to Typescript, both in the Node.js runtime. It used to use Express and previously used Mongo Atlas
		and Redis Enterprise. It used to be hosted on <a href="https://www.cyclic.sh/">cyclic.sh</a>, an awesome
		way to host fullstack Node.js applications and a great competitor to what Heroku, which was where this used to live.
	</p>
	<p>
		The website uses SvelteKit, with vanilla CSS and Typescript. The website is deployed on Vercel.
	</p>
	<h2>Who and Why</h2>
	<p>
		This is a personal project of a university student, so I may not be implementing the best of
		practices or conventions, but I did learn a lot. I made this with the intention to learn about
		how APIs worked while also making one. This was the first project I made using Typescript, so
		the usage of actual Typescript-concepts is very conservative.
	</p>
	<p>
		The API relies on external updates through POST and PUT requests to add new and update operators
		because I have yet to setup a cronjob to automatically scrape new operators. This may be
		implemented later, but for now it seems to work decently.
	</p>
	<p>
		I made this because I love Arknights, even though I say I hate it when Contigency Contract is
		active. My favorite operators are, in no particular order: Surtr, Chen, Skadi, Dusk, Frostleaf,
		Mudrock, Leizi, Schwarz, Rockrock, Siege, Horn, and Texas. I've played since the game released globally.
	</p>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		width: 40rem;
		flex-wrap: wrap;
		word-wrap: break-word;
	}

	@media (max-width: 680px) {
		.wrapper {
			width: 30rem;
		}
	}

	@media (max-width: 520px) {
		.wrapper {
			width: 25rem;
		}
	}

	@media (max-width: 410px) {
		.wrapper {
			width: 18rem;
		}
	}

	h1 {
		text-align: left;
	}

	a {
		color: gray;
	}

	p {
		line-height: 1.5;
		font-size: 1rem;
	}
</style>
