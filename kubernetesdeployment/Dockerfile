FROM node:14-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
