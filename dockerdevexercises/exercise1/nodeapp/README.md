## Start 

### build an image 

docker build .

### build an image using name and tag (name must be in lower case) 

docker build -t nodeserver:1.0 .

### list image(s) 

docker images 

### create and run a container in detached mode  

docker run -p 3000:3000 -d <i>image_id</i> 

### create and run a container in detached mode and remove after stop   

docker run -p 3000:3000 -d --rm <i>image_id</i> 

### create and run a container in detached mode, give some name, and remove after stop  

docker run -p 3000:3000 -d --rm --name <i>some_name</i> <i>image_id</i>

### create and run a container in detached mode, give some name, and remove after stop with image_name:tag 
### for example, nodeserver:1.0 as image_name:tag 

docker run -p 3000:3000 -d --rm --name <i>some_name</i> <i>image_name:tag</i>

### remove container by container Id   

docker rm <i>container_id</i> 

### remove container by container name  

docker rm <i>container_name</i> 

### remove image by image id  

docker rmi <i>image_id</i>
