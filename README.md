# RhodesAPI

An API for the mobile gacha tower defense game Arknights hosted on Cyclic.sh made as a personal project.

Requests data through querying from a MongoDB database which is filled with data scraped from each operator's page on Gamepress. Responses are cached in a Redis database hosted on Redis Enterprise.

<div align="center">
<a href="https://rhodesapi.vercel.app/">Documentation Site</a>
</div>
<br>
Add me in Arknights, Scramble#2904.

## Usage
Use a HTTP client (IE: fetch, axios, requests)

### Base API URL
>https://rhodesapi.cyclic.app/api/

### Operator Endpoints
| Method  | Endpoint                                                  | Description/Sample                                            |
|:-----:|:--------------------------------------------------------:|:---------------------------------------------------------------- |
| GET   | https://rhodesapi.cyclic.app/api/operator      | Get all operators and their associated information.              |
| GET   | https://rhodesapi.cyclic.app/api/operator/:name| Get a singular operator and their associated information.        |
| POST  | https://rhodesapi.cyclic.app/api/operator/:name| Add a specified operator to the database.
| PUT   | https://rhodesapi.cyclic.app/api/operator/     | Update a speciifed operator to the database.             |

### Skin Endpoints
| Method  | Endpoint                                                  | Description/Sample                                            |
|:-----:|:--------------------------------------------------------:|:---------------------------------------------------------------- |
| GET   | https://rhodesapi.cyclic.app/api/skins/e2/:name| Get the e2 art of the specified operator, if they have one.      |
| GET   | https://rhodesapi.cyclic.app/api/skins/:name| Get the skins of the specified operator, if they have skins.        |

### Search Endpoints
>https://rhodesapi.cyclic.app/api/search?

Search operators based on provided query parameters. Supported parameters are:
>_id, name, rarity, artist, va, affiliation, class, tag, headhunting, recruitable, availability, gender, race, alter, module, base skill's building, place of birth

#### /recruit/
>GET: https://rhodesapi.cyclic.app/api/recruit/:tagone/:tagtwo?:tagthree?

Similar to the search query but supports only up to three tags.

### Notes
This is a personal project made to both learn how to make an API and get familiar with some TypeScript syntax. This was originally wrote in JavaScript but was converted into TypeScript.

The scraper and operator.json updater does not run on a set interval due to the sheer length of time it takes to scrape 200+ operators with built in delays. I chose to include user-based updates based on certain conditions (new operators, operator information going past a certain date).

With this project I began to become more comfortable using TypeScript, as well as using MongoDB for a large amount of data and caching that data with Redis to speed up the queries, especially seeing as the api is remotely hosted on Cyclic. I also was given exposure to both using Docker and Docker Compose for local development.

Used Technologies: Javascript, Typescript, Node.JS, Express, MongoDB/Mongoose, Redis, Cyclic, Docker
