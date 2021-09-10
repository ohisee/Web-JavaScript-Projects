## start

### download a mongodb image and run mongodb container 

docker run mongo 

### create and run mongodb container, in detached mode, export port, remove after stop 

docker run -d -p 27017:27017 --name mongodb --rm mongo 

### create a network for this project 

docker network create goals-net

### create and run mongodb container, in detached mode, remove after stop, connect to a network
### no need to publish port anymore, communicate through network 

docker run --name mongodb -d --rm --network goals-net mongo 

### persist data by volume 

docker run --name mongodb -d -v data:/data/db --rm --network goals-net mongo 

### security, username and password 
### note that must remove any existing volume before applying username and password 

docker run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=runner -e MONGO_INITDB_ROOT_PASSWORD=secret -d -v data:/data/db --rm --network goals-net mongo

### check mongodb log 

docker logs mongodb 

### list existing images 

docker images 

### list existing containers 

docker ps -a 

### list existing network

docker network ls 

### start docker yml

docker-compose up 

### start docker yml in detached mode 

docker-compose up -d

### shutdown container 

docker-compose down

### shutdown container, delete date volume 

docker-compose down -v

### just build images  

docker-compose build
