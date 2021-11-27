## start building react front-end container

### build react front-end image with tag

docker build -t goals-react .

### build react front-end using a specific Dockerfile, i.e Dockerfile.prod using -f 
### -f must be use correct full file path

docker build -f Dockerfile.prod -t goals-react .

### only build 'build' stage in Dockerfile.prod
 
docker build -target build -f Dockerfile.prod -t goals-react .

### create and run front-end container, in detached mode, publish port number, in interactive mode 
### cannot put front-end container in a network, front-end codes are running inside a browser 

docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react

### add bind mount for source codes update without restart 
### for development only 

docker run --name goals-frontend -v .../dockerdevmulticontainers/frontend/src:/app/src -e CHOKIDAR_USEPOLLING=true --rm -d -p 3000:3000 -it goals-react
