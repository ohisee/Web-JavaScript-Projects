## Start 

<b>build an image</b>

docker build .

<b>build an image using name and tag (name must be in lower case)</b>

docker build -t nodeserver:1.0 .

<b>list image(s)</b>

docker images 

<b>create and run a container in detached mode</b> 

docker run -p 3000:3000 -d <i>image_id</i> 

<b>create and run a container in detached mode and remove after stop</b>  

docker run -p 3000:3000 -d --rm <i>image_id</i> 

<b>create and run a container in detached mode, give some name, and remove after stop</b> 

docker run -p 3000:3000 -d --rm --name <i>some_name</i> <i>image_id</i>

<b>remove container by container Id</b>  

docker rm <i>container_id</i> 

<b>remove container by container name</b> 

docker rm <i>container_name</i> 

<b>remove image by image id</b> 

docker rmi <i>image_id</i>
