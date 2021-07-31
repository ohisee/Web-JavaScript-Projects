# from an existing base image
FROM node

# set working directory and tell docker that all subsequence commands 
# should be run inside the /app directory 
WORKDIR /app

# first copy over package.json into /app directory, then run the npm install command in 
# the next layer to prevent unnecessary re-installing dependencies 
COPY package.json /app

# run install command to install dependencies 
# if this layer is after COPY . /app layer, any changes in source codes will 
# trigger npm install again, redundent re-install 
RUN npm install

# two paths, source and target 
# source -> first path is where the source files are outside the container 
# that we need to copy into the image 
# target -> second path is inside the images where we need to store the files 
# not root but some sub folder, i.e. working directory /app 
COPY . /app

# the container does not expose the port number to local machine 
# must expose the port number to the local machine 
# the local host will listen to this port 
EXPOSE 80

# does not run when creating image 
# but will run when a container starts running 
CMD [ "node", "server.js" ]
