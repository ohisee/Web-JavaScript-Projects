## start building node backend container 

### build node backend image with tag

docker build -t goals-node .

### create and run backend container, in detached mode, publish port number 

docker run --name goals-backend --rm -d -p 80:80 goals-node

### create and run backend container, in detached mode, connect to a network
### still need to publish port anymore for front-end, communicate through network 

docker run --name goals-backend --rm -d -p 80:80 --network goals-net goals-node
