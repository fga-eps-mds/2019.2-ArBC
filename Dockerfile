FROM node:carbon-alpine

ENV ArBC_FRONTEND=noninteractive

WORKDIR /usr/app

RUN npm install -g @vue/cli

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run","serve"]