<script lang="ts">
	import { currResponse } from '../stores/stores';
  let json = {};
	currResponse.subscribe((value) => {
		json = value;
	});
</script>

<div>
  <pre>{JSON.stringify(json, null, 2)}</pre>
</div>

<style>
  div {
    width: 48rem;
    height: 48rem;
    overflow: scroll;
  }
  pre {
    white-space: pre-wrap;
    margin: 1rem;
  }
</style>