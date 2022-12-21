<script lang="ts">
  import { currentDropdownSelection, api, currResponse } from '../stores/stores.js';
  let selected = true
  let method = 'GET'
  let json: {[key: string]: any} = {};
	currResponse.subscribe((value) => {
		json = value;
	});
  function setDropdownSelection(this: HTMLButtonElement) {
    if(this.textContent! === 'Operator Info') {
      currResponse.set({})
      currentDropdownSelection.set('/operator/')
      method = 'GET'
      api.set('GET')
    }
    if(this.textContent! === 'Operator Skin') {
      currResponse.set({})
      currentDropdownSelection.set('/skins/')
      method = 'GET'
      api.set('GET')
    }
    if(this.textContent! === 'Operator E2') {
      currResponse.set({})
      currentDropdownSelection.set('/skins/e2/')
      method = 'GET'
      api.set('GET')
    }
    if(this.textContent! === 'Add Operator') {
      currResponse.set({})
      currentDropdownSelection.set('/operator/')
      method = 'POST'
      api.set('POST')
    }
    if(this.textContent! === 'Update Operator') {
      currResponse.set({})
      currentDropdownSelection.set('/operator/')
      method = 'PUT'
      api.set('PUT')
    }
  }
</script>

<div class="dropdown">
  <button class="first-button" on:click={() => selected = !selected}>{method}</button>
  <div class="{selected ? 'dropdown-content hidden' : 'dropdown-content'}">
    <button on:click="{setDropdownSelection}">Operator Info</button>
    <button on:click="{setDropdownSelection}">Operator Skin</button>
    <button on:click="{setDropdownSelection}">Operator E2</button>
    <button on:click="{setDropdownSelection}">Add Operator</button>
    <button on:click="{setDropdownSelection}">Update Operator</button>
  </div>
</div>

<style>
  .dropdown {
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		position: relative;
	}

	.dropdown-content {
		position: absolute;
		background-color: #f1f1f1;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
    top: 2.55rem;
    left: 0rem;
	}

  .hidden {
    display: none;
  }

  .dropdown-content button {
		color: black;
		text-decoration: none;
		display: block;
    padding: 12px 16px;
    margin: 0;
    background: none;
    border: none;
    outline: none;
    width: 100%;
	}

  .dropdown-content button:hover {
    background-color: gray;
  }

	.first-button {
		background-color: #04aa6d;
		color: white;
		padding: 0.75rem;
		border: none;
		font-size: 1rem;
	}
</style>