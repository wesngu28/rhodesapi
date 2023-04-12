export let landingResponses = [
  {
    name: "Rockrock",
    rarity: 5,
    alter: "Not provided",
    artist: "Cenm0",
    va: "千菅春香",
    biography:
      "Rockrock, a member of the Londinium Citizens' Self-Salvation Corps, cooperated with Rhodes Island during the Londinium crisis and is experienced in reconnaissance and long-ranged assault. At her own suggestion, she has reached a partnership with Rhodes Island's Londinium branch.",
    description: "Rockrock, of the Londinium Citizens' Self-Salvation Corps.",
    quote: "She wants her homeland back, and she'll do whatever it takes.",
    voicelines: {
      appointed_as_assistant:
        "You want me to be your assistant? I can't, I barely know how to read. It'll just be a waste of your time. But if you need something fixed, then I can help.",
      talk_1:
        "I'm too frugal? I don't think so, I just live the way I want. Machinery is good, but I don't need it to do anything fancy. Same goes for my clothes, only the stuff I make myself suits me best. If you have fewer needs, then of course you spend less money.",
      talk_2:
        "When my dad was killed, I honestly thought there wasn't a single good man among the Sarkaz. But now that I think about it, I was too naive at the time. How can stuff like race or appearance decide if someone's good or bad? No matter what your race is, as long as you look out for one another, you're family.",
      talk_3:
        "This outfit? Made it myself - it's gotta be as cool as possible since it gets really hot in the boiler room. It...doesn't look like work attire? What d'ya mean? There's all sorts of different workers, and each has her own needs.",
      talk_after_promotion_1:
        "Neighbors who take care of each other, simple but comfortable furniture, an ever-growin' pile of spare parts, and machinery that clanks together like the growl of thunder. Now, that's the good life. I thought my dad'd grow old with his factory, and I'd grow old with the next-generation factory, but...",
      talk_after_promotion_2:
        "Doesn't matter what it is - as long as you make it yourself, it feels like home. Same goes for Londinium. Every brick and tile was laid down by Londiniers. We know what Londinium is thinkin', and we're gonna take it back with our own hands.",
      talk_after_trust_increase_1:
        "Sometimes the commander reads books that are really hard to understand.. I remember a line went somethin' like this, 'People built cities, but refused to adapt to them.' Not sure I agree with that though. As long as you find your own way to live, it doesn't make a difference whether you're in the city or in the middle o' nowhere.",
      talk_after_trust_increase_2:
        "My dad and my old friends always used to say I was stubborn, stroppy, and foul-tempered. Don't think there's anything wrong with being stubborn, you need a bit of that to protect people around you. But, I failed... Cause... Where are they now...?",
      talk_after_trust_increase_3:
        "Here, Dr. {@nickname}. Why am I givin' money to you? 'Cause I can't spend it all, there's no point keepin' it around, and you happened to pass by. No need to be polite, I always used to give money to my friends, so they all got used to it. Huh, you don't need it? Damn it, gotta find someone else then...",
      idle: "Dr. {@nickname}, Dr. {@nickname}... Oh, havin' a sleep? Let me find a blanket for ya... Hmm, if I made a new blanket, the Doctor would probably find that helpful…",
      onboard:
        "Londinium Citizens' Self-Salvation Corps Caster, Rockrock, reporting in. Dr. {@nickname}, we've had a few misunderstandings in the past, but I'm not blinded by those old prejudices anymore. I hope we can have a good working relationship.",
      watching_battle_record:
        "That's crazy... I gotta ask again, are you sure you're a drug company?",
      promotion_1:
        "I don't care about my rank. As long as I'm with friends... I'm always ready for the next battle.",
      promotion_2:
        "I fight to reclaim my home, and to put an end to the war. I hope that one day, we'll be able to put down our weapons and pick up the tools to rebuild Londinium. Just like... in the past.",
      added_to_squad: "Of course, it's my job to protect my family.",
      appointed_as_squad_leader:
        "Be careful. Your safety is more important than victory.",
      depart: "My drones are ready, Doctor. Should I scout ahead?",
      begin_operation: "Found 'em. They're not gettin' away!",
      selecting_operator_1: "I'm here, Doctor. I can see the enemy's tracks.",
      selecting_operator_2: "Standing by. Doctor, where do you need me?",
      deployment_1: "Ready to deploy my drones.",
      deployment_2: "Activating Rock-18 attack module.",
      in_battle_1: "Rock-18, track the enemy!",
      in_battle_2: "It's up to us to protect our homes!",
      in_battle_3: "I'm not watching my friends die again!",
      in_battle_4: "Rock-18, maximum power!",
      "4-star_result":
        "I know my drone better than anyone else. It can't do that on its own. The fact that you've used it so effectively just shows how great a commander you are, Dr. {@nickname}.",
      "3-star_result":
        "A total victory with no casualties. Dr. {@nickname}, if you were around back then, would things have... turned out differently?",
      "sub_3-star_result":
        "The enemies are gettin' away, after them... Wait, no, scrap that. They might be leadin' us into a trap... Safety's gotta come first.",
      operation_failure:
        "Run, Doctor, I'll hold them off! ...It's alright, there's no need to worry... When I joined the Self-Salvation Corps, I was prepared for this moment.",
      assigned_to_facility:
        "This place... isn't the same as my home, but it's just as warm. I really like it here.",
      tap: "Aw!... Is something wrong? I'm just lookin' at this exhaust fan. Closure said this model's five years old, but it's the first time I've seen it... So ingenious.",
      trust_tap:
        "Oh, Dr. {@nickname}? I'm makin' a wooden carving for you. The things I make are usually only good for me, but it should be fine givin' away simple stuff like decorations, right?",
      title: "Arknights.",
      greeting:
        "Good mornin', Dr. {@nickname}. Time for another day of hard work.",
    },
    lore: {
      gender: "Female",
      place_of_birth: "Victoria",
      birthday: "June 7",
      race: "Feline",
      height: "161cm",
      combat_experience: "Half a year",
      infection_status:
        "Medical tests have confirmed that no infection is present.",
      physical_strength: "Standard",
      mobility: "Standard",
      physiological_endurance: "Standard",
      tactical_planning: "Excellent",
      combat_skill: "Standard",
      originium_adaptability: "Standard",
    },
    affiliation: ["Victoria"],
    class: ["Caster", "Drone", "Mech-Accord"],
    tags: ["DPS", "Caster"],
    range: [
      {
        elite: "Base",
        range: [
          ["attackable", "unit", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
        ],
      },
      {
        elite: "E1",
        range: [
          ["attackable", "unit", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["null", "attackable", "null"],
        ],
      },
      {
        elite: "E2",
        range: [
          ["attackable", "unit", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["null", "attackable", "null"],
        ],
      },
    ],
    statistics: {
      base: {
        hp: "600",
        atk: "148",
        def: "49",
        resist: "19",
        deploy: "70",
        cost: "0",
        interval: "1.3",
        block: " 1",
      },
      e0max: {
        hp: "858",
        atk: "209",
        def: "75",
        block: "1",
      },
      e1max: {
        hp: "1115",
        atk: "268",
        def: "103",
        block: "1",
      },
      e2max: {
        hp: "1468",
        atk: "320",
        def: "123",
        block: "1",
      },
    },
    trait:
      "Controls a Drone to deal Arts damage to an enemy; When the Drone continuously attacks the same enemy, its damage will increase (up to 110% of the operator's ATK)",
    costs: [
      {
        name: "Skill Summary - 1",
        amount: 8,
      },
      {
        name: "Oriron Shard",
        amount: 5,
      },
      {
        name: "Skill Summary - 2",
        amount: 18,
      },
      {
        name: "Polyketon",
        amount: 3,
      },
      {
        name: "Device",
        amount: 3,
      },
      {
        name: "Crystalline Component",
        amount: 4,
      },
      {
        name: "Skill Summary - 3",
        amount: 48,
      },
      {
        name: "Semi-Synthetic Solvent",
        amount: 3,
      },
      {
        name: "Coagulating Gel",
        amount: 2,
      },
      {
        name: "Refined Solvent",
        amount: 3,
      },
      {
        name: "Incandescent Alloy",
        amount: 4,
      },
      {
        name: "Manganese Trihydrate",
        amount: 3,
      },
      {
        name: "Cutting Fluid Solution",
        amount: 12,
      },
      {
        name: "D32 Steel",
        amount: 4,
      },
      {
        name: "Polymerized Gel",
        amount: 4,
      },
      {
        name: "Orirock Concentration",
        amount: 6,
      },
      {
        name: "Grindstone",
        amount: 4,
      },
      {
        name: "Grindstone Pentahydrate",
        amount: 3,
      },
      {
        name: "White Horse Kohl",
        amount: 6,
      },
      {
        name: "Crystalline Electronic Unit",
        amount: 4,
      },
      {
        name: "LMD",
        amount: 140000,
      },
      {
        name: "Caster Chip",
        amount: 4,
      },
      {
        name: "Sugar",
        amount: 4,
      },
      {
        name: "Polyester",
        amount: 3,
      },
      {
        name: "Caster Dualchip",
        amount: 3,
      },
      {
        name: "Aketon",
        amount: 14,
      },
    ],
    potential: [
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Redeployment Cooldown",
        value: "-4",
      },
      {
        name: "Attack Power",
        value: "+24",
      },
      {
        name: "Improves Talent",
        value: "",
      },
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Attack Power",
        value: "+60",
      },
    ],
    trust: [
      {
        name: "Attack Power",
        value: "+60",
      },
    ],
    talents: [
      {
        name: "Firm Foundation",
        variation: [
          {
            description:
              "+2% ATK for every 15 seconds this unit remains on the battlefield, stacking up to 3 times",
            elite: "E1",
            potential: "0",
          },
          {
            description:
              "+3%(+1%) ATK for every 15 seconds this unit remains on the battlefield, stacking up to 3 times",
            elite: "E1",
            potential: "5",
          },
          {
            description:
              "+4% ATK for every 15 seconds this unit remains on the battlefield, stacking up to 4 times",
            elite: "E2",
            potential: "0",
          },
          {
            description:
              "+5%(+1%) ATK for every 15 seconds this unit remains on the battlefield, stacking up to 4 times",
            elite: "E2",
            potential: "5",
          },
        ],
      },
    ],
    skills: [
      {
        name: "Tactical Chant γ",
        variations: [
          {
            level: 1,
            description: "ASPD +30",
            sp_cost: "40",
            initial_sp: "0",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description: "ASPD +35",
            sp_cost: "40",
            initial_sp: "0",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description: "ASPD +40",
            sp_cost: "40",
            initial_sp: "0",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description: "ASPD +45",
            sp_cost: "35",
            initial_sp: "5",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description: "ASPD +50",
            sp_cost: "35",
            initial_sp: "5",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description: "ASPD +55",
            sp_cost: "35",
            initial_sp: "5",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description: "ASPD +60",
            sp_cost: "32",
            initial_sp: "10",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description: "ASPD +70",
            sp_cost: "32",
            initial_sp: "10",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description: "ASPD +80",
            sp_cost: "32",
            initial_sp: "10",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description: "ASPD +90",
            sp_cost: "30",
            initial_sp: "15",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
      {
        name: "Willing Burden",
        variations: [
          {
            level: 1,
            description:
              "ASPD +30; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "50",
            initial_sp: "10",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description:
              "ASPD +35; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "48",
            initial_sp: "10",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description:
              "ASPD +40; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "46",
            initial_sp: "10",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description:
              "ASPD +45; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "45",
            initial_sp: "15",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description:
              "ASPD +50; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "43",
            initial_sp: "15",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description:
              "ASPD +55; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "41",
            initial_sp: "15",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description:
              "ASPD +60; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.7x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "20",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description:
              "ASPD +65; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.8x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "20",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description:
              "ASPD +70; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.9x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "20",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description:
              "ASPD +80; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 2x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "25",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
    ],
    module: [{}],
    base: [
      {
        name: "Shed Excess",
        level: "Elite 0",
        effects:
          "When this Operator is assigned to the Workshop to process any material, the production rate of byproduct increases by 65%",
        building: "Workshop",
      },
      {
        name: "Useless Gift",
        level: "Elite 2",
        effects:
          "When this Operator is assigned to the Workshop to process Elite materials, any byproducts of T3 quality produced will be Polyester Packs",
        building: "Workshop",
      },
    ],
    headhunting: "Yes",
    recruitable: "No",
    art: [
      {
        name: "Base",
        link: "https://ucarecdn.com/a9383c7d-2606-475b-bfb6-6f6c1bdb0250/",
      },
      {
        name: "E1",
        link: "https://ucarecdn.com/1a9155d3-62c8-409c-86bd-ff07835b82f7/",
      },
      {
        name: "E2",
        link: "https://ucarecdn.com/bc2fc33f-42b3-4f48-8109-0ac92772770d/",
      },
      {
        name: "Before Singing",
        link: "https://ucarecdn.com/21374398-f368-4b93-9c29-99e8c24f09d3/",
        line: "lxh",
      },
    ],
    availability: "Global",
    release_dates: {
      cn: "4/14/2022",
      global: "10/19/2022",
    },
    url: "https://gamepress.gg/arknights/operator/Rockrock",
  },
  {
    name: "Rockrock",
    rarity: 5,
    alter: "Not provided",
    artist: "Cenm0",
    va: "千菅春香",
    biography:
      "Rockrock, a member of the Londinium Citizens' Self-Salvation Corps, cooperated with Rhodes Island during the Londinium crisis and is experienced in reconnaissance and long-ranged assault. At her own suggestion, she has reached a partnership with Rhodes Island's Londinium branch.",
    description: "Rockrock, of the Londinium Citizens' Self-Salvation Corps.",
    quote: "She wants her homeland back, and she'll do whatever it takes.",
    voicelines: {
      appointed_as_assistant:
        "You want me to be your assistant? I can't, I barely know how to read. It'll just be a waste of your time. But if you need something fixed, then I can help.",
      talk_1:
        "I'm too frugal? I don't think so, I just live the way I want. Machinery is good, but I don't need it to do anything fancy. Same goes for my clothes, only the stuff I make myself suits me best. If you have fewer needs, then of course you spend less money.",
      talk_2:
        "When my dad was killed, I honestly thought there wasn't a single good man among the Sarkaz. But now that I think about it, I was too naive at the time. How can stuff like race or appearance decide if someone's good or bad? No matter what your race is, as long as you look out for one another, you're family.",
      talk_3:
        "This outfit? Made it myself - it's gotta be as cool as possible since it gets really hot in the boiler room. It...doesn't look like work attire? What d'ya mean? There's all sorts of different workers, and each has her own needs.",
      talk_after_promotion_1:
        "Neighbors who take care of each other, simple but comfortable furniture, an ever-growin' pile of spare parts, and machinery that clanks together like the growl of thunder. Now, that's the good life. I thought my dad'd grow old with his factory, and I'd grow old with the next-generation factory, but...",
      talk_after_promotion_2:
        "Doesn't matter what it is - as long as you make it yourself, it feels like home. Same goes for Londinium. Every brick and tile was laid down by Londiniers. We know what Londinium is thinkin', and we're gonna take it back with our own hands.",
      talk_after_trust_increase_1:
        "Sometimes the commander reads books that are really hard to understand.. I remember a line went somethin' like this, 'People built cities, but refused to adapt to them.' Not sure I agree with that though. As long as you find your own way to live, it doesn't make a difference whether you're in the city or in the middle o' nowhere.",
      talk_after_trust_increase_2:
        "My dad and my old friends always used to say I was stubborn, stroppy, and foul-tempered. Don't think there's anything wrong with being stubborn, you need a bit of that to protect people around you. But, I failed... Cause... Where are they now...?",
      talk_after_trust_increase_3:
        "Here, Dr. {@nickname}. Why am I givin' money to you? 'Cause I can't spend it all, there's no point keepin' it around, and you happened to pass by. No need to be polite, I always used to give money to my friends, so they all got used to it. Huh, you don't need it? Damn it, gotta find someone else then...",
      idle: "Dr. {@nickname}, Dr. {@nickname}... Oh, havin' a sleep? Let me find a blanket for ya... Hmm, if I made a new blanket, the Doctor would probably find that helpful…",
      onboard:
        "Londinium Citizens' Self-Salvation Corps Caster, Rockrock, reporting in. Dr. {@nickname}, we've had a few misunderstandings in the past, but I'm not blinded by those old prejudices anymore. I hope we can have a good working relationship.",
      watching_battle_record:
        "That's crazy... I gotta ask again, are you sure you're a drug company?",
      promotion_1:
        "I don't care about my rank. As long as I'm with friends... I'm always ready for the next battle.",
      promotion_2:
        "I fight to reclaim my home, and to put an end to the war. I hope that one day, we'll be able to put down our weapons and pick up the tools to rebuild Londinium. Just like... in the past.",
      added_to_squad: "Of course, it's my job to protect my family.",
      appointed_as_squad_leader:
        "Be careful. Your safety is more important than victory.",
      depart: "My drones are ready, Doctor. Should I scout ahead?",
      begin_operation: "Found 'em. They're not gettin' away!",
      selecting_operator_1: "I'm here, Doctor. I can see the enemy's tracks.",
      selecting_operator_2: "Standing by. Doctor, where do you need me?",
      deployment_1: "Ready to deploy my drones.",
      deployment_2: "Activating Rock-18 attack module.",
      in_battle_1: "Rock-18, track the enemy!",
      in_battle_2: "It's up to us to protect our homes!",
      in_battle_3: "I'm not watching my friends die again!",
      in_battle_4: "Rock-18, maximum power!",
      "4-star_result":
        "I know my drone better than anyone else. It can't do that on its own. The fact that you've used it so effectively just shows how great a commander you are, Dr. {@nickname}.",
      "3-star_result":
        "A total victory with no casualties. Dr. {@nickname}, if you were around back then, would things have... turned out differently?",
      "sub_3-star_result":
        "The enemies are gettin' away, after them... Wait, no, scrap that. They might be leadin' us into a trap... Safety's gotta come first.",
      operation_failure:
        "Run, Doctor, I'll hold them off! ...It's alright, there's no need to worry... When I joined the Self-Salvation Corps, I was prepared for this moment.",
      assigned_to_facility:
        "This place... isn't the same as my home, but it's just as warm. I really like it here.",
      tap: "Aw!... Is something wrong? I'm just lookin' at this exhaust fan. Closure said this model's five years old, but it's the first time I've seen it... So ingenious.",
      trust_tap:
        "Oh, Dr. {@nickname}? I'm makin' a wooden carving for you. The things I make are usually only good for me, but it should be fine givin' away simple stuff like decorations, right?",
      title: "Arknights.",
      greeting:
        "Good mornin', Dr. {@nickname}. Time for another day of hard work.",
    },
    lore: {
      gender: "Female",
      place_of_birth: "Victoria",
      birthday: "June 7",
      race: "Feline",
      height: "161cm",
      combat_experience: "Half a year",
      infection_status:
        "Medical tests have confirmed that no infection is present.",
      physical_strength: "Standard",
      mobility: "Standard",
      physiological_endurance: "Standard",
      tactical_planning: "Excellent",
      combat_skill: "Standard",
      originium_adaptability: "Standard",
    },
    affiliation: ["Victoria"],
    class: ["Caster", "Drone", "Mech-Accord"],
    tags: ["DPS", "Caster"],
    range: [
      {
        elite: "Base",
        range: [
          ["attackable", "unit", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
        ],
      },
      {
        elite: "E1",
        range: [
          ["attackable", "unit", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["null", "attackable", "null"],
        ],
      },
      {
        elite: "E2",
        range: [
          ["attackable", "unit", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["null", "attackable", "null"],
        ],
      },
    ],
    statistics: {
      base: {
        hp: "600",
        atk: "148",
        def: "49",
        resist: "19",
        deploy: "70",
        cost: "0",
        interval: "1.3",
        block: " 1",
      },
      e0max: {
        hp: "858",
        atk: "209",
        def: "75",
        block: "1",
      },
      e1max: {
        hp: "1115",
        atk: "268",
        def: "103",
        block: "1",
      },
      e2max: {
        hp: "1468",
        atk: "320",
        def: "123",
        block: "1",
      },
    },
    trait:
      "Controls a Drone to deal Arts damage to an enemy; When the Drone continuously attacks the same enemy, its damage will increase (up to 110% of the operator's ATK)",
    costs: [
      {
        name: "Skill Summary - 1",
        amount: 8,
      },
      {
        name: "Oriron Shard",
        amount: 5,
      },
      {
        name: "Skill Summary - 2",
        amount: 18,
      },
      {
        name: "Polyketon",
        amount: 3,
      },
      {
        name: "Device",
        amount: 3,
      },
      {
        name: "Crystalline Component",
        amount: 4,
      },
      {
        name: "Skill Summary - 3",
        amount: 48,
      },
      {
        name: "Semi-Synthetic Solvent",
        amount: 3,
      },
      {
        name: "Coagulating Gel",
        amount: 2,
      },
      {
        name: "Refined Solvent",
        amount: 3,
      },
      {
        name: "Incandescent Alloy",
        amount: 4,
      },
      {
        name: "Manganese Trihydrate",
        amount: 3,
      },
      {
        name: "Cutting Fluid Solution",
        amount: 12,
      },
      {
        name: "D32 Steel",
        amount: 4,
      },
      {
        name: "Polymerized Gel",
        amount: 4,
      },
      {
        name: "Orirock Concentration",
        amount: 6,
      },
      {
        name: "Grindstone",
        amount: 4,
      },
      {
        name: "Grindstone Pentahydrate",
        amount: 3,
      },
      {
        name: "White Horse Kohl",
        amount: 6,
      },
      {
        name: "Crystalline Electronic Unit",
        amount: 4,
      },
      {
        name: "LMD",
        amount: 140000,
      },
      {
        name: "Caster Chip",
        amount: 4,
      },
      {
        name: "Sugar",
        amount: 4,
      },
      {
        name: "Polyester",
        amount: 3,
      },
      {
        name: "Caster Dualchip",
        amount: 3,
      },
      {
        name: "Aketon",
        amount: 14,
      },
    ],
    potential: [
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Redeployment Cooldown",
        value: "-4",
      },
      {
        name: "Attack Power",
        value: "+24",
      },
      {
        name: "Improves Talent",
        value: "",
      },
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Attack Power",
        value: "+60",
      },
    ],
    trust: [
      {
        name: "Attack Power",
        value: "+60",
      },
    ],
    talents: [
      {
        name: "Firm Foundation",
        variation: [
          {
            description:
              "+2% ATK for every 15 seconds this unit remains on the battlefield, stacking up to 3 times",
            elite: "E1",
            potential: "0",
          },
          {
            description:
              "+3%(+1%) ATK for every 15 seconds this unit remains on the battlefield, stacking up to 3 times",
            elite: "E1",
            potential: "5",
          },
          {
            description:
              "+4% ATK for every 15 seconds this unit remains on the battlefield, stacking up to 4 times",
            elite: "E2",
            potential: "0",
          },
          {
            description:
              "+5%(+1%) ATK for every 15 seconds this unit remains on the battlefield, stacking up to 4 times",
            elite: "E2",
            potential: "5",
          },
        ],
      },
    ],
    skills: [
      {
        name: "Tactical Chant γ",
        variations: [
          {
            level: 1,
            description: "ASPD +30",
            sp_cost: "40",
            initial_sp: "0",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description: "ASPD +35",
            sp_cost: "40",
            initial_sp: "0",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description: "ASPD +40",
            sp_cost: "40",
            initial_sp: "0",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description: "ASPD +45",
            sp_cost: "35",
            initial_sp: "5",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description: "ASPD +50",
            sp_cost: "35",
            initial_sp: "5",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description: "ASPD +55",
            sp_cost: "35",
            initial_sp: "5",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description: "ASPD +60",
            sp_cost: "32",
            initial_sp: "10",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description: "ASPD +70",
            sp_cost: "32",
            initial_sp: "10",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description: "ASPD +80",
            sp_cost: "32",
            initial_sp: "10",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description: "ASPD +90",
            sp_cost: "30",
            initial_sp: "15",
            duration: "30 Seconds",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
      {
        name: "Willing Burden",
        variations: [
          {
            level: 1,
            description:
              "ASPD +30; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "50",
            initial_sp: "10",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description:
              "ASPD +35; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "48",
            initial_sp: "10",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description:
              "ASPD +40; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.5x, ATK +30%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "46",
            initial_sp: "10",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description:
              "ASPD +45; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "45",
            initial_sp: "15",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description:
              "ASPD +50; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "43",
            initial_sp: "15",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description:
              "ASPD +55; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.6x, ATK +40%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "41",
            initial_sp: "15",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description:
              "ASPD +60; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.7x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "20",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description:
              "ASPD +65; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.8x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "20",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description:
              "ASPD +70; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 1.9x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "20",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description:
              "ASPD +80; Releases Drone to attack enemiesOverdrive: Trait Max drone damage increased to 2x, ATK +50%; When the skill ends, Stun for the same duration as the OverloadThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator. Can manually deactivate skill at will.",
            sp_cost: "40",
            initial_sp: "25",
            duration: "40 Seconds",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
    ],
    module: [{}],
    base: [
      {
        name: "Shed Excess",
        level: "Elite 0",
        effects:
          "When this Operator is assigned to the Workshop to process any material, the production rate of byproduct increases by 65%",
        building: "Workshop",
      },
      {
        name: "Useless Gift",
        level: "Elite 2",
        effects:
          "When this Operator is assigned to the Workshop to process Elite materials, any byproducts of T3 quality produced will be Polyester Packs",
        building: "Workshop",
      },
    ],
    headhunting: "Yes",
    recruitable: "No",
    art: [
      {
        name: "Base",
        link: "https://ucarecdn.com/a9383c7d-2606-475b-bfb6-6f6c1bdb0250/",
      },
      {
        name: "E1",
        link: "https://ucarecdn.com/1a9155d3-62c8-409c-86bd-ff07835b82f7/",
      },
      {
        name: "E2",
        link: "https://ucarecdn.com/bc2fc33f-42b3-4f48-8109-0ac92772770d/",
      },
      {
        name: "Before Singing",
        link: "https://ucarecdn.com/21374398-f368-4b93-9c29-99e8c24f09d3/",
        line: "lxh",
      },
    ],
    availability: "Global",
    release_dates: {
      cn: "4/14/2022",
      global: "10/19/2022",
    },
    url: "https://gamepress.gg/arknights/operator/Rockrock",
  },
  {
    name: "Horn",
    rarity: 6,
    alter: "Not provided",
    artist: "m9nokuro",
    va: "丰口惠美",
    biography:
      "Horn, graduate of the Royal Guard Academy of Victoria, presently commander of Victoria's 2nd Tempest Platoon. Fought in coordination with Rhodes Island during the Londinium incident. Ratified a cooperative strategic contract with Rhodes Island following referral by Elite Operator Misery.",
    description: "Horn, Soldier of Victoria, here with you to face the crisis.",
    quote: "Shells swift as wind storm, shield stiff as steel wall.",
    voicelines: {
      appointed_as_assistant:
        "I'll sort out your battlefield reports for you. My officialese isn't too shabby. I'll stand guard during your rest hours. Anything else required...? I'd prefer you don't keep me idle.",
      talk_1:
        "Has Bagpipe kept up her habit of humming around you? Me? I'm more the type to appreciate music in peace. The only thing a horn can play is the order to charge—I'm joking of course, Doctor.",
      talk_2:
        "The name 'White Wolf' goes as far back in history as the Aslan monarchy. Why are you interested, though? ...Ah. You saw... my fangs? I'm sorry, I lost control of myself then. I won't let it happen again.",
      talk_3:
        "I have beautiful handwriting? Thank you. It just comes with the facade when you're raised noble, which I've never been keen on. But sometime these days, I'm grateful for it—whenever I pick up a pen, everything else leaves my mind, and my focus is only on how I write every letter in the proper way.",
      talk_after_promotion_1:
        "As that city spat great black crystals from its gaping wounds, I thought there could be no hope left for it... Is this place familiar with those made Infected not by Catastrophe, but by human hands, Doctor of Rhodes Island?",
      talk_after_promotion_2:
        "Rhodes Island Operator Misery managed to rescue me twice, and I'm sincerely grateful for it. I won't ask why I was the one he rescued. Those who live on are to carry forth the wishes of those who didn't make it.",
      talk_after_trust_increase_1:
        "I always feel stifled by gloomy indoor atmospheres. Do you want to go out and take a walk, Doctor? It might be overcast, but at least there'll be a breeze. There are times you can hear singing on the wind too, not just the echo of your own words.",
      talk_after_trust_increase_2:
        "I can vaguely remember the portraits of my ancestors decorated with medals in the hall. I also recall the épée carved with the Lion King's orders, and the maples my father planted in the front courtyard... but that's all that comes to me. I haven't returned home in a long, long while. In Her chaotic theater, Victoria's soldiers have no time to file for leave.",
      talk_after_trust_increase_3:
        "Doctor, does a commander as outstanding as you ever feel sorrow? Or anger? Or... hate? I try as hard as I can not to let personal emotions sway me, but I can't forget. I promised them I would never forget.",
      idle: "How do you sleep, after having witnessed so much cruelty...? If I could do the same as you, with a simple shut of my eyes, would I feel any better?",
      onboard:
        "Tempest Platoon Leader Horn reporting in, Doctor of Rhodes Island. I've already borne witness to your own tactics, and the fighting spirit of Rhodes Island's operators. Under our ensuing cooperation, I and my troops will heed your orders.",
      watching_battle_record: "No amount of training can ever suffice.",
      promotion_1:
        "Thank you. I'll regard this as a commendation of my performance, and not a reflection of my status.",
      promotion_2:
        "Confer your emblems of rank on me. I'm willing... No. I must bear the hopes of more. Of those past, now, and to come.",
      added_to_squad:
        "Victoria's servicemen should take pride in their own discipline.",
      appointed_as_squad_leader:
        "I trust in my platoonmates at any and all times. I'd like you to put that same trust in me.",
      depart:
        "We have no time to hesitate. There are souls waiting for us, behind the firing line.",
      begin_operation: "I'll put up my shield. Don't stand in front of me.",
      selecting_operator_1:
        "Allow me to study your command style in this battle, Doctor.",
      selecting_operator_2: "At attention. Ready to fall in.",
      deployment_1: "Orders received.",
      deployment_2: "I will complete my assignment.",
      in_battle_1: "The Tempest must wipe out all that blocks the way.",
      in_battle_2: "Come! Best me if you can!",
      in_battle_3: "I'll impart on you all the cries I've heard.",
      in_battle_4: "You want to topple me? By what?",
      "4-star_result":
        "One victory may not be enough to impact a whole war, but it can at least give more people a chance to see the open sky.",
      "3-star_result": "Target has been suppressed.",
      "sub_3-star_result":
        "Any mercy on the enemy is a potential disaster. Let me lead my troops to settle this.",
      operation_failure:
        "Not a worry, Doctor. Until you've gotten everyone away, I will not fall.",
      assigned_to_facility:
        "It doesn't resemble Victoria here, but... it reminds me of when I studied at the Royal Guard Academy.",
      tap: "Sorry, I'm not used to setting down my weapons. Did I bruise you?",
      trust_tap:
        "Hm...? I'm just reading an ordinary novel. I've gone an awfully long time without reading something new. All the written word went up in the fires of war.",
      title: "Arknights.",
      greeting: "Hello, Doctor. Have you rested well?",
    },
    lore: {
      gender: "Female",
      place_of_birth: "Victoria",
      birthday: "Nov 1",
      race: "Lupo",
      height: "168cm",
      combat_experience: "9 Years",
      infection_status:
        "Medical tests have confirmed that no infection is present.",
      physical_strength: "Excellent",
      mobility: "Standard",
      physiological_endurance: "Excellent",
      tactical_planning: "Excellent",
      combat_skill: "Excellent",
      originium_adaptability: "Standard",
    },
    affiliation: ["Victoria"],
    class: ["Defender", "Fortress"],
    tags: ["DPS", "Defense", "Defender"],
    range: [
      {
        elite: "Base",
        range: [
          ["null", "unit", "null"],
          ["null", "null", "null"],
          ["null", "null", "null"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
        ],
      },
      {
        elite: "E1",
        range: [
          ["null", "unit", "null"],
          ["null", "null", "null"],
          ["null", "null", "null"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
        ],
      },
      {
        elite: "E2",
        range: [
          ["null", "unit", "null"],
          ["null", "null", "null"],
          ["null", "null", "null"],
          ["attackable", "attackable", "attackable"],
          ["attackable", "attackable", "attackable"],
          ["null", "attackable", "null"],
        ],
      },
    ],
    statistics: {
      base: {
        hp: "1237",
        atk: "483",
        def: "223",
        resist: "2",
        deploy: "70",
        cost: "37",
        interval: "2.8",
        block: "block: 2",
      },
      e0max: {
        hp: "1650",
        atk: "620",
        def: "334",
        block: "2",
      },
      e1max: {
        hp: "2200",
        atk: "776",
        def: "452",
        block: "3",
      },
      e2max: {
        hp: "3067",
        atk: "936",
        def: "620",
        block: "3",
      },
    },
    trait:
      "When not blocking enemies, prioritizes dealing ranged AoE Physical damage",
    costs: [
      {
        name: "Skill Summary - 1",
        amount: 10,
      },
      {
        name: "Sugar Substitute",
        amount: 5,
      },
      {
        name: "Diketon",
        amount: 4,
      },
      {
        name: "Skill Summary - 2",
        amount: 24,
      },
      {
        name: "Polyester",
        amount: 5,
      },
      {
        name: "Oriron",
        amount: 4,
      },
      {
        name: "Sugar",
        amount: 8,
      },
      {
        name: "Incandescent Alloy",
        amount: 13,
      },
      {
        name: "Skill Summary - 3",
        amount: 113,
      },
      {
        name: "Oriron Cluster",
        amount: 3,
      },
      {
        name: "Compound Cutting Fluid",
        amount: 5,
      },
      {
        name: "Cutting Fluid Solution",
        amount: 10,
      },
      {
        name: "Integrated Device",
        amount: 5,
      },
      {
        name: "Manganese Trihydrate",
        amount: 11,
      },
      {
        name: "Refined Solvent",
        amount: 12,
      },
      {
        name: "D32 Steel",
        amount: 10,
      },
      {
        name: "RMA70-24",
        amount: 9,
      },
      {
        name: "Grindstone Pentahydrate",
        amount: 4,
      },
      {
        name: "White Horse Kohl",
        amount: 9,
      },
      {
        name: "Crystalline Electronic Unit",
        amount: 6,
      },
      {
        name: "Polymerized Gel",
        amount: 4,
      },
      {
        name: "Orirock Concentration",
        amount: 4,
      },
      {
        name: "Grindstone",
        amount: 7,
      },
      {
        name: "Polymerization Preparation",
        amount: 6,
      },
      {
        name: "LMD",
        amount: 210000,
      },
      {
        name: "Defender Chip",
        amount: 5,
      },
      {
        name: "Orirock Cube",
        amount: 12,
      },
      {
        name: "Defender Dualchip",
        amount: 4,
      },
      {
        name: "Oriron Block",
        amount: 7,
      },
    ],
    potential: [
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Improves First Talent",
        value: "",
      },
      {
        name: "Attack Power",
        value: "+30",
      },
      {
        name: "Improves Second Talent",
        value: "",
      },
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Maximum HP",
        value: "+300",
      },
      {
        name: "Attack Power",
        value: "+70",
      },
    ],
    trust: [
      {
        name: "Maximum HP",
        value: "+300",
      },
      {
        name: "Attack Power",
        value: "+70",
      },
    ],
    talents: [
      {
        name: "Military Fortress",
        variation: [
          {
            description:
              "When this unit is on the field, Defender Operators gain +10% ATK",
            elite: "E1",
            potential: "0",
          },
          {
            description:
              "When this unit is on the field, Defender Operators gain +13%(+3%) ATK",
            elite: "E1",
            potential: "0",
          },
          {
            description:
              "When this unit is on the field, Defender Operators gain +20% ATK",
            elite: "E2",
            potential: "0",
          },
          {
            description:
              "When this unit is on the field, Defender Operators gain +23%(+3%) ATK",
            elite: "E2",
            potential: "0",
          },
          {
            description:
              "Instead of retreating when defeated, recover HP to max and gain -50% Max HP, +18 ASPD, and +18% DEF (triggers once per deployment)",
            elite: "E2",
            potential: "0",
          },
          {
            description:
              "Instead of retreating when defeated, recover HP to max and gain -50% Max HP, +21(+3) ASPD, and +21%(+3%) DEF (triggers once per deployment)",
            elite: "E2",
            potential: "5",
          },
        ],
      },
    ],
    skills: [
      {
        name: "Flare Grenade",
        variations: [
          {
            level: 1,
            description:
              "The next attack deals 160% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 5 seconds, disabling enemy InvisibleCan store 1 charges",
            sp_cost: "8",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description:
              "The next attack deals 170% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 5 seconds, disabling enemy InvisibleCan store 1 charges",
            sp_cost: "8",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description:
              "The next attack deals 180% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 5 seconds, disabling enemy InvisibleCan store 1 charges",
            sp_cost: "8",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description:
              "The next attack deals 190% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 6 seconds, disabling enemy InvisibleCan store 1 charges",
            sp_cost: "7",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description:
              "The next attack deals 200% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 6 seconds, disabling enemy InvisibleCan store 1 charges",
            sp_cost: "7",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description:
              "The next attack deals 210% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 6 seconds, disabling enemy InvisibleCan store 1 charges",
            sp_cost: "7",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description:
              "The next attack deals 220% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 7 seconds, disabling enemy InvisibleCan store 2 charges",
            sp_cost: "6",
            initial_sp: "0",
            duration: " -",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description:
              "The next attack deals 240% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 7 seconds, disabling enemy InvisibleCan store 2 charges",
            sp_cost: "5",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description:
              "The next attack deals 260% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 7 seconds, disabling enemy InvisibleCan store 2 charges",
            sp_cost: "5",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description:
              "The next attack deals 280% ATK as Physical damage. If it is a ranged attack, splash area is increased, and an illuminated zone is created for 8 seconds, disabling enemy InvisibleCan store 2 charges",
            sp_cost: "5",
            initial_sp: "0",
            duration: "-",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Auto Trigger",
      },
      {
        name: "Tempest Command",
        variations: [
          {
            level: 1,
            description:
              "Each attack deals 130% ATK as Physical splash damageOverdrive: Each attack deals 30% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "35",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description:
              "Each attack deals 140% ATK as Physical splash damageOverdrive: Each attack deals 30% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "35",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description:
              "Each attack deals 150% ATK as Physical splash damageOverdrive: Each attack deals 30% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "35",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description:
              "Each attack deals 160% ATK as Physical splash damageOverdrive: Each attack deals 35% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "30",
            initial_sp: "15",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description:
              "Each attack deals 170% ATK as Physical splash damageOverdrive: Each attack deals 35% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "30",
            initial_sp: "15",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description:
              "Each attack deals 180% ATK as Physical splash damageOverdrive: Each attack deals 35% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "30",
            initial_sp: "15",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description:
              "Each attack deals 190% ATK as Physical splash damageOverdrive: Each attack deals 40% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "28",
            initial_sp: "15",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description:
              "Each attack deals 200% ATK as Physical splash damageOverdrive: Each attack deals 50% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "27",
            initial_sp: "18",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description:
              "Each attack deals 220% ATK as Physical splash damageOverdrive: Each attack deals 50% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "26",
            initial_sp: "18",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description:
              "Each attack deals 240% ATK as Physical splash damageOverdrive: Each attack deals 60% ATK as extra Arts splash damage. If cancelled manually, fire all remaining bullets, and lose 60%HPSkill has 10 ammo and can be manually deactivated",
            sp_cost: "25",
            initial_sp: "18",
            duration: "-",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
      {
        name: "Ultimate Line of Defense",
        variations: [
          {
            level: 1,
            description:
              "ATK +10%, attack interval slightly reducedOverdrive: ATK instead +20%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -0.6",
            sp_cost: "50",
            initial_sp: "15",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description:
              "ATK +15%, attack interval slightly reducedOverdrive: ATK instead +30%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -0.6",
            sp_cost: "50",
            initial_sp: "15",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description:
              "ATK +20%, attack interval slightly reducedOverdrive: ATK instead +40%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -0.6",
            sp_cost: "50",
            initial_sp: "15",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description:
              "ATK +25%, attack interval reducedOverdrive: ATK becomes +50%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.2",
            sp_cost: "50",
            initial_sp: "15",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description:
              "ATK +30%, attack interval reducedOverdrive: ATK becomes +60%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.2",
            sp_cost: "45",
            initial_sp: "20",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description:
              "ATK +35%, attack interval reducedOverdrive: ATK becomes +70%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.2",
            sp_cost: "45",
            initial_sp: "20",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description:
              "ATK +40%, attack interval greatly reducedOverdrive: ATK becomes +80%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.8",
            sp_cost: "40",
            initial_sp: "25",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description:
              "ATK +50%, attack interval greatly reducedOverdrive: ATK becomes +100%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.8",
            sp_cost: "38",
            initial_sp: "25",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description:
              "ATK +60%, attack interval greatly reducedOverdrive: ATK becomes +120%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.8",
            sp_cost: "36",
            initial_sp: "25",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description:
              "ATK +70%, attack interval greatly reducedOverdrive: ATK becomes +140%, gradually lose HP (12% Max HP/sec after 12 seconds)Skill can be manually deactivated* This Skill modifies the Attack Interval by -1.8",
            sp_cost: "35",
            initial_sp: "25",
            duration: "24 Seconds",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
    ],
    module: [{}],
    base: [
      {
        name: "Military Engineering",
        level: "Elite 0",
        effects:
          "When this Operator is assigned to the Workshop to process Elite materials, reduces the Morale consumed by all corresponding formulas that cost 4 Morale by -1",
        building: "Workshop",
      },
      {
        name: "DIY Incandescent Alloy",
        level: "Elite 2",
        effects:
          "When this Operator is assigned to the Workshop to process Incandescent Alloy Block material, the production rate of byproduct increases by 100%",
        building: "Workshop",
      },
    ],
    headhunting: "Yes",
    recruitable: "No",
    art: [
      {
        name: "Base",
        link: "https://ucarecdn.com/8b0922b5-185e-42b7-89e1-a355d43c4527/",
      },
      {
        name: "E1",
        link: "https://ucarecdn.com/dcee8a66-2bfe-499a-a4fc-7bfe8b47593e/",
      },
      {
        name: "E2",
        link: "https://ucarecdn.com/6d421b80-5ece-4841-98d2-625692a61f9f/",
      },
      {
        name: "To Effloresce Whitely",
        link: "https://ucarecdn.com/2ecada22-1a8c-40d7-afdf-9204ccb3e1bd/",
        line: "Epoque",
      },
    ],
    availability: "Global",
    release_dates: {
      cn: "4/14/2022",
      global: "10/19/2022",
    },
    url: "https://gamepress.gg/arknights/operator/Horn",
  },
  {
    name: "Siege",
    rarity: 6,
    alter: "Not provided",
    artist: "Infukun",
    va: "Ayako Kawasumi",
    biography:
      "Vina, codenamed Siege, citizen of Victoria, most records unavailable except for several unproven charges. Outstanding performance in assault, siege, and hard target missions. Admitted to Rhodes Island after excellent scores in multiple tests. Currently a vanguard and the captain of a Rhodes Island squad.",
    description:
      "Siege, leader of the Glasgow Gang, will carve a path for you.",
    quote: "She is a born leader.",
    voicelines: {
      appointed_as_assistant:
        "You're still not done assigning tasks? I'll wait a bit longer then.",
      talk_1: "Keep calm and carry on.",
      talk_2:
        "Our meals used to be fairly nice in the past... but the quality's gone downhill since we joined Indra's group.",
      talk_3:
        "I had a dream... a dream where the sun rises, and in the distance beyond the horizon... there was my hometown. The place I might never get to return to, ever again.",
      talk_after_promotion_1:
        "Before I knew it, I'd gotten accustomed to this drifter's life... It's a strange thing. In the past I never imagined this was how I'd end up.",
      talk_after_promotion_2:
        "Gawain and company? I wouldn't say they ran into me, more like they picked me up off the streets.",
      talk_after_trust_increase_1:
        "I used to stand side by side with Indra's team when we fought in the streets of Victoria... Looking back, I suppose it's a fairly fond memory to me.",
      talk_after_trust_increase_2:
        "Stay on your guard! I know you've done the best you can, but there may be unknown dangers beyond our abilities.",
      talk_after_trust_increase_3:
        "If we're ever put in a tough situation... then I may well act on my own motives. And if it comes to that, Doctor, I hope you'll join me too in... no, never mind for now.",
      idle: "Hm? You fell asleep?... I wonder if you ever dream of your hometown, too.",
      onboard:
        "I've passed the strength test, right? So assign me some missions. Don't let this hammer get too bored. My codename? They call me the Siege. Curious name, but it's got a nice ring to it.",
      watching_battle_record: "Feels pretty good.",
      promotion_1: "A promotion? Interesting...",
      promotion_2:
        "Another promotion? All right, thanks... Life is strange like that, you know? Once upon a time, I was the one assigning new ranks to people.",
      added_to_squad: "Tell me, is this battle inevitable?",
      appointed_as_squad_leader: "You'd better get used to my combat style.",
      depart: "For want of a nail... the kingdom was lost.",
      begin_operation:
        "Run while you can. Better to be a coward with a pulse than a martyr with a grave.",
      selecting_operator_1: "Yes?",
      selecting_operator_2: "Are you ready?",
      deployment_1: "What a pain.",
      deployment_2: "We'll take them out all at once.",
      in_battle_1: "My weapon chooses its worthy wielder.",
      in_battle_2: "Get lost!",
      in_battle_3: "A warrior must be ready to face death on the battlefield!",
      in_battle_4: "My rule is the balance your lives hang in.",
      "4-star_result": "Can bluff, can't take one blow.",
      "3-star_result": "Those who refuse to surrender don't deserve mercy.",
      "sub_3-star_result": "Are we done here?",
      operation_failure: "I'm... more tired than I thought. I apologize...",
      assigned_to_facility: "Do you mind if I get my forty winks in here?",
      tap: "Tsk...",
      trust_tap:
        "It's too noisy out there for my tastes... I think the silence of your office suits me more. Let me stay in here for a bit, will you?",
      title: "Arknights.",
      greeting: "Oh, it's you, Doctor.",
    },
    lore: {
      gender: "Female",
      place_of_birth: "Victoria",
      birthday: "Jul. 10",
      race: "Aslan",
      height: "172cm",
      combat_experience: "5 years",
      infection_status: "Non-infected as confirmed by medical report.",
      physical_strength: "Excellent",
      mobility: "Excellent",
      physiological_endurance: "Excellent",
      tactical_planning: "Excellent",
      combat_skill: "Excellent",
      originium_adaptability: "Standard",
    },
    affiliation: ["Victoria", "Glasgow"],
    class: ["Vanguard", "Skill-DP", "Pioneer"],
    tags: ["DP-Recovery", "DPS", "Vanguard"],
    range: [
      {
        elite: "Base",
        range: [["unit"], ["attackable"]],
      },
      {
        elite: "E1",
        range: [["unit"], ["attackable"]],
      },
      {
        elite: "E2",
        range: [["unit"], ["attackable"]],
      },
    ],
    statistics: {
      base: {
        hp: "911",
        atk: "212",
        def: "154",
        resist: "1",
        deploy: "70",
        cost: "1",
        interval: "1.05",
        block: "block: 2",
      },
      e0max: {
        hp: "1199",
        atk: "308",
        def: "227",
        block: "2",
      },
      e1max: {
        hp: "1643",
        atk: "422",
        def: "307",
        block: "2",
      },
      e2max: {
        hp: "2251",
        atk: "515",
        def: "384",
        block: "2",
      },
    },
    trait: "Blocks 2 enemies",
    costs: [
      {
        name: "Skill Summary - 1",
        amount: 10,
      },
      {
        name: "Sugar Substitute",
        amount: 5,
      },
      {
        name: "Diketon",
        amount: 4,
      },
      {
        name: "Skill Summary - 2",
        amount: 24,
      },
      {
        name: "Polyester",
        amount: 5,
      },
      {
        name: "Oriron",
        amount: 4,
      },
      {
        name: "Sugar",
        amount: 12,
      },
      {
        name: "Aketon",
        amount: 14,
      },
      {
        name: "Skill Summary - 3",
        amount: 107,
      },
      {
        name: "Integrated Device",
        amount: 7,
      },
      {
        name: "Sugar Pack",
        amount: 5,
      },
      {
        name: "White Horse Kohl",
        amount: 4,
      },
      {
        name: "RMA70-24",
        amount: 12,
      },
      {
        name: "Manganese Trihydrate",
        amount: 11,
      },
      {
        name: "Bipolar Nanoflake",
        amount: 16,
      },
      {
        name: "Orirock Concentration",
        amount: 16,
      },
      {
        name: "Grindstone Pentahydrate",
        amount: 13,
      },
      {
        name: "Polyester Lump",
        amount: 5,
      },
      {
        name: "Loxic Kohl",
        amount: 7,
      },
      {
        name: "Sugar Lump",
        amount: 4,
      },
      {
        name: "Polymerization Preparation",
        amount: 6,
      },
      {
        name: "Optimized Device",
        amount: 4,
      },
      {
        name: "LMD",
        amount: 210000,
      },
      {
        name: "Vanguard Chip",
        amount: 5,
      },
      {
        name: "Device",
        amount: 3,
      },
      {
        name: "Vanguard Dualchip",
        amount: 4,
      },
    ],
    potential: [
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Redeployment Cooldown",
        value: "-4",
      },
      {
        name: "Attack Power",
        value: "+25",
      },
      {
        name: "Improves First Talent",
        value: "",
      },
      {
        name: "Deployment Cost",
        value: "-1",
      },
      {
        name: "Attack Power",
        value: "+60",
      },
      {
        name: "Defense",
        value: "+25",
      },
    ],
    trust: [
      {
        name: "Attack Power",
        value: "+60",
      },
      {
        name: "Defense",
        value: "+25",
      },
    ],
    talents: [
      {
        name: "King of Beasts",
        variation: [
          {
            description: "All Vanguard Operators' ATK and DEF +4%",
            elite: "E1",
            potential: "0",
          },
          {
            description: "All Vanguard Operators' ATK and DEF +6% (+2%)",
            elite: "E1",
            potential: "5",
          },
          {
            description: "All Vanguard Operators' ATK and DEF +8%",
            elite: "E2",
            potential: "0",
          },
          {
            description: "All Vanguard Operators' ATK and DEF +10% (+2%)",
            elite: "E2",
            potential: "5",
          },
          {
            description:
              "Obtains 1 Skill Point when an enemy in the four surrounding tiles is killed",
            elite: "E2",
            potential: "0",
          },
        ],
      },
    ],
    skills: [
      {
        name: "Charge γ",
        variations: [
          {
            level: 1,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "44",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "43",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "42",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "41",
            initial_sp: "12",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "40",
            initial_sp: "12",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "39",
            initial_sp: "12",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "38",
            initial_sp: "14",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "37",
            initial_sp: "16",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "36",
            initial_sp: "18",
            duration: "-",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description: "Instantly gains 12 Deployment Points.",
            sp_cost: "35",
            initial_sp: "20",
            duration: "-",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Auto Trigger",
      },
      {
        name: "Aerial Hammer",
        variations: [
          {
            level: 1,
            description:
              "Deals 220% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 1 charge(s)",
            sp_cost: "12",
            initial_sp: "0",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: 2,
            description:
              "Deals 230% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 1 charge(s)",
            sp_cost: "12",
            initial_sp: "0",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: 3,
            description:
              "Deals 240% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 1 charge(s)",
            sp_cost: "12",
            initial_sp: "0",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: 4,
            description:
              "Deals 250% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 2 charge(s)",
            sp_cost: "11",
            initial_sp: "3",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: 5,
            description:
              "Deals 260% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 2 charge(s)",
            sp_cost: "11",
            initial_sp: "3",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: 6,
            description:
              "Deals 270% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 2 charge(s)",
            sp_cost: "11",
            initial_sp: "3",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: 7,
            description:
              "Deals 280% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 3 charge(s)",
            sp_cost: "11",
            initial_sp: "6",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: "M1",
            description:
              "Deals 300% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 3 charge(s)",
            sp_cost: "10",
            initial_sp: "7",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: "M2",
            description:
              "Deals 320% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 3 charge(s)",
            sp_cost: "10",
            initial_sp: "8",
            duration: "-",
            range: [
              ["null", "attackable", "null"],
              ["attackable", "unit", "attackable"],
              ["null", "attackable", "null"],
            ],
          },
          {
            level: "M3",
            description:
              "Deals 340% of ATK Physical damage to all nearby enemies in the next attack; Gains 3 DPCan store 3 charge(s)",
            sp_cost: "10",
            initial_sp: "10",
            duration: "-",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Auto Trigger",
      },
      {
        name: "Skull Breaker",
        variations: [
          {
            level: 1,
            description:
              "Attack Interval increases. Increases ATK to 260% when attacking and has 40% chance to Stun the target for 0.5 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "0",
            duration: "15 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 2,
            description:
              "Attack Interval increases. Increases ATK to 270% when attacking and has 40% chance to Stun the target for 0.5 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "0",
            duration: "16 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 3,
            description:
              "Attack Interval increases. Increases ATK to 280% when attacking and has 40% chance to Stun the target for 0.5 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "0",
            duration: "17 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 4,
            description:
              "Attack Interval increases. Increases ATK to 290% when attacking and has 40% chance to Stun the target for 0.8 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "5",
            duration: "18 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 5,
            description:
              "Attack Interval increases. Increases ATK to 300% when attacking and has 40% chance to Stun the target for 0.8 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "5",
            duration: "19 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 6,
            description:
              "Attack Interval increases. Increases ATK to 310% when attacking and has 40% chance to Stun the target for 0.8 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "5",
            duration: "20 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: 7,
            description:
              "Attack Interval increases. Increases ATK to 320% when attacking and has 40% chance to Stun the target for 1.1 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "10",
            duration: "21 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M1",
            description:
              "Attack Interval increases. Increases ATK to 340% when attacking and has 40% chance to Stun the target for 1.2 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "15",
            duration: "22 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M2",
            description:
              "Attack Interval increases. Increases ATK to 360% when attacking and has 40% chance to Stun the target for 1.3 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "20",
            duration: "23 Seconds",
            range: "Skill does not modify range",
          },
          {
            level: "M3",
            description:
              "Attack Interval increases. Increases ATK to 380% when attacking and has 40% chance to Stun the target for 1.5 seconds* This Skill modifies the Attack Interval by 1",
            sp_cost: "30",
            initial_sp: "25",
            duration: "25 Seconds",
            range: "Skill does not modify range",
          },
        ],
        skill_charge: "Per Second",
        skill_activation: "Manual Trigger",
      },
    ],
    module: [
      {
        name: "推进之王证章",
        trust: "0",
        availability: "CN",
        levels: [
          {
            level: 1,
            trait: "Not provided",
            talent_changes: [],
            unlock: [],
          },
        ],
      },
      {
        name: "“糖果盒”",
        trust: "100",
        availability: "CN",
        levels: [
          {
            level: 1,
            trait: "When blocking enemies, ATK and DEF +8%",
            attributes: {
              atk: "60",
              def: "40",
            },
            talent_changes: [],
            unlock: [
              "由非助战推进之王累计造成60歼灭数",
              "3星通关主题曲1-7；必须编入非助战推进之王并上场，其他成员仅可编入先锋干员",
            ],
          },
          {
            level: 2,
            trait: "When blocking enemies, ATK and DEF +8%",
            attributes: {
              atk: "68",
              def: "46",
            },
            talent_changes: [
              {
                name: "King of Beasts",
                value:
                  "All Vanguard Operators' ATK and DEF +8%, increases self ATK and DEF by +6%",
                elite: "E2",
                potential: "0",
                module_level: 2,
              },
              {
                name: "King of Beasts",
                value:
                  "All Vanguard Operators' ATK and DEF +10%（+2%）, increases self ATK and DEF by +6%",
                elite: "E2",
                potential: "5",
                module_level: 2,
              },
            ],
            unlock: [
              "由非助战推进之王累计造成60歼灭数",
              "3星通关主题曲1-7；必须编入非助战推进之王并上场，其他成员仅可编入先锋干员",
            ],
          },
          {
            level: 3,
            trait: "When blocking enemies, ATK and DEF +8%",
            attributes: {
              atk: "75",
              def: "50",
            },
            talent_changes: [
              {
                name: "King of Beasts",
                value:
                  "All Vanguard Operators' ATK and DEF +8%, increases self ATK and DEF by +8%",
                elite: "E2",
                potential: "0",
                module_level: 3,
              },
              {
                name: "King of Beasts",
                value:
                  "All Vanguard Operators' ATK and DEF +10%（+2%）, increases self ATK and DEF by +8%",
                elite: "E2",
                potential: "5",
                module_level: 3,
              },
            ],
            unlock: [
              "由非助战推进之王累计造成60歼灭数",
              "3星通关主题曲1-7；必须编入非助战推进之王并上场，其他成员仅可编入先锋干员",
            ],
          },
        ],
      },
      {
        name: "“初诺”",
        trust: "100",
        availability: "CN",
        levels: [
          {
            level: 1,
            trait: "DP Cost reduced by 4 DP for the first deployment",
            attributes: {
              max_hp: "200",
              atk: "65",
            },
            talent_changes: [],
            unlock: [
              "战斗中非助战推进之王累计使用跃空锤40次",
              "3星通关主题曲11-2；必须编入非助战推进之王，且第一位部署推进之王、推进之王全程不撤退或被击倒",
            ],
          },
          {
            level: 2,
            trait: "DP Cost reduced by 4 DP for the first deployment",
            attributes: {
              max_hp: "240",
              atk: "74",
            },
            talent_changes: [
              {
                name: "Crushing",
                value:
                  "Obtain 2 SP when an enemy dies within the 4 adjacent tiles, and give another random deployed Vanguard 1 SP",
                elite: "E2",
                potential: "0",
                module_level: 2,
              },
            ],
            unlock: [
              "战斗中非助战推进之王累计使用跃空锤40次",
              "3星通关主题曲11-2；必须编入非助战推进之王，且第一位部署推进之王、推进之王全程不撤退或被击倒",
            ],
          },
          {
            level: 3,
            trait: "DP Cost reduced by 4 DP for the first deployment",
            attributes: {
              max_hp: "260",
              atk: "82",
            },
            talent_changes: [
              {
                name: "Crushing",
                value:
                  "Obtain 3 SP when an enemy dies within the 4 adjacent tiles, and give another random deployed Vanguard 1 SP",
                elite: "E2",
                potential: "0",
                module_level: 3,
              },
            ],
            unlock: [
              "战斗中非助战推进之王累计使用跃空锤40次",
              "3星通关主题曲11-2；必须编入非助战推进之王，且第一位部署推进之王、推进之王全程不撤退或被击倒",
            ],
          },
        ],
      },
    ],
    base: [
      {
        name: "Leader",
        level: "Elite 0",
        effects:
          "When this Operator is assigned to a Dormitory, restores +0.15 Morale per hour to all Operators assigned to that Dormitory (Only the strongest effect of this type takes place)",
        building: "Dormitory",
      },
      {
        name: "Lionheart",
        level: "Elite 2",
        effects:
          "When this Operator is assigned to a Dormitory, restores +0.2 Morale per hour to all Operators assigned to that Dormitory (Only the strongest effect of this type takes place)",
        building: "Dormitory",
      },
    ],
    headhunting: "Yes",
    recruitable: "Yes",
    art: [
      {
        name: "Base",
        link: "https://ucarecdn.com/bd289968-860d-45ec-8f8e-e8131edc0097/",
      },
      {
        name: "E1",
        link: "https://ucarecdn.com/15395562-8769-4312-a6c7-ae6eb20e562b/",
      },
      {
        name: "E2",
        link: "https://ucarecdn.com/2e3b44d9-9768-4a99-b3fa-c263a9d2f5b3/",
      },
      {
        name: "Legacy",
        link: "https://ucarecdn.com/a09bd276-bb35-4af4-b5ad-1c9bc7a0df14/",
        line: "Vitafield",
      },
      {
        name: "City Destroyer",
        link: "https://ucarecdn.com/6dc9ce2f-11d1-46ca-a97d-27a14a2f5977/",
        line: "striker",
      },
    ],
    availability: "Global",
    release_dates: {
      cn: "4/30/2019",
      global: "1/16/2020",
    },
    url: "https://gamepress.gg/arknights/operator/Siege",
  },
];
