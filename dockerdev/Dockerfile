# from an existing base image 
FROM node:14

# set working directory and tell docker that all subsequence commands 
# should be run inside the /app directory 
WORKDIR /app

COPY package.json .

# run install command 
RUN npm install

# two paths, source and target 
# source -> first path is where the source files are outside the container 
# that we need to copy into the image 
# target -> second path is inside the images where we need to store the files 
# not root but some sub folder, i.e. working directory /app 
COPY . .

# the container does not expose the port number to local machine 
# must expose the port number to the local machine 
# the local host will listen to this port 
EXPOSE 3000

# does not run when creating image 
# but will run when a container starts running 
CMD [ "node", "app.mjs" ]
