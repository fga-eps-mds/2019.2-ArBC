FROM node:carbon-alpine

LABEL name="ArBC"

ENV UBUNTO_FRONTEND=noninteractive

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD npm run serve