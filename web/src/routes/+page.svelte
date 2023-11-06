<script lang="ts">
  import { onMount } from "svelte";
	import { landingResponses } from "./LandingResponses";
	let currentDropdownSelection = "/operator/"
	let rand = Math.floor(Math.random() * landingResponses.length)
	type operator = typeof landingResponses[0]
	let currResponse: operator | {name: string, link: string} = landingResponses[rand]
	let operatorName = landingResponses[rand].name
	let wrapper: HTMLDivElement;
	onMount(() => {
		wrapper.style.setProperty('--bg-image', `url("/${operatorName}.png")`);
	})
  let search = "";
  const handleKeydown = async (event: KeyboardEvent) => {
    if (search) {
      if (event.key === "Enter") {
        const response = await fetch(
          `https://api.rhodesapi.com/api${currentDropdownSelection}${search}`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        const json = await response.json();
        currResponse = json;
        operatorName = search;
				if (!Array.isArray(currResponse) && (currResponse as {name: string, link: string}).link) {
					let img = currResponse as {name: string, link: string}
					wrapper.style.setProperty('--bg-image', `url("${img.link}`);
				}
				if (!Array.isArray(currResponse) && currResponse.hasOwnProperty("availability")) {
					let img = currResponse as operator
					let rand = Math.floor(Math.random() * img.art.length)
					wrapper.style.setProperty('--bg-image', `url("${(currResponse as operator).art[rand].link}`);
				}
				if (Array.isArray(currResponse) && currResponse[0].hasOwnProperty("availability")) {
					let img = currResponse as Array<operator>
					let rand = img[Math.floor(Math.random() * img.length)]
					let opRand = rand.art[Math.floor(Math.random() * rand.art.length)].link
					wrapper.style.setProperty('--bg-image', `url("${opRand}`);
				}
      }
    }
  };
	let selected = true;
	function setDropdownSelection(this: HTMLButtonElement) {
		selected = true;
		if (this.textContent! === 'Operator Info') {
			currentDropdownSelection = '/operator/';
		}
		if (this.textContent! === 'Operator Art') {
			currentDropdownSelection = '/art/';
		}
		if (this.textContent! === 'Search Tags') {
			currentDropdownSelection = '/search?';
		}
		if (this.textContent! === 'Recruitment') {
			currentDropdownSelection = '/recruit?';
		}
	}
</script>

<svelte:head>
  <title>RhodesAPI</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<div bind:this={wrapper} class="wrapper">
  <h1>RhodesAPI</h1>
  <div>
    <div class="form">
      <div class="dropdown">
        <button class="first-button" on:click={() => (selected = !selected)}
          >GET</button
        >
        <div class={selected ? "dropdown-content hidden" : "dropdown-content"}>
          <button on:click={setDropdownSelection}>Operator Info</button>
          <button on:click={setDropdownSelection}>Operator Art</button>
          <button on:click={setDropdownSelection}>Search Tags</button>
          <button on:click={setDropdownSelection}>Recruitment</button>
        </div>
      </div>
      <div class="text">
        {`api.rhodesapi.com/api${currentDropdownSelection}`}
      </div>
      <label><input class="inpute" type="text" bind:value={search} /></label>
    </div>
    {#if currResponse && !Array.isArray(currResponse)}
      {#if Object.keys(currResponse).includes("error")}
        <p>{operatorName}'s data' was not found.</p>
      {/if}
    {/if}
    {#if Array.isArray(currResponse) && currResponse.length > 0 && typeof currResponse[0].name === "string" && typeof currResponse[0].link === "string"}
      {#each Object.values(currResponse) as skin}
        <img class="response-image" alt={skin.name} src={skin.link} />
      {/each}
    {:else if Array.isArray(currResponse)}
      <p>{currResponse.length} operators found.</p>
      <pre class="codeb">
				{#each currResponse as operatorName}
          {JSON.stringify(operatorName, null, 2)}
					<p>&nbsp;</p>
        {/each}
			</pre>
    {:else}
      <pre class="codeb">{JSON.stringify(currResponse, null, 2)}</pre>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
		min-height: 90vh;
		position: relative;
		padding-bottom: 2rem;
  }

  .wrapper::before {
    content: "";
    background-image: var(--bg-image);
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

  .form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .text {
    background-color: grey;
    padding: 0.75rem;
    font-size: 1rem;
  }

  .inpute {
    width: 25vw;
    padding: 0.75rem;
  }

	.response-image {
		width: 48rem;
		height: auto;
	}

	.codeb {
		width: 48rem;
		height: 48rem;
		overflow-y: scroll;
		white-space: pre-wrap;
		margin: 1rem;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.codeb > * {
		opacity: 1.0;
	}

	.codeb::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 800px) {
		.codeb {
			width: 40rem;
		}
	}
	@media (max-width: 670px) {
		.codeb {
			width: 30rem;
		}
	}
	@media (max-width: 550px) {
		.codeb {
			width: 95vw;
		}
	}

  @media (max-width: 550px) {
    .inpute {
      width: 75vw;
    }
  }

  @media (max-width: 550px) {
    .form {
      justify-content: center;
      width: 75vw;
    }
  }
</style>
