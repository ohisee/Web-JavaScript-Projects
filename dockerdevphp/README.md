## commands

### list docker containers

docker ps
docker ps -a

### list images

docker images

### bring up services in detached mode 

docker-compose up -d server php mysql 

### can define depends_on in docker-compose.yml to server service to include php and mysql as dependencies 

docker-compose up -d server

### force to re-evaluate docker files and rebuild images if required, --build

docker-compose up -d --build server

### exec server container when server contain is up and running 

docker-compose exec server sh

### bring down services

docker-compose down 

### tail a container log, for example a container named dockerdevphp-php-1 

docker logs -f dockerdevphp-php-1

### run a single container in a docker compose yml file 
### for example, run composer container in docker compose yml file to create a project 
### inside composer container's root folder (should be inside src folder)

docker-compose run --rm composer create-project --prefer-dist laravel/laravel . 
docker-compose run --rm composer create-project laravel/laravel .

### update and mySQL connection in src/.env 
### set DB_HOST mysql because mysql is the name for mySQL database image we use in docker compose yml

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret

### run artisan

docker-compose run --rm artisan migrate 
