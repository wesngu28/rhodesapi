# RhodesAPI
An API for the mobile gacha tower defense game Arknights hosted on Heroku made as a personal project. Requests data through querying from a MongoDB database which is filled with data scraped from each operator's page on Gamepress.

## Usage
Use a HTTP client (IE: fetch, axios, requests)

### Base API URL
>https://rhodesapi.herokuapp.com/api/rhodes/>

### Endpoints

#### /operator/
>GET: https://rhodesapi.herokuapp.com/api/rhodes/operator/

Get all operators and their associated information.

>GET: https://rhodesapi.herokuapp.com/api/rhodes/operator/:name

Get a singular operator and their associated information.
<details>
  <summary>
    Sample of request querying Surtr
  </summary>
  
```javascript
{
  "_id": "Surtr",
  "name": "Surtr",
  "rarity": 6,
  "alter": "Not provided",
  "artist": "Ask",
  "va": "Yui Horie",
  "biography": "Surtr is a mysterious Sarkaz girl who suffers from amnesia, perhaps due to her Oripathy. Her condition is rarely seen even among Infected. She is currently undergoing treatment at Rhodes Island. During testing, Surtr displayed an inexplicably high combat prowess, and was quickly drafted as a combat operator.",
  "description": "Rhodes Island Guard Operator Surtr, a person difficult to approach.",
  "quote": "Hopefully she will make an exception for the Doctor.",
  "voicelines": {
    "Appointed as Assistant": "You've failed to complete the tasks within your purview, and are now asking me for help?",
    "Talk 1": "Don't expect me to instruct others in Originium Arts. I have no interest in wasting time with plebeians.",
    "Talk 2": "I'm not here because I have to, but because I want to.",
    "Talk 3": "The people I hate most are the ones who ask too many questions. I hope you are not one of them.",
    "Talk after Promotion 1": "It appears that you have gained some understanding of my Arts by now. I do hope you are aware of the danger as well.",
    "Talk after Promotion 2": "Before I realized it, these Arts and this staff had already become my steadfast companions. I do not remember when I gained such power. Of course, I do not actually care.",
    "Talk after Trust Increase 1": "I possess all kinds of memories. I don't know from whence did they came, nor do I know which truly belong to me. To discover the source of my memories, I have been traveling back and forth, from country to country, and now I have arrived at Rhodes Island.",
    "Talk after Trust Increase 2": "There is truly nothing better than an ice-cream to calm me down when I am absorbed in chaotic memories. I always relied on ice-cream, when I was alone.",
    "Talk after Trust Increase 3": "These memories of Rhodes Island are completely different from those before. They have a sense of realism about them. For the first time, I'm able to feel that I am truly myself. All of this is thanks to you, and all of Rhodes Island. ...What? I am capable of giving thanks where it is deserved, all right?",
    "Idle": "Tch... what a waste of time.",
    "Onboard": "I am Surtr. Are you the Doctor they mentioned? I will be working at Rhodes Island, starting today. I hope that you will not bore me too much.",
    "Watching Battle Record": "That's it?",
    "Promotion 1": "Have you started to value me after witnessing my power?",
    "Promotion 2": "You value not my power, but me myself? Then I shall put in the appropriate level of effort to repay you.",
    "Added to Squad": "Am I needed now?",
    "Appointed as Squad Leader": "I alone am enough.",
    "Depart": "Let's go.",
    "Begin Operation": "Are they the ones to be eliminated?",
    "Selecting Operator 1": "Do not order me around.",
    "Selecting Operator 2": "Enough, I understand.",
    "Deployment 1": "Not a bad position.",
    "Deployment 2": "I'm on it!",
    "In Battle 1": "Die!",
    "In Battle 2": "Don't even think about running!",
    "In Battle 3": "Laevatain!",
    "In Battle 4": "Foolish fools.",
    "4-star Result": "Hmph. Piece of cake.",
    "3-star Result": "Naturally.",
    "Sub 3-star Result": "Can you not even do such a simple thing?",
    "Operation Failure": "If can do nothing to help, just retreat! I'll handle this.",
    "Assigned to Facility": "An acceptably clean room, I suppose.",
    "Tap": "I know how to walk on my own.",
    "Trust Tap": "Silence.",
    "Title": "Arknights.",
    "Greeting": "Oh, here you are."
  },
  "lore": {
    "Gender": "Female",
    "Place of Birth": "Unknown",
    "Birthday": "Jan 22",
    "Race": "Sarkaz",
    "Height": "162cm",
    "Combat Experience": "2 Years",
    "Infection Status": "Confirmed Infected by medical examination.",
    "Physical Strength": "Normal",
    "Mobility": "Normal",
    "Physiological Endurance": "Normal",
    "Tactical Planning": "Excellent",
    "Combat Skill": "Normal",
    "Originium Adaptability": "Flawed"
  },
  "affiliation": [
    "Rhodes Island"
  ],
  "class": [
    "Guard",
    "Arts Fighter"
  ],
  "tags": [
    "DPS"
  ],
  "statistics": {
    "base": {
      "hp": "1330",
      "atk": "288",
      "def": "186",
      "resist": "10",
      "redeploy": "70",
      "cost": "19",
      "block": "1",
      "interval": "1.25"
    },
    "e0max": {
      "hp": "1750",
      "atk": "418",
      "def": "267",
      "resist": "10",
      "redeploy": "70",
      "cost": "19",
      "block": "1",
      "interval": "1.25"
    },
    "e1max": {
      "hp": "2216",
      "atk": "544",
      "def": "343",
      "resist": "10",
      "redeploy": "70",
      "cost": "21",
      "block": "1",
      "interval": "1.25"
    },
    "e2max": {
      "hp": "2916",
      "atk": "672",
      "def": "414",
      "resist": "15",
      "redeploy": "70",
      "cost": "21",
      "block": "1",
      "interval": "1.25"
    }
  },
  "trait": "Deals Arts damage",
  "costs": {
    "Skill Summary - 1": "10",
    "Damaged Device": "4",
    "Ester": "4",
    "Skill Summary - 2": "24",
    "Orirock Cube": "19",
    "Polyester": "4",
    "Oriron": "4",
    "Oriron Cluster": "6",
    "Skill Summary - 3": "113",
    "Loxic Kohl": "5",
    "Aketon": "4",
    "Manganese Trihydrate": "4",
    "Integrated Device": "4",
    "Keton Colloid": "17",
    "Polymerized Gel": "15",
    "D32 Steel": "12",
    "Optimized Device": "4",
    "RMA70-24": "9",
    "Manganese Ore": "5",
    "White Horse Kohl": "13",
    "Bipolar Nanoflake": "6",
    "Orirock Concentration": "4",
    "Grindstone": "7",
    "Grindstone Pentahydrate": "4",
    "LMD": "210000",
    "Guard Chip": "5",
    "Polyketon": "4",
    "Guard Dualchip": "4",
    "Polymerization Preparation": "4"
  },
  "potential": [
    {
      "name": "Deployment Cost",
      "value": "-1"
    },
    {
      "name": "Improves Second Talent",
      "value": "Not provided"
    },
    {
      "name": "Attack Power",
      "value": "+28"
    },
    {
      "name": "Improves First Talent",
      "value": "Not provided"
    },
    {
      "name": "Deployment Cost",
      "value": "-1"
    }
  ],
  "trust": {
    "Attack Power": "+100"
  },
  "talents": [
    {
      "name": "Molten Flame",
      "value": "Attacks ignore 12 RES"
    },
    {
      "name": "Molten Flame",
      "value": "Attacks ignore 14 (+2) RES"
    },
    {
      "name": "Molten Flame",
      "value": "Attacks ignore 20 RES"
    },
    {
      "name": "Molten Flame",
      "value": "Attacks ignore 22 (+2) RES"
    },
    {
      "name": "Remnant Ash",
      "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 4 seconds later"
    },
    {
      "name": "Remnant Ash",
      "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 5 (+1) seconds later"
    },
    {
      "name": "Remnant Ash",
      "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 8 seconds later"
    },
    {
      "name": "Remnant Ash",
      "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 9 (+1) seconds later"
    }
  ],
  "skills": [
    {
      "name": "Laevatain",
      "spcost": "4-2",
      "initialSP": "0-0",
      "chargeType": "Attacking Enemy",
      "skillActivation": "Auto Trigger",
      "skillDescription": "Increases the ATK of the next attack to 200%-310%. If the target is defeated, immediately recover all Skill Points"
    },
    {
      "name": "Molten Giant",
      "spcost": "28-18",
      "initialSP": "7-12",
      "chargeType": "Per Second",
      "skillActivation": "Manual Trigger",
      "skillDescription": "ATK +50%-+120%, attack range +1 and attack target count +1. When attacking only one enemy, deal 140% ATK as damage to the target"
    },
    {
      "name": "Twilight",
      "spcost": "10-5",
      "initialSP": "0-0",
      "chargeType": "Per Second",
      "skillActivation": "Manual Trigger",
      "skillDescription": "Immediately recover all HP; ATK +180%-+330%, attack range +2-+3, attack target count +2 and Max HP +5000. Gradually lose HP (HP loss caps at 20%/second after 60 seconds); . Unlimited-d duration"
    }
  ],
  "module": {
    "name": "Not provided",
    "level": "Not provided",
    "trust": "Not provided",
    "availability": "Not provided",
    "trait": "Not provided",
    "missions": []
  },
  "base": [
    {
      "name": "Guard Expert α",
      "level": "Elite 0",
      "effects": "When this Operator is assigned to be the Trainer in the Training Room, Guard Operators' Specialization training speed +30%",
      "building": "Training Room"
    },
    {
      "name": "Bladework Memory",
      "level": "Elite 2",
      "effects": "When this Operator is assigned to be the Trainer in the Training Room, Guard Operators' Specialization training speed +60%",
      "building": "Training Room"
    }
  ],
  "headhunting": "Yes",
  "recruitable": "No",
  "art": {
    "Base": "https://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_1_0.png",
    "E2": "https://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_2.png",
    "Liberté//Échec": "https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png"
  },
  "availability": "Global",
  "url": "https://gamepress.gg/arknights/operator/Surtr",
  "dateAdded": "2022-06-25T00:23:30.387Z",
  "__v": 0
}
```
</details>

