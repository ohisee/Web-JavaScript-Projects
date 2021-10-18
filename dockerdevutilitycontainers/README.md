## start 

### run node image, latest version

docker run -it -d --name node_env node 

docker run -it -d --name node_env node:14.17.6 

docker run -it -d node:14.17.6 npm init

### run exec command in interactive mode, need container's name 

docker exec -it node_env npm init 

### build a utility container 

docker build -t node-util .

### run utility container, using bind mount, and run command after image name, i.e. node-util

docker run -it -v .../dockerdevutilitycontainers:/app node-util npm init 

### include ENTRYPOINT [ "npm" ] in Dockerfile, any command will be appended to ENTRYPOINT 
### so no need to enter npm in docker command after image name 

docker run -it -v .../dockerdevutilitycontainers:/app node-util init 

docker run -it -v .../dockerdevutilitycontainers:/app node-util init --y

docker run -it -v .../dockerdevutilitycontainers:/app node-util install --save express

### docker-compose utility, use run "services" name inside the docker-compose yml file 
### version: "3.8"
###   services: 
###     npm: <--- serice name 

docker-compose run npm init 

docker-compose run --rm npm init 
