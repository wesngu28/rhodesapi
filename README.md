#RhodesAPI
An API for the mobile gacha tower defense game Arknights hosted on Heroku made as a personal project. Requests data through querying from a MongoDB database which is filled with data scraped from each operator's page on Gamepress.

##Usage
Use a HTTP client (IE: fetch, axios, requests)

####Base API URL
>https://rhodesapi.herokuapp.com/api/rhodes/>
>

####Endpoints

><span style="color:green">GET:</span> https://rhodesapi.herokuapp.com/api/rhodes/operator/
>
Get all operators and their associated information.

><span style="color:green">GET:</span> https://rhodesapi.herokuapp.com/api/rhodes/operator/:name
>
Get a singular operator and their associated information.
<details>
  <summary>
    Sample of request querying Surtr
  </summary>
```
{
    "_id": "62b0bbb84523c4fb9986fd99",
    "name": "Surtr",
    "urlName": "Surtr",
    "rarity": "6",
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
    "statistics": [{
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
    }],
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
    "potential": [{
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
    "trust": [{
        "Attack Power": "+100"
    }],
    "talents": [{
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
    "skills": [{
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
    "module": [{
        "name": "Not provided",
        "level": "Not provided",
        "trust": "Not provided",
        "availability": "Not provided",
        "trait": "Not provided",
        "missions": []
    }],
    "base": [{
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
    "art": [{
            "image": "/arknights/sites/arknights/files/2020-09/char_350_surtr_1_0.png",
            "name": "E1"
        },
        {
            "image": "/arknights/sites/arknights/files/2020-09/char_350_surtr_2.png",
            "name": "E2"
        },
        {
            "image": "/arknights/sites/arknights/files/2021-06/char_350_surtr_it%231.png",
            "name": "Liberté//Échec"
        }
    ],
    "availability": "Global",
    "url": "https://gamepress.gg/arknights/operator/Surtr",
    "dateAdded": "2022-06-20T18:26:00.711Z",
    "__v": 0
}
```
</details>

><span style="color:green">GET:</span> https://rhodesapi.herokuapp.com/api/rhodes/operator/
>

><span style="color:green">GET:</span> https://rhodesapi.herokuapp.com/api/rhodes/operator/
>