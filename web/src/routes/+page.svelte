<script lang="ts">
	import Route from '../components/route.svelte';
	import Dropdown from '../components/dropdown.svelte';
	import Input from '../components/input.svelte';
	import PreOutput from '../components/preOutput.svelte';
</script>

<svelte:head>
	<title>RhodesAPI</title>
</svelte:head>

<div class="wrapper">
	<h1>RhodesAPI</h1>
	<div>
		<div class="form">
			<Dropdown />
			<Route />
			<Input />
		</div>
		<p>Hint: Pass in the exclude parameter to ignore fields from response.</p>
		<PreOutput />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-x: hidden;
	}

	.wrapper::before {
		content: "";
		background-image: url('Siege.png');
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		opacity: 0.25;
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
		align-items: center;
		flex-wrap: wrap;
	}

	@media (max-width: 550px) {
		.form {
			justify-content: center;
			width: 75vw;
		}
	}
</style>
