## Start

### build with tag and name 
 
docker build -t network-node:db .

### run and create a container with argument in detached mode 

docker run -d -p 3000:8000 --env PORT=8000 --name network-node-app --rm network-node:db 

### mongodb container with name 'mongodb' and in detached mode 

docker run -d --name mongodb mongo 

### mongodb container with network  

docker network create favorites-net 
docker run -d --name mongodb --network favorites-net mongo 

### run and create a container in a network 

docker run -d -p 3000:8000 --env PORT=8000 --name network-node-app --network favorites-net --rm network-node:db 

### list network 
docker network ls 

### inspect mongodb container 

docker container inspect mongodb 

### curl commands 

curl -v http://localhost:3000/movies 
curl -v --request GET http://localhost:3000/movies
curl -v --request GET http://localhost:3000/people
curl -v --request GET http://localhost:3000/favorites
curl -H "Content-Type: application/json" -X POST -d "{\"name\":\"a new hero\",\"type\":\"movie\",\"url\":\"https://swapi.dev/api/people\"}" http://localhost:3000/favorites
