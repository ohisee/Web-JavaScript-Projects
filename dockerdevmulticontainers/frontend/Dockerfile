# build from a node image 
FROM node:14.17.6

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]
