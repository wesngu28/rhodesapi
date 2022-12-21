<script lang="ts">
	import Route from "../components/route.svelte";
	import Dropdown from "../components/dropdown.svelte";
	import Input from "../components/input.svelte";
	import PreOutput from "../components/preOutput.svelte";
</script>

<svelte:head>
	<title>Pokemon Stats Viewer</title>
</svelte:head>

<div class="wrapper">
	<h1>RhodesAPI</h1>
	<div>
		<div class="form">
			<Dropdown />
			<Route />
			<Input />
		</div>
		<PreOutput />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 3rem;
	}

	.wrapper > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-wrap: wrap;
	}

	.form {
		display: flex;
	}
</style>
