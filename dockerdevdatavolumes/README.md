## start

### build with name and tag

docker build -t feedback-node:volumes . 

### run and create a named volume, i.e. -v feedback:/server/feedback

docker run -d -p 3000:80 --name feedback-node-app -v feedback:/server/feedback --rm feedback-node:volumes

### for development to reflect file changes, run and create a bind mount, some_path_in_local:/server, i.e. -v "%cd%":/server
### read only bind mount, some_path_in_local:/server:ro 
### also need to copy node_modules in bind mount by adding one anonymous volume 

docker run -d -p 3000:80 --name feedback-node-app -v feedback:/server/feedback -v "%cd%:/server:ro" -v /server/temp -v /server/node_modules --rm feedback-node:volumes

### include an environment variable, for example, --env PORT=8000 

docker run -d -p 3000:8000 --env PORT=8000 --name feedback-node-app -v feedback:/server/feedback -v "%cd%:/server:ro" -v /server/node_modules --rm feedback-node:volumes

### include an environment variable through env file, for example, --env-file ./.env 

docker run -d -p 3000:8000 --env-file ./.env --name feedback-node-app -v feedback:/server/feedback -v "%cd%:/server:ro" -v /server/node_modules --rm feedback-node:volumes 

### list volume

docker volume ls 

### remove volume 

docker volume rm feedback 

### show logs

docker logs <i>container_id</i> or <i>container_name</i>
docker logs feedback-node-app 
