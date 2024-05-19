FROM node:20.11.1

WORKDIR  /app

COPY package*.json ./

COPY . .

RUN npm install

CMD [ "npm", "start"]

EXPOSE 3005