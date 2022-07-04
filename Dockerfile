FROM node:16

WORKDIR /usr/rhodesapi

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm prune --production

EXPOSE 5219

CMD ["npm", "start"]