>POST: https://rhodesapi.herokuapp.com/api/rhodes/operator/:name

Add a specified operator to the database. Before adding, the api will check whether or not Gamepress has information on the specified operator and if it exists already. Created operator is returned in the response if successful.

>PUT: https://rhodesapi.herokuapp.com/api/rhodes/operator/

Update a speciifed operator to the database. In order to account for game updates, this is only callable on operator's in which the dateAdded field is a week out (which will be all since all were scraped in the same day). This may be still be too soon as most operators are untouched for months on end (at least until recent module updates).

#### /skins/

>GET: https://rhodesapi.herokuapp.com/api/rhodes/skins/e2/:name

Get the e2 artwork of the specified operator, if they have one.
<details>
  <summary>
    Sample of request querying for Surtr's e2 art.
  </summary>
  
```javascript
{
  "e2": "https://gamepress.gghttps://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_2.png"
}
```
</details>
>GET: https://rhodesapi.herokuapp.com/api/rhodes/skins/:name

Get the skins of the specified operator, if they have skins.
<details>
  <summary>
    Sample of request querying for Surtr's skins.
  </summary>
  
```javascript
{
  "Liberté//Échec": "https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png"
}
```
</details>

#### /search/
Search operators based on provided query parameters. Supported parameters are:
>_id, name, rarity, artist, va, affiliation, class, tag, headhunting, recruitable, availability, gender, race

Non-case sensitive queries, just specify the corresponding value you seek for these. For names with hyphens, hyphens can be provided in the request body but spaces are also supported.

>alter, module

Do not specify a value for these queries as they will return operator's with alter forms and modules, respectively.

>base skill's building => search?building=factory

>place of birth => search?birth=ursus

<details>
  <summary>
    Sample of request querying for Sarkaz DPS guards.
  </summary>
  
