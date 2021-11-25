## start

### build container from docker image

docker build -t node-deployment-example .

### run container in detached mode 

docker run -d --rm -p 80:80 --name node-container node-deployment-example

### stop container 

docker stop node-container 
