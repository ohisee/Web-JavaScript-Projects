# use node base image 
FROM node

WORKDIR /server

COPY package.json /server

RUN npm install

COPY . /server

EXPOSE 3000

CMD [ "node", "server.js" ]