```javascript
  https://rhodesapi.herokuapp.com/api/rhodes/search?race=sarkaz&class=guard&tags=dps
  
[
  {
    "_id": "Surtr",
    "name": "Surtr",
    "rarity": 6,
    "alter": "Not provided",
    "artist": "Ask",
    "va": "Yui Horie",
    "biography": "Surtr is a mysterious Sarkaz girl who suffers from amnesia, perhaps due to her Oripathy. Her condition is rarely seen even among Infected. She is currently undergoing treatment at Rhodes Island. During testing, Surtr displayed an inexplicably high combat prowess, and was quickly drafted as a combat operator.",
    "description": "Rhodes Island Guard Operator Surtr, a person difficult to approach.",
    "quote": "Hopefully she will make an exception for the Doctor.",
    "voicelines": {
      "Appointed as Assistant": "You've failed to complete the tasks within your purview, and are now asking me for help?",
      "Talk 1": "Don't expect me to instruct others in Originium Arts. I have no interest in wasting time with plebeians.",
      "Talk 2": "I'm not here because I have to, but because I want to.",
      "Talk 3": "The people I hate most are the ones who ask too many questions. I hope you are not one of them.",
      "Talk after Promotion 1": "It appears that you have gained some understanding of my Arts by now. I do hope you are aware of the danger as well.",
      "Talk after Promotion 2": "Before I realized it, these Arts and this staff had already become my steadfast companions. I do not remember when I gained such power. Of course, I do not actually care.",
      "Talk after Trust Increase 1": "I possess all kinds of memories. I don't know from whence did they came, nor do I know which truly belong to me. To discover the source of my memories, I have been traveling back and forth, from country to country, and now I have arrived at Rhodes Island.",
      "Talk after Trust Increase 2": "There is truly nothing better than an ice-cream to calm me down when I am absorbed in chaotic memories. I always relied on ice-cream, when I was alone.",
      "Talk after Trust Increase 3": "These memories of Rhodes Island are completely different from those before. They have a sense of realism about them. For the first time, I'm able to feel that I am truly myself. All of this is thanks to you, and all of Rhodes Island. ...What? I am capable of giving thanks where it is deserved, all right?",
      "Idle": "Tch... what a waste of time.",
      "Onboard": "I am Surtr. Are you the Doctor they mentioned? I will be working at Rhodes Island, starting today. I hope that you will not bore me too much.",
      "Watching Battle Record": "That's it?",
      "Promotion 1": "Have you started to value me after witnessing my power?",
      "Promotion 2": "You value not my power, but me myself? Then I shall put in the appropriate level of effort to repay you.",
      "Added to Squad": "Am I needed now?",
      "Appointed as Squad Leader": "I alone am enough.",
      "Depart": "Let's go.",
      "Begin Operation": "Are they the ones to be eliminated?",
      "Selecting Operator 1": "Do not order me around.",
      "Selecting Operator 2": "Enough, I understand.",
      "Deployment 1": "Not a bad position.",
      "Deployment 2": "I'm on it!",
      "In Battle 1": "Die!",
      "In Battle 2": "Don't even think about running!",
      "In Battle 3": "Laevatain!",
      "In Battle 4": "Foolish fools.",
      "4-star Result": "Hmph. Piece of cake.",
      "3-star Result": "Naturally.",
      "Sub 3-star Result": "Can you not even do such a simple thing?",
      "Operation Failure": "If can do nothing to help, just retreat! I'll handle this.",
      "Assigned to Facility": "An acceptably clean room, I suppose.",
      "Tap": "I know how to walk on my own.",
      "Trust Tap": "Silence.",
      "Title": "Arknights.",
      "Greeting": "Oh, here you are."
    },
    "lore": {
      "Gender": "Female",
      "Place of Birth": "Unknown",
      "Birthday": "Jan 22",
      "Race": "Sarkaz",
      "Height": "162cm",
      "Combat Experience": "2 Years",
      "Infection Status": "Confirmed Infected by medical examination.",
      "Physical Strength": "Normal",
      "Mobility": "Normal",
      "Physiological Endurance": "Normal",
      "Tactical Planning": "Excellent",
      "Combat Skill": "Normal",
      "Originium Adaptability": "Flawed"
    },
    "affiliation": [
      "Rhodes Island"
    ],
    "class": [
      "Guard",
      "Arts Fighter"
    ],
    "tags": [
      "DPS"
    ],
    "statistics": {
      "base": {
        "hp": "1330",
        "atk": "288",
        "def": "186",
        "resist": "10",
        "redeploy": "70",
        "cost": "19",
        "block": "1",
        "interval": "1.25"
      },
      "e0max": {
        "hp": "1750",
        "atk": "418",
        "def": "267",
        "resist": "10",
        "redeploy": "70",
        "cost": "19",
        "block": "1",
        "interval": "1.25"
      },
      "e1max": {
        "hp": "2216",
        "atk": "544",
        "def": "343",
        "resist": "10",
        "redeploy": "70",
        "cost": "21",
        "block": "1",
        "interval": "1.25"
      },
      "e2max": {
        "hp": "2916",
        "atk": "672",
        "def": "414",
        "resist": "15",
        "redeploy": "70",
        "cost": "21",
        "block": "1",
        "interval": "1.25"
      }
    },
    "trait": "Deals Arts damage",
    "costs": {
      "Skill Summary - 1": "10",
      "Damaged Device": "4",
      "Ester": "4",
      "Skill Summary - 2": "24",
      "Orirock Cube": "19",
      "Polyester": "4",
      "Oriron": "4",
      "Oriron Cluster": "6",
      "Skill Summary - 3": "113",
      "Loxic Kohl": "5",
      "Aketon": "4",
      "Manganese Trihydrate": "4",
      "Integrated Device": "4",
      "Keton Colloid": "17",
      "Polymerized Gel": "15",
      "D32 Steel": "12",
      "Optimized Device": "4",
      "RMA70-24": "9",
      "Manganese Ore": "5",
      "White Horse Kohl": "13",
      "Bipolar Nanoflake": "6",
      "Orirock Concentration": "4",
      "Grindstone": "7",
      "Grindstone Pentahydrate": "4",
      "LMD": "210000",
      "Guard Chip": "5",
      "Polyketon": "4",
      "Guard Dualchip": "4",
      "Polymerization Preparation": "4"
    },
    "potential": [
      {
        "name": "Deployment Cost",
        "value": "-1"
      },
      {
        "name": "Improves Second Talent",
        "value": "Not provided"
      },
      {
        "name": "Attack Power",
        "value": "+28"
      },
      {
        "name": "Improves First Talent",
        "value": "Not provided"
      },
      {
        "name": "Deployment Cost",
        "value": "-1"
      }
    ],
    "trust": {
      "Attack Power": "+100"
    },
    "talents": [
      {
        "name": "Molten Flame",
        "value": "Attacks ignore 12 RES"
      },
      {
        "name": "Molten Flame",
        "value": "Attacks ignore 14 (+2) RES"
      },
      {
        "name": "Molten Flame",
        "value": "Attacks ignore 20 RES"
      },
      {
        "name": "Molten Flame",
        "value": "Attacks ignore 22 (+2) RES"
      },
      {
        "name": "Remnant Ash",
        "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 4 seconds later"
      },
      {
        "name": "Remnant Ash",
        "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 5 (+1) seconds later"
      },
      {
        "name": "Remnant Ash",
        "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 8 seconds later"
      },
      {
        "name": "Remnant Ash",
        "value": "After receiving fatal damage, continuously prevent HP from falling below 1. Retreat from the battlefield 9 (+1) seconds later"
      }
    ],
    "skills": [
      {
        "name": "Laevatain",
        "spcost": "4-2",
        "initialSP": "0-0",
        "chargeType": "Attacking Enemy",
        "skillActivation": "Auto Trigger",
        "skillDescription": "Increases the ATK of the next attack to 200%-310%. If the target is defeated, immediately recover all Skill Points"
      },
      {
        "name": "Molten Giant",
        "spcost": "28-18",
        "initialSP": "7-12",
        "chargeType": "Per Second",
        "skillActivation": "Manual Trigger",
        "skillDescription": "ATK +50%-+120%, attack range +1 and attack target count +1. When attacking only one enemy, deal 140% ATK as damage to the target"
      },
      {
        "name": "Twilight",
        "spcost": "10-5",
        "initialSP": "0-0",
        "chargeType": "Per Second",
        "skillActivation": "Manual Trigger",
        "skillDescription": "Immediately recover all HP; ATK +180%-+330%, attack range +2-+3, attack target count +2 and Max HP +5000. Gradually lose HP (HP loss caps at 20%/second after 60 seconds); . Unlimited-d duration"
      }
    ],
    "module": {
      "name": "Not provided",
      "level": "Not provided",
      "trust": "Not provided",
      "availability": "Not provided",
      "trait": "Not provided",
      "missions": []
    },
    "base": [
      {
        "name": "Guard Expert α",
        "level": "Elite 0",
        "effects": "When this Operator is assigned to be the Trainer in the Training Room, Guard Operators' Specialization training speed +30%",
        "building": "Training Room"
      },
      {
        "name": "Bladework Memory",
        "level": "Elite 2",
        "effects": "When this Operator is assigned to be the Trainer in the Training Room, Guard Operators' Specialization training speed +60%",
        "building": "Training Room"
      }
    ],
    "headhunting": "Yes",
    "recruitable": "No",
    "art": {
      "Base": "https://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_1_0.png",
      "E2": "https://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_2.png",
      "Liberté//Échec": "https://gamepress.gg/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png"
    },
    "availability": "Global",
    "url": "https://gamepress.gg/arknights/operator/Surtr",
    "dateAdded": "2022-06-25T00:23:30.387Z",
    "__v": 0
  },
  {
    "_id": "Flamebringer",
    "name": "Flamebringer",
    "rarity": 5,
    "alter": "Not provided",
    "artist": "Hǔ Sān",
    "va": "Yuichi Nakamura",
    "biography": "Flamebringer, the self-professed Wandering Sarkaz Warrior, has no personal history besides that which he presented himself. The value of his document is rather limited, being only a list of the names of people who have died at his hands. However, the list does suggest that he is an outstanding swordsman.",
    "description": "Flamebringer, Guard Operator of Rhodes Island, will bring ruination to enemies worthy of standing before him.",
    "quote": "He might just ditch if the enemies are too weak.",
    "voicelines": {
      "Appointed as Assistant": "{@nickname}, today's battlefields are too fragile and juvenile compared to the ones of the past. It's enough to make one's weapons rust. And once a soldier's weapons rust, death soon follows.",
      "Talk 1": "Life is but a brief flicker before the vast maw of annihilation. Cherish the glimpse of the sunset on the deck while you still can, {@nickname}.",
      "Talk 2": "Practical exercises? I'm not interested. While Rhodes Island boasts many powerful warriors, squandering one's physical strength in a game is gratuitous. Only in the edge between life and death does the clashing of swords have any value.",
      "Talk 3": "I'm not concerned about the plight of the Infected? Don't misunderstand me - I only despise fighting in vain. No enemy worth spilling my blood over has appeared yet, and that's all there is to it.",
      "Talk after Promotion 1": "Teamwork will rob one of the instincts that are liberated only through rampant slaughter. What 'trust' and 'strategizing' buy you are nothing but convenient illusions, and these illusions will one day take your life, {@nickname}.",
      "Talk after Promotion 2": "This blade ran through two crown princes, and this other one slew three generals. In this chaotic world, anything can happen. I don't know who will claim my life one day, but when it happens, I sure hope it will be more exciting than when I killed these people.",
      "Talk after Trust Increase 1": "Shining, huh? A pity, but she could have been a very worthy adversary. But after getting pulled into that situation with the 'Sinners,' she felt like her blade had been besmirched. Swordsmen who do not acknowledge their own weapon are not worth mentioning.",
      "Talk after Trust Increase 2": "{@nickname}, you remember that battle, right? After killing all the ambushers, I lead the survivors and charged straight into the traitor's fortress. I was the only one who made it out alive. How'd that all start? Oh, you know the answer to that. I've seen you before, and my memory is very good.",
      "Talk after Trust Increase 3": "{@nickname}, help me fetch those seeds in the cupboard, won't you? Thank you. Yes, I'm actually quite fond of flowers. No matter how brilliantly they blossom, their petals must wither and fall into the wind. When will the petals next wither, {@nickname}?",
      "Idle": "Vigilance can keep you alive, {@nickname}.",
      "Onboard": "We meet again, {@nickname}. Don't worry, I understand the situation you're in now, and pose no threat to you. I shall be your blade, so use me as you see fit, Doctor.",
      "Watching Battle Record": "The skills of a great warrior cannot be recorded.",
      "Promotion 1": "Promotion? So you also care about these rituals.",
      "Promotion 2": "I have no consciousness of what it's like to be Infected. Perhaps Rhodes Island can help me understand. I don't care, but you have your own considerations. I'll hear them out.",
      "Added to Squad": "Ahh, I've longed for a hurricane of blood.",
      "Appointed as Squad Leader": "I've been a captain before, and it did not end well.",
      "Depart": "I will bathe in their blood.",
      "Begin Operation": "Let's begin.",
      "Selecting Operator 1": "Do not interfere.",
      "Selecting Operator 2": "Do what you must.",
      "Deployment 1": "So, who will be my next opponent?",
      "Deployment 2": "Will it be you? Or maybe you?",
      "In Battle 1": "The blade predates the flame.",
      "In Battle 2": "Reap bone and blood.",
      "In Battle 3": "Whose name will you cry as you pass?",
      "In Battle 4": "Not my business.",
      "4-star Result": "Did this battle satisfy you, {@nickname}?",
      "3-star Result": "A weak enemy proves nothing. Search for a worthier battlefield.",
      "Sub 3-star Result": "A dedicated opponent will prove to be a worthy adversary in the future, let them do just that.",
      "Operation Failure": "You guys get out of here, destroying pursuing enemies has always been my duty.",
      "Assigned to Facility": "It's pretty quiet here.",
      "Tap": "Yeah?",
      "Trust Tap": "I seem to have used up this whetstone...",
      "Title": "Arknights.",
      "Greeting": "Not bad, you're still alive."
    },
    "lore": {
      "Gender": "Male",
      "Place of Birth": "Kazdel",
      "Birthday": "December 25",
      "Race": "Sarkaz",
      "Height": "190cm",
      "Combat Experience": "15 years",
      "Infection Status": "Originium crystals present on the body. Confirmed Infected by medical examination."
    },
    "affiliation": [
      "Rhodes Island"
    ],
    "class": [
      "Guard",
      "Duelist",
      "Dreadnought"
    ],
    "tags": [
      "DPS",
      "Survival"
    ],
    "statistics": {
      "base": {
        "hp": "1496",
        "atk": "408",
        "def": "86",
        "resist": "0",
        "redeploy": "80",
        "cost": "18",
        "block": "1",
        "interval": "1.5"
      },
      "e0max": {
        "hp": "2138",
        "atk": "601",
        "def": "123",
        "resist": "0",
        "redeploy": "80",
        "cost": "18",
        "block": "1",
        "interval": "1.5"
      },
      "e1max": {
        "hp": "2930",
        "atk": "761",
        "def": "161",
        "resist": "0",
        "redeploy": "80",
        "cost": "20",
        "block": "1",
        "interval": "1.5"
      },
      "e2max": {
        "hp": "3907",
        "atk": "918",
        "def": "195",
        "resist": "0",
        "redeploy": "80",
        "cost": "20",
        "block": "1",
        "interval": "1.5"
      }
    },
    "trait": "Blocks 1 enemy",
    "costs": {
      "Skill Summary - 1": "8",
      "Orirock": "10",
      "Skill Summary - 2": "18",
      "Sugar": "3",
      "Polyester": "5",
      "RMA70-12": "6",
      "Skill Summary - 3": "48",
      "Orirock Cluster": "8",
      "Integrated Device": "2",
      "Sugar Lump": "8",
      "Oriron Block": "6",
      "D32 Steel": "4",
      "Polyester Lump": "8",
      "Keton Colloid": "3",
      "Polymerization Preparation": "4",
      "Manganese Trihydrate": "4",
      "LMD": "140000",
      "Guard Chip": "4",
      "Orirock Cube": "6",
      "Polyketon": "3",
      "Guard Dualchip": "3",
      "White Horse Kohl": "9",
      "Manganese Ore": "13"
    },
    "potential": [
      {
        "name": "Deployment Cost",
        "value": "-1"
      },
      {
        "name": "Redeployment Cooldown",
        "value": "-10"
      },
      {
        "name": "Deployment Cost",
        "value": "-1"
      },
      {
        "name": "Improves Talent",
        "value": "Not provided"
      },
      {
        "name": "Deployment Cost",
        "value": "-1"
      }
    ],
    "trust": {
      "Maximum HP": "+400",
      "Attack Power": "+45"
    },
    "talents": [
      {
        "name": "Bloody Slaughter",
        "value": "Increases Max HP by 20 after defeating an enemy, stacking up to 30 times."
      },
      {
        "name": "Bloody Slaughter",
        "value": "Increases Max HP by 30 (+10%) after defeating an enemy, stacking up to 30 times."
      },
      {
        "name": "Bloody Slaughter",
        "value": "Increases Max HP by 40 after defeating an enemy, stacking up to 30 times."
      },
      {
        "name": "Bloody Slaughter",
        "value": "Increases Max HP by 50 (+10%) after defeating an enemy, stacking up to 30 times."
      }
    ],
    "skills": [
      {
        "name": "Blood Pact",
        "spcost": "5-3",
        "initialSP": "0-0",
        "chargeType": "Attacking Enemy",
        "skillActivation": "Auto Trigger",
        "skillDescription": "The next attack's power is increased to 155%-8%-220%, and restores HP by 5%"
      },
      {
        "name": "Blade Demon",
        "spcost": "60-40",
        "initialSP": "0-0",
        "chargeType": "Attacking Enemy",
        "skillActivation": "Auto Trigger",
        "skillDescription": "ATK +30-+45%-+70%, ASPD +30. Unlimited-d duration"
      }
    ],
    "module": {
      "name": "锈损的断刀",
      "level": "Lvl: 50",
      "trust": "Trust: 100 (10,070 Points)",
      "availability": "cn ",
      "trait": "When defeated, does not retreat, instead recovers HP but Max HP -60%, gain +30 ASPD (Only triggers once per deployment)Equip TraitWhen defeated, does not retreat, instead recovers HP but Max HP -60%, gain +30 ASPD (Only triggers once per deployment)Equip TraitWhen defeated, does not retreat, instead recovers HP but Max HP -60%, gain +30 ASPD (Only triggers once per deployment)",
      "attribute": {
        "max_hp": "300",
        "attack_speed": "4"
      },
      "missions": [
        "完成5次战斗；必须编入非助战炎客并上场，且使用炎客发动至少1次刃鬼",
        "3星通关主题曲S4-3；必须编入非助战炎客并上场，且使用炎客歼灭至少3个萨卡兹敌人"
      ]
    },
    "base": [
      {
        "name": "Tech Theory",
        "level": "Elite 0",
        "effects": "When this Operator is assigned to the Workshop to process Skill Summaries, the production rate of byproduct increases by 70%",
        "building": "Workshop"
      },
      {
        "name": "Arise",
        "level": "Elite 2",
        "effects": "When this Operator is assigned to the Workshop to process Skill Summaries, the production rate of byproduct increases by 80%",
        "building": "Workshop"
      }
    ],
    "headhunting": "No",
    "recruitable": "No",
    "art": {
      "Base": "https://gamepress.gg/arknights/sites/arknights/files/2019-11/char_131_flameb_1_0.png",
      "E2": "https://gamepress.gg/arknights/sites/arknights/files/2019-11/char_131_flameb_2.png"
    },
    "availability": "Global",
    "url": "https://gamepress.gg/arknights/operator/Flamebringer",
    "dateAdded": "2022-06-25T04:48:02.085Z",
    "__v": 0
  },
  {
    "_id": "Midnight",
    "name": "Midnight",
    "rarity": 3,
    "alter": "Not provided",
    "artist": "Ryuzakiichi",
    "va": "Takuya Sato",
    "biography": "Initially a patient at Rhodes Island, volunteered to become an Operator. He was assigned to Reserve Op Team A6 after completing his examination battery.",
    "description": "Midnight, Guard Operator of Rhodes Island, will dispose of enemies with his swordsmanship.",
    "quote": "Surprisingly, he's quite skilled at fighting. Impressive.",
    "voicelines": {
      "Appointed as Assistant": "Thank you for choosing me. Anything you'd like to say to me tonight?",
      "Talk 1": "The Demon King of Higashi? Ahh, so you've heard about that... Well, the remnants of the past mean nothing to me. After all, an even more glorious future waits for me ahead.",
      "Talk 2": "I may work in a different place now, but my job is still the same—to put a smile on everyone's face!",
      "Talk 3": "I bet Ms. Orchid must have been born with a negative number on her happiness scale. Why else would she always look so stern, right? If you know anything about her, please tell me!",
      "Talk after Promotion 1": "I'm really skilled, you know! My swordsmanship training helps me maintain my figure and cultivate my elegance, which is why I practice with dedication every day. After all, even the powerful can weaken without constant training! That's a point worth remembering!",
      "Talk after Trust Increase 1": "People used to say that I sold feelings as commodities, that I treated 'happiness' as a product. Fools, all of them. Only by showing everyone my heart, can I get my customers to show me theirs!",
      "Talk after Trust Increase 2": "I believe happiness is an infectious thing, a tangible atmosphere that truly exists. I reap happiness when others show me their hearts, and the others gain happiness from MY happiness.",
      "Talk after Trust Increase 3": "My colleagues in team A6... they may be a bit weird, but they're truly kind souls. They're a gift from destiny, a gift that continues to remind me to cherish those important to me.",
      "Idle": "Now that I have some free time, I should read.",
      "Onboard": "Show me your brightest smile, esteemed customer! Happiness is at arm's reach when you're by my side. Midnight, at your service!",
      "Watching Battle Record": "It's important to never stop learning!",
      "Promotion 1": "Whoa, so my hard work really paid off! Let's set up a tower of champagne bottles to celebrate. My treat, of course!",
      "Added to Squad": "With me on your side, success is guaranteed!",
      "Appointed as Squad Leader": "Follow me! I'm cool, after all!",
      "Depart": "Show me your spirit, everyone!",
      "Begin Operation": "Just watch me!",
      "Selecting Operator 1": "Hmm?",
      "Selecting Operator 2": "What's up?",
      "Deployment 1": "I've arrived.",
      "Deployment 2": "Sure!",
      "In Battle 1": "O sword, slash this moonlit night open!",
      "In Battle 2": "Bathe in fresh blood!",
      "4-star Result": "You're really something, Dr. {@nickname}. You'll soon be shining brighter than me!",
      "3-star Result": "There's only one thing that's impossible for me: being imperfect.",
      "Sub 3-star Result": "Not bad! Let's celebrate!",
      "Operation Failure": "No need to look back. We'll greet each other with a smile next time.",
      "Assigned to Facility": "A wonderful place. Let's have a drinking party tonight.",
      "Tap": "Hey, don't mess up my collar.",
      "Trust Tap": "Thanks for taking care of me.",
      "Title": "Arknights.",
      "Greeting": "Good evening, Dr. {@nickname}."
    },
    "lore": {
      "Gender": "Male",
      "Place of Birth": "Far East",
      "Birthday": "May 20",
      "Race": "Sarkaz",
      "Height": "187cm",
      "Combat Experience": "None",
      "Infection Status": "Infection confirmed through clinical diagnosis.",
      "Physical Strength": "Standard",
      "Mobility": "Standard",
      "Physiological Endurance": "Excellent",
      "Tactical Planning": "Normal",
      "Combat Skill": "Standard",
      "Originium Adaptability": "Excellent"
    },
    "affiliation": [
      "Rhodes Island",
      "Reserve 6"
    ],
    "class": [
      "Guard",
      "Ranged",
      "Lord"
    ],
    "tags": [
      "DPS"
    ],
    "statistics": {
      "base": {
        "hp": "879",
        "atk": "252",
        "def": "162",
        "resist": "5",
        "redeploy": "70",
        "cost": "14",
        "block": "2",
        "interval": "1.3"
      },
      "e0max": {
        "hp": "1256",
        "atk": "372",
        "def": "222",
        "resist": "5",
        "redeploy": "70",
        "cost": "14",
        "block": "2",
        "interval": "1.3"
      },
      "e1max": {
        "hp": "1653",
        "atk": "497",
        "def": "282",
        "resist": "10",
        "redeploy": "70",
        "cost": "16",
        "block": "2",
        "interval": "1.3"
      }
    },
    "trait": "Can launch Ranged Attacks that deal 80% of normal ATKatk_scale = 0.8",
    "costs": {
      "Skill Summary - 1": "3",
      "Oriron Shard": "1",
      "Skill Summary - 2": "3",
      "Polyketon": "1",
      "Device": "1",
      "Grindstone": "1",
      "Skill Summary - 3": "2",
      "RMA70-12": "1",
      "LMD": "10000"
    },
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
        "value": "+22"
      },
      {
        "name": "Improves Talent",
        "value": "Not provided"
      },
      {
        "name": "Deployment Cost",
        "value": "-1"
      }
    ],
    "trust": {
      "Attack Power": "+50"
    },
    "talents": [
      {
        "name": "Targeting - Primary",
        "value": "When attacking, has a 10% chance to increase the current damage of that attack to 150%"
      },
      {
        "name": "Targeting - Primary",
        "value": "When attacking, has a 10% chance to increase the current damage of that attack to 160% (+10%)"
      },
      {
        "name": "Targeting - Primary",
        "value": "When attacking, has a 20% chance to increase the current damage of that attack to 150%"
      },
      {
        "name": "Targeting - Primary",
        "value": "When attacking, has a 20% chance to increase the current damage of that attack to 160% (+10%)"
      }
    ],
    "skills": [
      {
        "name": "Enchant Weapon α",
        "spcost": "80-70",
        "initialSP": "20-30",
        "chargeType": "Per Second",
        "skillActivation": "Manual Trigger",
        "skillDescription": "ATK +5%-+35%; Damage dealt by Normal Attacks turn into Arts damage"
      }
    ],
    "module": {
      "name": "Not provided",
      "level": "Not provided",
      "trust": "Not provided",
      "availability": "Not provided",
      "trait": "Not provided",
      "missions": []
    },
    "base": [
      {
        "name": "Communication",
        "level": "Elite 0",
        "effects": "When this Operator is assigned to a Trading Post, order acquisition efficiency +30% and Morale consumed per hour -0.25",
        "building": "Trading Post"
      },
      {
        "name": "Originium Work α",
        "level": "Elite 1",
        "effects": "When this Operator is assigned to a Factory, Originium formula related productivity +30%",
        "building": "Factory"
      }
    ],
    "headhunting": "Yes",
    "recruitable": "Yes",
    "art": {
      "Base": "https://gamepress.gg/arknights/sites/arknights/files/2019-11/char_283_midn_1.png",
      "Seventh Night's Awakened": "https://gamepress.gg/arknights/sites/arknights/files/2020-05/char_283_midn_boc1.png"
    },
    "availability": "Global",
    "url": "https://gamepress.gg/arknights/operator/Midnight",
    "dateAdded": "2022-06-25T15:01:11.338Z",
    "__v": 0
  }
]
```
</details>

