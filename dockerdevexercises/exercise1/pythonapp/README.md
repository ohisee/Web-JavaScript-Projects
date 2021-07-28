## Start 

docker build .

### build an image using name and tag (name must be in lower case)

docker build -t pyinput:1.0 .

### interactive and tty mode to create a container 

docker run -i -t <i>image_id</i>

### interactive and tty mode with some name to create a container 

docker run -i -t --name <i>some_name</i> <i>image_id</i>

### create and run a container in detached mode, give some name, and remove after stop  

docker run -i -t --rm --name <i>some_name</i> <i>image_id</i>

### create and run a container in detached mode, give some name, and remove after stop with image_name:tag 
### for example, pyinput:1.0 as image_name:tag 

docker run -i -t --rm --name <i>some_name</i> <i>image_name:tag</i>

### start container attached and interactive mode 

docker start -a -i <i>image_name</i>

docker start -a -i <i>container_id</i>
