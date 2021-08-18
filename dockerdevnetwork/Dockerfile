#  from an existing base image 
FROM node:14.17.1

WORKDIR /server

COPY package.json .

RUN npm install

COPY . /server

CMD ["node", "app.js"]
