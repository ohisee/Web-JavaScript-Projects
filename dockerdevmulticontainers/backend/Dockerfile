# from an existing node image 
FROM node:14.17.6

WORKDIR /server 

COPY package.json .

RUN npm install 

# copy source codes into current working server directory 
COPY . /server 

# export port 80
EXPOSE 80 

# default environment variables and can be overriden by docker command 
# for example, docker run --name goals-backend ... -e MONGODB_USERNAME=runner ... --rm -d goals-node
ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret

# CMD [ "node", "app.js" ]
CMD [ "npm", "start" ]
