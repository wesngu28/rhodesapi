<script lang="ts">
	import { currResponse, api, currentDropdownSelection, operatorName } from '../stores/stores';
	let json: { [key: string]: any } | Array<{ [key: string]: any }>;
	currResponse.subscribe((value) => {
		json = value;
	});
	let method = 'GET';
	api.subscribe((value) => {
		method = value;
	});
	let query = '/operator/';
	currentDropdownSelection.subscribe((value) => {
		query = value;
	});
	let operator = '/operator/';
	operatorName.subscribe((value) => {
		operator = value;
	});
</script>

<div>
	{#if json && !Array.isArray(json)}
		{#if method === 'PUT'}
			{#if Object.keys(json).includes('acknowledged')}
				<p>
					Your update was {json.acknowledged ? 'acknowledged' : 'not acknowledged'}.
					{json.modifiedCount > 0
						? `Thank you for updating ${operator}!`
						: '0 operators were modified.'}
				</p>
			{:else if Object.keys(json).includes('error')}
				<p>{operator} was updated recently or may not exist.</p>
			{/if}
		{/if}
		{#if method === 'POST'}
			{#if Object.keys(json).includes('error')}
				<p>We are currently not aware of {operator}!</p>
			{:else if Object.values(json).includes(operator)}
				<p>{operator} has been added!</p>
			{/if}
		{/if}
		{#if method === 'GET'}
			{#if Object.keys(json).includes('name')}
				<pre>{JSON.stringify(json, null, 2)}</pre>
			{:else if Object.keys(json).includes('error')}
				<p>{operator} was not found.</p>
			{:else}
				{#each Object.values(json) as skin}
					<img src={skin} />
				{/each}
			{/if}
		{/if}
	{:else}
		<p>{json.length} operators found.</p>
		<pre>
      {#each json as operator}
				{JSON.stringify(operator, null, 2)}
        <p>&nbsp;</p>
			{/each}
    </pre>
	{/if}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	img {
		width: 48rem;
		height: auto;
	}
	pre {
		width: 48rem;
		height: 48rem;
		overflow-y: scroll;
		white-space: pre-wrap;
		margin: 1rem;
	}
	@media (max-width: 800px) {
		pre {
			width: 40rem;
		}
	}
	@media (max-width: 670px) {
		pre {
			width: 30rem;
		}
	}
	@media (max-width: 550px) {
		pre {
			width: 95vw;
		}
	}
</style>
