## Start 

docker build .

### build and provide name:tag 
docker build -t goals:latest .

docker run -p 3000:80 <i>image_id</i>

### run in detached mode, using -d
docker run -p 3000:80 -d <i>image_id</i>

### will remove container after done running 
docker run -p 3000:80 -d --rm <i>image_id</i>

### give a container name 
docker run -p 3000:80 -d --rm --name <i>some_name</i> <i>image_id</i>

docker start <i>container_name</i>
docker stop <i>container_name</i>

### attach a running container 
docker attach <i>running_container_name</i>

### enable logging on a running container 
docker logs <i>running_container_name</i>

### enable logging on a running container in attached mode
docker logs -f <i>running_container_name</i>
