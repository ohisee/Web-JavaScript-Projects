# build from existing node image
FROM node:14-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "server.js"]
