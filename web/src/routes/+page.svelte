<script lang="ts">
  import { onMount } from "svelte";

	interface operator {
		name: string;
		rarity: number;
		alter: string;
		artist: string;
		va: string;
		biography: string;
		description: string;
		quote: string;
		voicelines: { [key: string]: string };
		lore: { [key: string]: string };
		affiliation: Array<string>;
		class: Array<string>;
		tags: Array<string>;
		trait: string;
		headhunting: string;
		recruitable: string;
		art: Array<{name: string, link: string, line?: string}>;
		availability: string;
		release_dates: { cn: string; global: string;}
		url: string;
	}

	type art = Array<{name: string, link: string, line?: string}>;

	let currentDropdownSelection = "/operator/"
	let landingResponses = [[{
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
  "trait": "Controls a Drone to deal Arts damage to an enemy; When the Drone continuously attacks the same enemy, its damage will increase (up to 110% of the operator's ATK)",
  "headhunting": "Yes",
  "recruitable": "No",
  "art": [
    {
      "name": "Base",
      "link": "https://ucarecdn.com/a9383c7d-2606-475b-bfb6-6f6c1bdb0250/"
    },
    {
      "name": "E1",
      "link": "https://ucarecdn.com/1a9155d3-62c8-409c-86bd-ff07835b82f7/"
    },
    {
      "name": "E2",
      "link": "https://ucarecdn.com/bc2fc33f-42b3-4f48-8109-0ac92772770d/"
    },
    {
      "name": "Before Singing",
      "link": "https://ucarecdn.com/21374398-f368-4b93-9c29-99e8c24f09d3/",
      "line": "lxh"
    }
  ],
  "availability": "Global",
  "release_dates": {
    "cn": "4/14/2022",
    "global": "10/19/2022"
  },
  "url": "https://gamepress.gg/arknights/operator/Rockrock",
  "dateAdded": "2023-04-11T02:34:12.162Z"
}
, "Rockrock"], [{
  "_id": "Siege",
  "name": "Siege",
  "rarity": 6,
  "alter": "Not provided",
  "artist": "Infukun",
  "va": "Ayako Kawasumi",
  "biography": "Vina, codenamed Siege, citizen of Victoria, most records unavailable except for several unproven charges. Outstanding performance in assault, siege, and hard target missions. Admitted to Rhodes Island after excellent scores in multiple tests. Currently a vanguard and the captain of a Rhodes Island squad.",
  "description": "Siege, leader of the Glasgow Gang, will carve a path for you.",
  "quote": "She is a born leader.",
  "voicelines": {
    "appointed_as_assistant": "You're still not done assigning tasks? I'll wait a bit longer then.",
    "talk_1": "Keep calm and carry on.",
    "talk_2": "Our meals used to be fairly nice in the past... but the quality's gone downhill since we joined Indra's group.",
    "talk_3": "I had a dream... a dream where the sun rises, and in the distance beyond the horizon... there was my hometown. The place I might never get to return to, ever again.",
    "talk_after_promotion_1": "Before I knew it, I'd gotten accustomed to this drifter's life... It's a strange thing. In the past I never imagined this was how I'd end up.",
    "talk_after_promotion_2": "Gawain and company? I wouldn't say they ran into me, more like they picked me up off the streets.",
    "talk_after_trust_increase_1": "I used to stand side by side with Indra's team when we fought in the streets of Victoria... Looking back, I suppose it's a fairly fond memory to me.",
    "talk_after_trust_increase_2": "Stay on your guard! I know you've done the best you can, but there may be unknown dangers beyond our abilities.",
    "talk_after_trust_increase_3": "If we're ever put in a tough situation... then I may well act on my own motives. And if it comes to that, Doctor, I hope you'll join me too in... no, never mind for now.",
    "idle": "Hm? You fell asleep?... I wonder if you ever dream of your hometown, too.",
    "onboard": "I've passed the strength test, right? So assign me some missions. Don't let this hammer get too bored. My codename? They call me the Siege. Curious name, but it's got a nice ring to it.",
    "watching_battle_record": "Feels pretty good.",
    "promotion_1": "A promotion? Interesting...",
    "promotion_2": "Another promotion? All right, thanks... Life is strange like that, you know? Once upon a time, I was the one assigning new ranks to people.",
    "added_to_squad": "Tell me, is this battle inevitable?",
    "appointed_as_squad_leader": "You'd better get used to my combat style.",
    "depart": "For want of a nail... the kingdom was lost.",
    "begin_operation": "Run while you can. Better to be a coward with a pulse than a martyr with a grave.",
    "selecting_operator_1": "Yes?",
    "selecting_operator_2": "Are you ready?",
    "deployment_1": "What a pain.",
    "deployment_2": "We'll take them out all at once.",
    "in_battle_1": "My weapon chooses its worthy wielder.",
    "in_battle_2": "Get lost!",
    "in_battle_3": "A warrior must be ready to face death on the battlefield!",
    "in_battle_4": "My rule is the balance your lives hang in.",
    "4-star_result": "Can bluff, can't take one blow.",
    "3-star_result": "Those who refuse to surrender don't deserve mercy.",
    "sub_3-star_result": "Are we done here?",
    "operation_failure": "I'm... more tired than I thought. I apologize...",
    "assigned_to_facility": "Do you mind if I get my forty winks in here?",
    "tap": "Tsk...",
    "trust_tap": "It's too noisy out there for my tastes... I think the silence of your office suits me more. Let me stay in here for a bit, will you?",
    "title": "Arknights.",
    "greeting": "Oh, it's you, Doctor."
  },
  "lore": {
    "gender": "Female",
    "place_of_birth": "Victoria",
    "birthday": "Jul. 10",
    "race": "Aslan",
    "height": "172cm",
    "combat_experience": "5 years",
    "infection_status": "Non-infected as confirmed by medical report.",
    "physical_strength": "Excellent",
    "mobility": "Excellent",
    "physiological_endurance": "Excellent",
    "tactical_planning": "Excellent",
    "combat_skill": "Excellent",
    "originium_adaptability": "Standard"
  },
  "affiliation": [
    "Victoria",
    "Glasgow"
  ],
  "class": [
    "Vanguard",
    "Skill-DP",
    "Pioneer"
  ],
  "tags": [
    "DP-Recovery",
    "DPS",
    "Vanguard"
  ],
  "trait": "Blocks 2 enemies",
  "headhunting": "Yes",
  "recruitable": "Yes",
  "art": [
    {
      "name": "Base",
      "link": "https://ucarecdn.com/bd289968-860d-45ec-8f8e-e8131edc0097/"
    },
    {
      "name": "E1",
      "link": "https://ucarecdn.com/15395562-8769-4312-a6c7-ae6eb20e562b/"
    },
    {
      "name": "E2",
      "link": "https://ucarecdn.com/2e3b44d9-9768-4a99-b3fa-c263a9d2f5b3/"
    },
    {
      "name": "Legacy",
      "link": "https://ucarecdn.com/a09bd276-bb35-4af4-b5ad-1c9bc7a0df14/",
      "line": "Vitafield"
    },
    {
      "name": "City Destroyer",
      "link": "https://ucarecdn.com/6dc9ce2f-11d1-46ca-a97d-27a14a2f5977/",
      "line": "striker"
    }
  ],
  "availability": "Global",
  "release_dates": {
    "cn": "4/30/2019",
    "global": "1/16/2020"
  },
  "url": "https://gamepress.gg/arknights/operator/Siege",
  "dateAdded": "2023-04-11T02:29:05.025Z"
}, "Siege"], [{
  "_id": "Horn",
  "name": "Horn",
  "rarity": 6,
  "alter": "Not provided",
  "artist": "m9nokuro",
  "va": "丰口惠美",
  "biography": "Horn, graduate of the Royal Guard Academy of Victoria, presently commander of Victoria's 2nd Tempest Platoon. Fought in coordination with Rhodes Island during the Londinium incident. Ratified a cooperative strategic contract with Rhodes Island following referral by Elite Operator Misery.",
  "description": "Horn, Soldier of Victoria, here with you to face the crisis.",
  "quote": "Shells swift as wind storm, shield stiff as steel wall.",
  "voicelines": {
    "appointed_as_assistant": "I'll sort out your battlefield reports for you. My officialese isn't too shabby. I'll stand guard during your rest hours. Anything else required...? I'd prefer you don't keep me idle.",
    "talk_1": "Has Bagpipe kept up her habit of humming around you? Me? I'm more the type to appreciate music in peace. The only thing a horn can play is the order to charge—I'm joking of course, Doctor.",
    "talk_2": "The name 'White Wolf' goes as far back in history as the Aslan monarchy. Why are you interested, though? ...Ah. You saw... my fangs? I'm sorry, I lost control of myself then. I won't let it happen again.",
    "talk_3": "I have beautiful handwriting? Thank you. It just comes with the facade when you're raised noble, which I've never been keen on. But sometime these days, I'm grateful for it—whenever I pick up a pen, everything else leaves my mind, and my focus is only on how I write every letter in the proper way.",
    "talk_after_promotion_1": "As that city spat great black crystals from its gaping wounds, I thought there could be no hope left for it... Is this place familiar with those made Infected not by Catastrophe, but by human hands, Doctor of Rhodes Island?",
    "talk_after_promotion_2": "Rhodes Island Operator Misery managed to rescue me twice, and I'm sincerely grateful for it. I won't ask why I was the one he rescued. Those who live on are to carry forth the wishes of those who didn't make it.",
    "talk_after_trust_increase_1": "I always feel stifled by gloomy indoor atmospheres. Do you want to go out and take a walk, Doctor? It might be overcast, but at least there'll be a breeze. There are times you can hear singing on the wind too, not just the echo of your own words.",
    "talk_after_trust_increase_2": "I can vaguely remember the portraits of my ancestors decorated with medals in the hall. I also recall the épée carved with the Lion King's orders, and the maples my father planted in the front courtyard... but that's all that comes to me. I haven't returned home in a long, long while. In Her chaotic theater, Victoria's soldiers have no time to file for leave.",
    "talk_after_trust_increase_3": "Doctor, does a commander as outstanding as you ever feel sorrow? Or anger? Or... hate? I try as hard as I can not to let personal emotions sway me, but I can't forget. I promised them I would never forget.",
    "idle": "How do you sleep, after having witnessed so much cruelty...? If I could do the same as you, with a simple shut of my eyes, would I feel any better?",
    "onboard": "Tempest Platoon Leader Horn reporting in, Doctor of Rhodes Island. I've already borne witness to your own tactics, and the fighting spirit of Rhodes Island's operators. Under our ensuing cooperation, I and my troops will heed your orders.",
    "watching_battle_record": "No amount of training can ever suffice.",
    "promotion_1": "Thank you. I'll regard this as a commendation of my performance, and not a reflection of my status.",
    "promotion_2": "Confer your emblems of rank on me. I'm willing... No. I must bear the hopes of more. Of those past, now, and to come.",
    "added_to_squad": "Victoria's servicemen should take pride in their own discipline.",
    "appointed_as_squad_leader": "I trust in my platoonmates at any and all times. I'd like you to put that same trust in me.",
    "depart": "We have no time to hesitate. There are souls waiting for us, behind the firing line.",
    "begin_operation": "I'll put up my shield. Don't stand in front of me.",
    "selecting_operator_1": "Allow me to study your command style in this battle, Doctor.",
    "selecting_operator_2": "At attention. Ready to fall in.",
    "deployment_1": "Orders received.",
    "deployment_2": "I will complete my assignment.",
    "in_battle_1": "The Tempest must wipe out all that blocks the way.",
    "in_battle_2": "Come! Best me if you can!",
    "in_battle_3": "I'll impart on you all the cries I've heard.",
    "in_battle_4": "You want to topple me? By what?",
    "4-star_result": "One victory may not be enough to impact a whole war, but it can at least give more people a chance to see the open sky.",
    "3-star_result": "Target has been suppressed.",
    "sub_3-star_result": "Any mercy on the enemy is a potential disaster. Let me lead my troops to settle this.",
    "operation_failure": "Not a worry, Doctor. Until you've gotten everyone away, I will not fall.",
    "assigned_to_facility": "It doesn't resemble Victoria here, but... it reminds me of when I studied at the Royal Guard Academy.",
    "tap": "Sorry, I'm not used to setting down my weapons. Did I bruise you?",
    "trust_tap": "Hm...? I'm just reading an ordinary novel. I've gone an awfully long time without reading something new. All the written word went up in the fires of war.",
    "title": "Arknights.",
    "greeting": "Hello, Doctor. Have you rested well?"
  },
  "lore": {
    "gender": "Female",
    "place_of_birth": "Victoria",
    "birthday": "Nov 1",
    "race": "Lupo",
    "height": "168cm",
    "combat_experience": "9 Years",
    "infection_status": "Medical tests have confirmed that no infection is present.",
    "physical_strength": "Excellent",
    "mobility": "Standard",
    "physiological_endurance": "Excellent",
    "tactical_planning": "Excellent",
    "combat_skill": "Excellent",
    "originium_adaptability": "Standard"
  },
  "affiliation": [
    "Victoria"
  ],
  "class": [
    "Defender",
    "Fortress"
  ],
  "tags": [
    "DPS",
    "Defense",
    "Defender"
  ],
  "trait": "When not blocking enemies, prioritizes dealing ranged AoE Physical damage",
  "headhunting": "Yes",
  "recruitable": "No",
  "art": [
    {
      "name": "Base",
      "link": "https://ucarecdn.com/8b0922b5-185e-42b7-89e1-a355d43c4527/"
    },
    {
      "name": "E1",
      "link": "https://ucarecdn.com/dcee8a66-2bfe-499a-a4fc-7bfe8b47593e/"
    },
    {
      "name": "E2",
      "link": "https://ucarecdn.com/6d421b80-5ece-4841-98d2-625692a61f9f/"
    },
    {
      "name": "To Effloresce Whitely",
      "link": "https://ucarecdn.com/2ecada22-1a8c-40d7-afdf-9204ccb3e1bd/",
      "line": "Epoque"
    }
  ],
  "availability": "Global",
  "release_dates": {
    "cn": "4/14/2022",
    "global": "10/19/2022"
  },
  "url": "https://gamepress.gg/arknights/operator/Horn",
  "dateAdded": "2023-04-11T02:16:06.886Z"
}, "Horn"]]
	let rand = Math.floor(Math.random() * landingResponses.length)
	let currResponse: operator | {name: string, link: string} = landingResponses[rand][0] as operator
	let operatorName = landingResponses[rand][1]
	let wrapper: HTMLDivElement;
	onMount(() => {
		wrapper.style.setProperty('--bg-image', `url("../../${operatorName}.png")`);
	})
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
        {`rhodesapi.up.railway.app/api${currentDropdownSelection}`}
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
    background-image: var(--bg-image, url("../../static/Siege.png"));
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