#### /recruit/
>GET: https://rhodesapi.herokuapp.com/api/rhodes/recruit/:tagone/:tagtwo?:tagthree?

Similar to the search query but supports only up to three tags. Returns matching operators with the provided tags and are recruitable to simulate the game's recruit system.

<details>
  <summary>
    Sample of request querying with tags guard, dps, and nuker.
  </summary>

```javascript
[
  https://rhodesapi.herokuapp.com/api/rhodes/recruit/guard/dps/nuker/
  {
    "_id": "Chen",
    "name": "Ch'en",
    "rarity": 6,
    "alter": "Ch'en the Holungday",
    "artist": "Wé[email protected]",
    "va": "Shizuka Ishigami",
    "biography": "Ch'en, head of the Lungmen Guard Department's Special Inspection Unit, graduated from the Royal Victorian Guard School with superb grades and outstanding achievements. During her time with the Department, she cracked down on crime, fought violent offenders, tracked down armed fugitives, and brought down international criminals. Now works at Rhodes Island, providing on-site tactical command.",
    "description": "Ch'en, Special Inspection Unit Chief, L.G.D., is cooperating with Rhodes Island to fulfill the obligations outlined in her contract.",
    "quote": "She's terrifying when she's mad, but you don't want to mess with her even when she's not.",
    "voicelines": {
      "Appointed as Assistant": "Doctor, your safety will be my responsibility from now on.",
      "Talk 1": "I've always had my suspicions about Rhodes Island. Still do.",
      "Talk 2": "Why are you staring at me? Nothing better to do?",
      "Talk 3": "Hah!",
      "Talk after Promotion 1": "I know every nook and cranny of Lungmen. The docks, the neon signs, the winding paths, I can see them all clear as day in my mind. I'll never forget them.",
      "Talk after Promotion 2": "Things have been deteriorating around here lately. I'll be on guard, but I still don't want you doing anything stupid.",
      "Talk after Trust Increase 1": "Maybe one day my efforts will be appreciated, but until then...",
      "Talk after Trust Increase 2": "Amiya trusts you completely. When I see you two together, it makes me wonder, what if I had someone like that by my side...",
      "Talk after Trust Increase 3": "I've... I've never been able to put that much faith in anyone, not even...",
      "Idle": "Doctor? You fell asleep? Hmph. How careless.",
      "Onboard": "I am the leader of L.G.D.'s Special Inspector Group, Ch'en. I have my own reasons, but I'll be joining you for a while. Seeing as we're already well acquainted from our prior work together, I'll ask you to take me to the office now.",
      "Watching Battle Record": "It's all in the service of more efficient operations.",
      "Promotion 1": "Another promotion? I'm used to it by now.",
      "Promotion 2": "Roger. Just give me all the missions your usual Operators can't handle.",
      "Added to Squad": "No problem.",
      "Appointed as Squad Leader": "Listen up! We'll be much more efficient if we work together.",
      "Depart": "Everyone! Prepare for battle!",
      "Begin Operation": "Ready? Stick to the plan.",
      "Selecting Operator 1": "This is Ch'en.",
      "Selecting Operator 2": "Ready to move.",
      "Deployment 1": "Moving out!",
      "Deployment 2": "Take them out fast.",
      "In Battle 1": "Slash!",
      "In Battle 2": "Flash!",
      "In Battle 3": "Drop your weapon!",
      "In Battle 4": "Show some respect!",
      "4-star Result": "Such evil must be stopped, and by any means necessary.",
      "3-star Result": "You have the courage to challenge me? I have to wonder why.",
      "Sub 3-star Result": "The wounded wait here for a medivac. The rest of you Operators, stay on guard.",
      "Operation Failure": "Tactical retreat. Don't break formation!",
      "Assigned to Facility": "So these are Rhodes Island's internal operations? Bigger than I expected.",
      "Tap": "Hey! What are you doing!",
      "Trust Tap": "Doctor, you're in a good mood. Is it because that operation went well? Me too. How about that.",
      "Title": "Arknights.",
      "Greeting": "Oh, it's you, Doctor."
    },
    "lore": {
      "Gender": "Female",
      "Place of Birth": "Lungmen",
      "Birthday": "Jul. 7",
      "Race": "Lung",
      "Height": "168cm",
      "Combat Experience": "4 years",
      "Infection Status": "Unknown.",
      "Physical Strength": "Excellent",
      "Mobility": "Standard",
      "Physiological Endurance": "Excellent",
      "Tactical Planning": "Excellent",
      "Combat Skill": "Outstanding",
      "Originium Adaptability": "Standard"
    },
    "affiliation": [
      "Great Lungmen",
      "L.G.D."
    ],
    "class": [
      "Guard",
      "Dualstrike",
      "Swordmaster"
    ],
    "tags": [
      "Nuker",
      "DPS",
      "Guard"
    ],
    "statistics": {
      "base": {
        "hp": "1229",
        "atk": "249",
        "def": "154",
        "resist": "0",
        "redeploy": "70",
        "cost": "19",
        "block": "2",
        "interval": "1.3"
      },
      "e0max": {
        "hp": "1684",
        "atk": "361",
        "def": "221",
        "resist": "0",
        "redeploy": "70",
        "cost": "19",
        "block": "2",
        "interval": "1.3"
      },
      "e1max": {
        "hp": "2188",
        "atk": "469",
        "def": "288",
        "resist": "0",
        "redeploy": "70",
        "cost": "21",
        "block": "2",
        "interval": "1.3"
      },
      "e2max": {
        "hp": "2880",
        "atk": "610",
        "def": "352",
        "resist": "0",
        "redeploy": "70",
        "cost": "23",
        "block": "2",
        "interval": "1.3"
      }
    },
    "trait": "Normal attacks deal damage twice",
    "costs": {
      "Skill Summary - 1": "10",
      "Orirock": "6",
      "Damaged Device": "4",
      "Skill Summary - 2": "24",
      "Sugar": "5",
      "Polyester": "4",
      "Oriron": "4",
      "Integrated Device": "8",
      "Skill Summary - 3": "113",
      "Loxic Kohl": "12",
      "Aketon": "4",
      "Manganese Trihydrate": "4",
      "Orirock Concentration": "4",
      "Grindstone Pentahydrate": "13",
      "Polymerization Preparation": "10",
      "White Horse Kohl": "13",
      "Sugar Lump": "8",
      "RMA70-24": "20",
      "D32 Steel": "12",
      "Polyester Lump": "6",
      "Manganese Ore": "5",
      "Oriron Block": "5",
      "LMD": "210000",
      "Guard Chip": "5",
      "Orirock Cube": "12",
      "Device": "3",
      "Guard Dualchip": "4"
    },
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
        "value": "+23"
      },
      {
        "name": "Improves Second Talent",
        "value": "Not provided"
      },
      {
        "name": "Deployment Cost",
        "value": "-1"
      }
    ],
    "trust": {
      "Attack Power": "+50",
      "Defense": "+50"
    },
    "talents": [
      {
        "name": "Scolding",
        "value": "Every 5 seconds when deployed, restores 1 Skill Point to all deployed allies that have an ATK Recovery or DEF Recovery skill."
      },
      {
        "name": "Scolding",
        "value": "Every 4 seconds when deployed, restores 1 Skill Point to all deployed allies that have an ATK Recovery or DEF Recovery skill."
      },
      {
        "name": "Blade Art",
        "value": "ATK +5%; DEF +5%; Physical Dodge +10%"
      },
      {
        "name": "Blade Art",
        "value": "ATK +6% (+1%); DEF +6% (+1%); Physical Dodge +13% (+3%)"
      }
    ],
    "skills": [
      {
        "name": "Sheathed Strike",
        "spcost": "7-4",
        "initialSP": "0-0",
        "chargeType": "Attacking Enemy",
        "skillActivation": "Auto Trigger",
        "skillDescription": "On the next attack, strike the enemy using the sheath, dealing 200%-320% ATK as Physical damage and Stun them for 1-1.5 seconds"
      },
      {
        "name": "Chi Xiao - Unsheath",
        "spcost": "27-20",
        "initialSP": "10-20",
        "chargeType": "Attacking Enemy",
        "skillActivation": "Manual Trigger",
        "skillDescription": "Deals 330%-500%-500% of ATK Physical damage and 330% of ATK Arts damage to at most 4-7 enemies in front of this unit. Physica-al damageArts damage"
      },
      {
        "name": "Chi Xiao - Shadowless",
        "spcost": "40-30",
        "initialSP": "10-20",
        "chargeType": "Attacking Enemy",
        "skillActivation": "Manual Trigger",
        "skillDescription": "Seeks the closest enemy around and launches 10 slashes in a row, each dealing 2-400%-320% ATK as Physical damage and Stun the target on the last hit for 2 seconds"
      }
    ],
    "module": {
      "name": "罗德岛制式剑",
      "level": "Lvl: 60",
      "trust": "Trust: 100 (10,070 Points)",
      "availability": "cn ",
      "trait": "Skill damage increased by 10%Equip TraitSkill damage increased by 10%Equip TraitSkill damage increased by 10%",
      "attribute": {
        "atk": "50",
        "attack_speed": "5"
      },
      "missions": [
        "完成5次战斗；必须编入非助战陈并上场，且每次战斗至少释放一次赤霄·拔刀或赤霄·绝影",
        "3星通关主题曲5-8；必须编入非助战陈并上场，且使用陈至少歼灭16名敌人"
      ]
    },
    "base": [
      {
        "name": "Integrity & Capability",
        "level": "Elite 0",
        "effects": "When this Operator is assigned to the Control Center, each Operator from Lungmen Guard Department increases the Morale of all Operators in the Control Center by +0.05 per hour",
        "building": "Control Center"
      },
      {
        "name": "Police Superintendent",
        "level": "Elite 2",
        "effects": "When this Operator is assigned to the Reception Room, Clue search speed increases by 25%",
        "building": "Reception Room"
      }
    ],
    "headhunting": "Yes",
    "recruitable": "Yes",
    "art": {
      "Base": "https://gamepress.gg/arknights/sites/arknights/files/2019-11/char_010_chen_1.png",
      "E2": "https://gamepress.gg/arknights/sites/arknights/files/2019-11/char_010_chen_2.png",
      "Ageless Afterglow": "https://gamepress.gg/arknights/sites/arknights/files/2020-02/ArtChenSkinNian.png"
    },
    "availability": "Global",
    "url": "https://gamepress.gg/arknights/operator/Chen",
    "dateAdded": "2022-06-25T19:48:20.275Z",
    "__v": 3
  }
]
```
</details>

### Notes
This is a personal project made to both learn how to make an API and get familiar with some TypeScript syntax. This was originally wrote in JavaScript but was converted into TypeScript.

The scraper and operator.json updater does not run on a set interval due to the sheer length of time it takes to scrape 200+ operators with built in delays. I chose to include user-based updates based on certain conditions (new operators, operator information going past a certain date) but most likely I will asynchronously update the database manually..

