FROM node:carbon-alpine

LABEL name="ArBC"

ENV ArBC_FRONTEND=noninteractive

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run","serve"]