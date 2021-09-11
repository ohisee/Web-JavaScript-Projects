## start building node backend container 

### build node backend image with tag

docker build -t goals-node .

### create and run backend container, in detached mode, publish port number 

docker run --name goals-backend --rm -d -p 80:80 goals-node

### create and run backend container, in detached mode, connect to a network
### still need to publish port anymore for front-end, communicate through network 

docker run --name goals-backend --rm -d -p 80:80 --network goals-net goals-node

### add a bind mount volume for binding sources code to local directory and volume to backend container for log 
### three volumes, bind mount, named volume, and anonymous volume
### for development only 

docker run --name goals-backend -v .../dockerdevmulticontainers/backend:/server -v logs:/server/logs -v /server/node_modules -e MONGODB_USERNAME=runner --rm -d -p 80:80 --network goals-net goals-node

### check backend log

docker logs goals-backend
