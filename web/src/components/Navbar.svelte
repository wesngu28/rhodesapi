<script lang="ts">
	function addUnderline(this: HTMLAnchorElement) {
		const allLinks = document.querySelectorAll('.link-list li');
		allLinks.forEach((link) => {
			link.classList.remove('underline');
		});
		this.classList.add('underline');
	}
</script>

<nav>
	<ul class="link-list">
		<li><a on:click={addUnderline} href="/">Home</a></li>
		<li><a on:click={addUnderline} href="/about">About</a></li>
		<li><a on:click={addUnderline} href="/documentation">Docs</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		width: 100vw;
		justify-content: flex-end;
	}
	ul {
		display: flex;
		list-style: none;
		margin-right: 1rem;
	}
	li {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	a {
		text-decoration: none;
		color: white;
	}
	.underline {
		text-decoration: underline;
	}
</style>
