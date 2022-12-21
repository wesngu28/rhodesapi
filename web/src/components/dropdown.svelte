<script lang="ts">
  import { currentDropdownSelection, api, currResponse } from '../stores/stores.js';
  let selected = true
  let method = 'GET'
  let json: {[key: string]: any} = {};
  api.subscribe((value) => {
		method = value;
	});
	currResponse.subscribe((value) => {
		json = value;
	});
  function setDropdownSelection(this: HTMLButtonElement) {
    selected = true
    currResponse.set({})
    if(this.textContent! === 'Add Operator') {
      currentDropdownSelection.set('/operator/')
      api.set('POST')
    }
    if(this.textContent! === 'Update Operator') {
      currentDropdownSelection.set('/operator/')
      api.set('PUT')
    }
    if(this.textContent! === 'Search Tags' || this.textContent! === 'Recruitment' || this.textContent! === 'Operator Info'
    || this.textContent! === 'Operator Skin'|| this.textContent! === 'Operator E2') {
      api.set('GET')
    }
    if(this.textContent! === 'Operator Info') {
      currentDropdownSelection.set('/operator/')
    }
    if(this.textContent! === 'Operator Skin') {
      currentDropdownSelection.set('/skins/')
    }
    if(this.textContent! === 'Operator E2') {
      currentDropdownSelection.set('/skins/e2/')
    }
    if(this.textContent! === 'Search Tags') {
      currentDropdownSelection.set('/search/')
    }
    if(this.textContent! === 'Recruitment') {
      currentDropdownSelection.set('/recruit/')
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
    <button on:click="{setDropdownSelection}">Search Tags</button>
    <button on:click="{setDropdownSelection}">Recruitment</button>
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