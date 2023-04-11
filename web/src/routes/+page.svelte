<script lang="ts">
	let currentDropdownSelection = "/operator/"
	let currResponse = 				{
			"_id": "Rockrock",
			"name": "Rockrock",
			"rarity": 5,
			"alter": "Not provided",
			"artist": "Cenm0",
			"va": "千菅春香",
			"biography": "Rockrock, a member of the Londinium Citizens' Self-Salvation Corps, cooperated with Rhodes Island during the Londinium crisis and is experienced in reconnaissance and long-ranged assault. At her own suggestion, she has reached a partnership with Rhodes Island's Londinium branch.",
			"description": "Rockrock, of the Londinium Citizens' Self-Salvation Corps.",
			"quote": "She wants her homeland back, and she'll do whatever it takes.",
			"voicelines": {
				"appointed_as_assistant": "You want me to be your assistant? I can't, I barely know how to read. It'll just be a waste of your time. But if you need something fixed, then I can help.",
				"talk_1": "I'm too frugal? I don't think so, I just live the way I want. Machinery is good, but I don't need it to do anything fancy. Same goes for my clothes, only the stuff I make myself suits me best. If you have fewer needs, then of course you spend less money.",
				"talk_2": "When my dad was killed, I honestly thought there wasn't a single good man among the Sarkaz. But now that I think about it, I was too naive at the time. How can stuff like race or appearance decide if someone's good or bad? No matter what your race is, as long as you look out for one another, you're family.",
				"talk_3": "This outfit? Made it myself - it's gotta be as cool as possible since it gets really hot in the boiler room. It...doesn't look like work attire? What d'ya mean? There's all sorts of different workers, and each has her own needs.",
				"talk_after_promotion_1": "Neighbors who take care of each other, simple but comfortable furniture, an ever-growin' pile of spare parts, and machinery that clanks together like the growl of thunder. Now, that's the good life. I thought my dad'd grow old with his factory, and I'd grow old with the next-generation factory, but...",
				"talk_after_promotion_2": "Doesn't matter what it is - as long as you make it yourself, it feels like home. Same goes for Londinium. Every brick and tile was laid down by Londiniers. We know what Londinium is thinkin', and we're gonna take it back with our own hands.",
				"talk_after_trust_increase_1": "Sometimes the commander reads books that are really hard to understand.. I remember a line went somethin' like this, 'People built cities, but refused to adapt to them.' Not sure I agree with that though. As long as you find your own way to live, it doesn't make a difference whether you're in the city or in the middle o' nowhere.",
				"talk_after_trust_increase_2": "My dad and my old friends always used to say I was stubborn, stroppy, and foul-tempered. Don't think there's anything wrong with being stubborn, you need a bit of that to protect people around you. But, I failed... Cause... Where are they now...?",
				"talk_after_trust_increase_3": "Here, Dr. {@nickname}. Why am I givin' money to you? 'Cause I can't spend it all, there's no point keepin' it around, and you happened to pass by. No need to be polite, I always used to give money to my friends, so they all got used to it. Huh, you don't need it? Damn it, gotta find someone else then...",
				"idle": "Dr. {@nickname}, Dr. {@nickname}... Oh, havin' a sleep? Let me find a blanket for ya... Hmm, if I made a new blanket, the Doctor would probably find that helpful…",
				"onboard": "Londinium Citizens' Self-Salvation Corps Caster, Rockrock, reporting in. Dr. {@nickname}, we've had a few misunderstandings in the past, but I'm not blinded by those old prejudices anymore. I hope we can have a good working relationship.",
				"watching_battle_record": "That's crazy... I gotta ask again, are you sure you're a drug company?",
				"promotion_1": "I don't care about my rank. As long as I'm with friends... I'm always ready for the next battle.",
				"promotion_2": "I fight to reclaim my home, and to put an end to the war. I hope that one day, we'll be able to put down our weapons and pick up the tools to rebuild Londinium. Just like... in the past.",
				"added_to_squad": "Of course, it's my job to protect my family.",
				"appointed_as_squad_leader": "Be careful. Your safety is more important than victory.",
				"depart": "My drones are ready, Doctor. Should I scout ahead?",
				"begin_operation": "Found 'em. They're not gettin' away!",
				"selecting_operator_1": "I'm here, Doctor. I can see the enemy's tracks.",
				"selecting_operator_2": "Standing by. Doctor, where do you need me?",
				"deployment_1": "Ready to deploy my drones.",
				"deployment_2": "Activating Rock-18 attack module.",
				"in_battle_1": "Rock-18, track the enemy!",
				"in_battle_2": "It's up to us to protect our homes!",
				"in_battle_3": "I'm not watching my friends die again!",
				"in_battle_4": "Rock-18, maximum power!",
				"4-star_result": "I know my drone better than anyone else. It can't do that on its own. The fact that you've used it so effectively just shows how great a commander you are, Dr. {@nickname}.",
				"3-star_result": "A total victory with no casualties. Dr. {@nickname}, if you were around back then, would things have... turned out differently?",
				"sub_3-star_result": "The enemies are gettin' away, after them... Wait, no, scrap that. They might be leadin' us into a trap... Safety's gotta come first.",
				"operation_failure": "Run, Doctor, I'll hold them off! ...It's alright, there's no need to worry... When I joined the Self-Salvation Corps, I was prepared for this moment.",
				"assigned_to_facility": "This place... isn't the same as my home, but it's just as warm. I really like it here.",
				"tap": "Aw!... Is something wrong? I'm just lookin' at this exhaust fan. Closure said this model's five years old, but it's the first time I've seen it... So ingenious.",
				"trust_tap": "Oh, Dr. {@nickname}? I'm makin' a wooden carving for you. The things I make are usually only good for me, but it should be fine givin' away simple stuff like decorations, right?",
				"title": "Arknights.",
				"greeting": "Good mornin', Dr. {@nickname}. Time for another day of hard work."
			},
			"lore": {
				"gender": "Female",
				"place_of_birth": "Victoria",
				"birthday": "June 7",
				"race": "Feline",
				"height": "161cm",
				"combat_experience": "Half a year",
				"infection_status": "Medical tests have confirmed that no infection is present.",
				"physical_strength": "Standard",
				"mobility": "Standard",
				"physiological_endurance": "Standard",
				"tactical_planning": "Excellent",
				"combat_skill": "Standard",
				"originium_adaptability": "Standard"
			},
			"affiliation": [
				"Victoria"
			],
			"class": [
				"Caster",
				"Drone",
				"Mech-Accord"
			],
			"tags": [
				"DPS",
				"Caster"
			],
			"range": [
				{
					"elite": "Base",
					"range": [
						[
							"attackable",
							"unit",
							"attackable"
						],
						[
							"attackable",
							"attackable",
							"attackable"
						],
						[
							"attackable",
							"attackable",
							"attackable"
						]
					]
				},
				{
					"elite": "E1",
					"range": [
						[
							"attackable",
							"unit",
							"attackable"
						],
						[
							"attackable",
							"attackable",
							"attackable"
						],
						[
							"attackable",
							"attackable",
							"attackable"
						],
						[
							"null",
							"attackable",
							"null"
						]
					]
				},
				{
					"elite": "E2",
					"range": [
						[
							"attackable",
							"unit",
							"attackable"
						],
						[
							"attackable",
							"attackable",
							"attackable"
						],
						[
							"attackable",
							"attackable",
							"attackable"
						],
						[
							"null",
							"attackable",
							"null"
						]
					]
				}
			],
			"statistics": {
				"base": {
					"hp": "600",
					"atk": "148",
					"def": "49",
					"resist": "19",
					"deploy": "70",
					"cost": "0",
					"interval": "1.3",
					"block": " 1"
				},
				"e0max": {
					"hp": "858",
					"atk": "209",
					"def": "75",
					"block": "1"
				},
				"e1max": {
					"hp": "1115",
					"atk": "268",
					"def": "103",
					"block": "1"
				},
				"e2max": {
					"hp": "1468",
					"atk": "320",
					"def": "123",
					"block": "1"
				}
			},
			"trait": "Controls a Drone to deal Arts damage to an enemy; When the Drone continuously attacks the same enemy, its damage will increase (up to 110% of the operator's ATK)",
			"costs": [
				{
					"name": "Skill Summary - 1",
					"amount": 8
				},
				{
					"name": "Oriron Shard",
					"amount": 5
				},
				{
					"name": "Skill Summary - 2",
					"amount": 18
				},
				{
					"name": "Polyketon",
					"amount": 3
				},
				{
					"name": "Device",
					"amount": 3
				},
				{
					"name": "Crystalline Component",
					"amount": 4
				},
				{
					"name": "Skill Summary - 3",
					"amount": 48
				},
				{
					"name": "Semi-Synthetic Solvent",
					"amount": 3
				},
				{
					"name": "Coagulating Gel",
					"amount": 2
				},
				{
					"name": "Refined Solvent",
					"amount": 3
				},
				{
					"name": "Incandescent Alloy",
					"amount": 4
				},
				{
					"name": "Manganese Trihydrate",
					"amount": 3
				},
				{
					"name": "Cutting Fluid Solution",
					"amount": 12
				},
				{
					"name": "D32 Steel",
					"amount": 4
				},
				{
					"name": "Polymerized Gel",
					"amount": 4
				},
				{
					"name": "Orirock Concentration",
					"amount": 6
				},
				{
					"name": "Grindstone",
					"amount": 4
				},
				{
					"name": "Grindstone Pentahydrate",
					"amount": 3
				},
				{
					"name": "White Horse Kohl",
					"amount": 6
				},
				{
					"name": "Crystalline Electronic Unit",
					"amount": 4
				},
				{
					"name": "LMD",
					"amount": 140000
				},
				{
					"name": "Caster Chip",
					"amount": 4
				},
				{
					"name": "Sugar",
					"amount": 4
				},
				{
					"name": "Polyester",
					"amount": 3
				},
				{
					"name": "Caster Dualchip",
					"amount": 3
				},
				{
					"name": "Aketon",
					"amount": 14
				}
			],
			"potential": [
				{
					"name": "Deployment Cost",
					"value": "-1"
				},
				{
					"name": "Redeployment Cooldown",
					"value": "-4"
				},
				{
					"name": "Attack Power",
					"value": "+24"
				},
				{
					"name": "Improves Talent",
					"value": ""
				},
				{
					"name": "Deployment Cost",
					"value": "-1"
				},
				{
					"name": "Attack Power",
					"value": "+60"
				}
			],
			"trust": [
				{
					"name": "Attack Power",
					"value": "+60"
				}
			],
			"talents": [
				{
					"name": "Firm Foundation",
					"variation": [
						{
							"description": "+2% ATK for every 15 seconds this unit remains on the battlefield, stacking up to 3 times",
							"elite": "E1",
							"potential": "0"
						},
						{
							"description": "+3%(+1%) ATK for every 15 seconds this unit remains on the battlefield, stacking up to 3 times",
							"elite": "E1",
							"potential": "5"
						},
						{
							"description": "+4% ATK for every 15 seconds this unit remains on the battlefield, stacking up to 4 times",
							"elite": "E2",
							"potential": "0"
						},
						{
							"description": "+5%(+1%) ATK for every 15 seconds this unit remains on the battlefield, stacking up to 4 times",
							"elite": "E2",
							"potential": "5"
						}
					]
				}
			],
			"skills": [
				{
					"name": "Tactical Chant γ",
					"variations": [
						{
							"level": 1,
							"description": "ASPD +30",
							"sp_cost": "40",
							"initial_sp": "0",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 2,
							"description": "ASPD +35",
							"sp_cost": "40",
							"initial_sp": "0",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 3,
							"description": "ASPD +40",
							"sp_cost": "40",
							"initial_sp": "0",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 4,
							"description": "ASPD +45",
							"sp_cost": "35",
							"initial_sp": "5",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 5,
							"description": "ASPD +50",
							"sp_cost": "35",
							"initial_sp": "5",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 6,
							"description": "ASPD +55",
							"sp_cost": "35",
							"initial_sp": "5",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 7,
							"description": "ASPD +60",
							"sp_cost": "32",
							"initial_sp": "10",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": "M1",
							"description": "ASPD +70",
							"sp_cost": "32",
							"initial_sp": "10",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": "M2",
							"description": "ASPD +80",
							"sp_cost": "32",
							"initial_sp": "10",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": "M3",
							"description": "ASPD +90",
							"sp_cost": "30",
							"initial_sp": "15",
							"duration": "30 Seconds",
							"range": "Skill does not modify range"
						}
					],
					"skill_charge": "Per Second",
					"skill_activation": "Manual Trigger"
				},
				{
					"name": "Willing Burden",
					"variations": [
						{
							"level": 1,
							"description": "ASPD +30; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "50",
							"initial_sp": "10",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 2,
							"description": "ASPD +35; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "48",
							"initial_sp": "10",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 3,
							"description": "ASPD +40; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "46",
							"initial_sp": "10",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 4,
							"description": "ASPD +45; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "45",
							"initial_sp": "15",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 5,
							"description": "ASPD +50; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "43",
							"initial_sp": "15",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 6,
							"description": "ASPD +55; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "41",
							"initial_sp": "15",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": 7,
							"description": "ASPD +60; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.7x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "40",
							"initial_sp": "20",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": "M1",
							"description": "ASPD +65; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.8x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "40",
							"initial_sp": "20",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": "M2",
							"description": "ASPD +70; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.9x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "40",
							"initial_sp": "20",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						},
						{
							"level": "M3",
							"description": "ASPD +80; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 2x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
							"sp_cost": "40",
							"initial_sp": "25",
							"duration": "40 Seconds",
							"range": "Skill does not modify range"
						}
					],
					"skill_charge": "Per Second",
					"skill_activation": "Manual Trigger"
				}
			],
			"module": [
				{}
			],
			"base": [
				{
					"name": "Shed Excess",
					"level": "Elite 0",
					"effects": "When this Operator is assigned to the Workshop to process any material, the production rate of byproduct increases by 65%",
					"building": "Workshop"
				},
				{
					"name": "Useless Gift",
					"level": "Elite 2",
					"effects": "When this Operator is assigned to the Workshop to process Elite materials, any byproducts of T3 quality produced will be Polyester Packs",
					"building": "Workshop"
				}
			],
			"headhunting": "Yes",
			"recruitable": "No",
			"art": [
				{
					"name": "Base",
					"link": "https://gamepress.gg/arknights/sites/arknights/files/2022-04/char_4040_rockr_1.png"
				},
				{
					"name": "E1",
					"link": "https://gamepress.gg/arknights/sites/arknights/files/2022-04/char_4040_rockr_1_0.png"
				},
				{
					"name": "E2",
					"link": "https://gamepress.gg/arknights/sites/arknights/files/2022-04/char_4040_rockr_2.png"
				},
				{
					"name": "Before Singing",
					"link": "https://gamepress.gg//arknights/skin/singing",
					"line": "lxh"
				}
			],
			"availability": "Global",
			"release_dates": {
				"cn": "4/14/2022",
				"global": "10/19/2022"
			},
			"url": "https://gamepress.gg/arknights/operator/Rockrock",
		}
	let operatorName = "Rockrock"
  let search = "";
  const handleKeydown = async (event: KeyboardEvent) => {
    if (search) {
      if (event.key === "Enter") {
        const response = await fetch(
          `https://rhodesapi.up.railway.app/api${currentDropdownSelection}${search}`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        const json = await response.json();
        currResponse = json;
        operatorName = search;
      }
    }
  };
  let selected = true;
  function setDropdownSelection(this: HTMLButtonElement) {
    selected = true;
		switch (this.textContent) {
			case "Operator Info":
				currentDropdownSelection = "/operator/";
			case "Operator Art":
				currentDropdownSelection = "/art/";
			case "Operator Search":
				currentDropdownSelection = "/search?";
			case "Operator Recruit":
				currentDropdownSelection = "/recruit?";
		}
  }
</script>

<svelte:head>
  <title>RhodesAPI</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<div class="wrapper">
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
        {`rhodesapi.up.railway.app/api${currentDropdownSelection}`}
      </div>
      <input class="inpute" type="text" bind:value={search} />
    </div>
    <p>Hint: Pass in the exclude parameter to ignore fields from response.</p>
    {#if currResponse && !Array.isArray(currResponse)}
      {#if Object.keys(currResponse).includes("error")}
        <p>{operatorName}'s data' was not found.</p>
      {/if}
    {/if}
    {#if Array.isArray(currResponse) && currResponse.length > 0 && typeof currResponse[0].name === "string" && typeof currResponse[0].link === "string"}
      {#each Object.values(currResponse) as skin}
        <img class="response-image" alt={skin} src={skin.link} />
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
    background-image: url("Siege.png");
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
