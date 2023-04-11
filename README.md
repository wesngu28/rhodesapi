# RhodesAPI

An API for the mobile gacha tower defense game Arknights hosted on Cyclic.sh, made as a personal project.

This API queries a MongoDB database filled with data scraped from each operator's page on Gamepress and returns the results to the user. The responses are cached in a Redis database to improve performance.

## Documentation
You can view the documentation for this API at the [Documentation Site](https://rhodesapi.vercel.app/).

Add me in Arknights, Scramble#2904.

## Usage
Use a HTTP client (IE: fetch, axios, requests)

### Base API URL
To use this API, you will need to use a HTTP client such as fetch, axios, or requests. The railway version is the current updated version, but cyclic will be maintained on the older version as it connects to the Mongo atlas cluster.
>https://rhodesapi.up.railway.app/api/

### Operator Endpoints
Pass in exclude parameter with keys that you want to exclude (?exclude=talents,voicelines).
| Method  | Endpoint                                                  | Description/Sample                                            |
|:-----:|:--------------------------------------------------------:|:---------------------------------------------------------------- |
| GET   | https://rhodesapi.up.railway.app/api/operator      | Get all operators and their associated information.               |
| GET   | https://rhodesapi.up.railway.app/api/operator/:name| Get a singular operator and their associated information.        |

### Art Endpoint
Pass in e2 parameter to get only the e2 art (?e2=true)
| Method  | Endpoint                                                  | Description/Sample                                            |
|:-----:|:--------------------------------------------------------:|:---------------------------------------------------------------- |
| GET   | https://rhodesapi.cyclic.app/api/art| Get the art of the specified operator.      |

### Search Endpoints
>https://rhodesapi.up.railway.app/api/search?

Search operators based on provided query parameters. Supported parameters are:
- `gender`
- `place_of_birth`
- `race`
- `physical_strength`
- `combat_skill`
- `mobility`
- `physiological_endurance`
- `tactical_planning`
- `combat_skill`
- `originium_adaptability`
- `mobility`
- `affiliation`
- `class`
- `tags`
- `headhunting`
- `recruitable`
- `rarity`
- `art`
- `va`

#### Recruit Endpoints
>GET: https://rhodesapi.cyclic.app/api/recruit?tagone=tagone&tagtwo=tagtwo&tagthree=tagthree

Similar to the search query but supports only up to three tags.

### Notes
This is a personal project made to learn how to create an API and become more familiar with TypeScript syntax. This project was originally written in JavaScript, but was converted to TypeScript.

The data should automatically update itself through a scheduled request to my update route.

Through this project, I became more comfortable using TypeScript and working with large amounts of data in MongoDB. I also gained experience using Docker and Docker Compose for local development, and learned how to cache data with Redis to improve performance.

Used Technologies: Javascript, Typescript, Node.JS, Express, MongoDB/Mongoose, Redis, Cyclic, Docker

### Future Changes
Maybe ideally I can grab all the image assets for skills, materials, and etc and store them in a CDN as well.

#### Older Routes

##### Base API URL
To use this API, you will need to use a HTTP client such as fetch, axios, or requests.
>https://rhodesapi.cyclic.app/api/

##### Operator Endpoints
| Method  | Endpoint                                                  | Description/Sample                                            |
|:-----:|:--------------------------------------------------------:|:---------------------------------------------------------------- |
| GET   | https://rhodesapi.cyclic.app/api/operator      | Get all operators and their associated information.              |
| GET   | https://rhodesapi.cyclic.app/api/operator/:name| Get a singular operator and their associated information.        |
| POST  | https://rhodesapi.cyclic.app/api/operator/:name| Add a specified operator to the database.
| PUT   | https://rhodesapi.cyclic.app/api/operator/     | Update a speciifed operator to the database.             |

##### Skin Endpoints
| Method  | Endpoint                                                  | Description/Sample                                            |
|:-----:|:--------------------------------------------------------:|:---------------------------------------------------------------- |
| GET   | https://rhodesapi.cyclic.app/api/skins/e2/:name| Get the e2 art of the specified operator, if they have one.      |
| GET   | https://rhodesapi.cyclic.app/api/skins/:name| Get the skins of the specified operator, if they have skins.        |

##### Search Endpoints
>https://rhodesapi.cyclic.app/api/search?

Search operators based on provided query parameters. Supported parameters are:
- `_id`
- `name`
- `rarity`
- `artist`
- `va`
- `affiliation`
- `class`
- `tag`
- `headhunting`
- `recruitable`
- `availability`
- `gender`
- `race`
- `alter`
- `module`
- `base skill's building`
- `place of birth`

##### Recruit Endpoints
>GET: https://rhodesapi.cyclic.app/api/recruit/:tagone/:tagtwo?:tagthree?

Similar to the search query but supports only up to three tags.