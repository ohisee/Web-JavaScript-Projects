#  from an existing base image 
FROM node:14.17.1

WORKDIR /server

COPY package.json /server

RUN npm install

COPY . /server

# environment variable(s) 
ENV PORT=80

EXPOSE ${PORT}

# path inside the container that is mapped to a directory outside 
# the container where the files are stored, anonymous volume 
# VOLUME [ "/server/feedback" ]

# for bind mount, need to copy node_modules in bind mount by adding 
# one anonymous volume, this is can be done through command line 
# VOLUME [ "/server/node_modules" ]

# CMD [ "node", "server.js" ]
# use nodemon for watching file changes 
CMD [ "npm", "start" ]
