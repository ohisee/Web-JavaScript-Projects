### start

### build one image

docker build -t kub-fist-app .

### build one image using docker_id naming format with a tag name

docker build -t docker_id/repository_name:tag_name .

docker build -t docker_id/repository_name:1 .
docker build -t docker_id/repository_name:2 .

### tag one existing image to another tag

docker tag kub-fist-app docker_id/repository_name
docker tag kub-fist-app docker_id/repository_name:1

### Minikube commands

### create a minikube using virtual box driver and disable hardware virtualization check 

minikube start --driver=virtualbox --no-vtx-check

### docker is runnning

minikube start --driver=docker

### check status 

minikube status
minikube update-context

### bring up dashboard

minikube dashboard

### stop and delete

minikube stop --all

minikube delete

### kubectl commands

### note to tag a local image and push to remote docker hub repository 
### must create a remote docker hub respository first if not created yet 

docker tag kub-fist-app <i>docker_id/repository_name</i>
docker push <i>docker_id/repository_name</i>

### create a new deployment object, imperative approach, pull from remote docker hub respository
### first-app is set as name of deployment object

kubectl create deployment first-app --image=<i>docker_id/repository_name</i>

### get pods

kubectl get pods

### get deployments

kubectl get deployments

### get service

kubectl get services

### create a service using kubectl expose, type is load balancer 

kubectl expose deployment first-app --type=LoadBalancer --port=8080

### check service

kubectl get services

### set scale

kubectl scale deployment/first-app --replicas=3

kubectl get pods

### update deployment, need to provide the name of container running in minikube cluster 
### must push latest changes to docker hub

kubectl set image deployment/first-app kubernetes-first-deployment-node-app=breakosin/docker_id/repository_name <i>or</i> docker_id/repository_name:2

### roll out deployment

kubectl rollout status deployment/first-app

### rollback / undo latest deployment

kubectl rollout undo deployment/first-app

### list deployment history

kubectl rollout history deployment/first-app

kubectl rollout history deployment/first-app --revision=3

### rollback to a specific revision

kubectl rollout undo deployment/first-app --to-revision=1

### view minikube IP address info

minikube service first-app

### delete service, need to provide deployment name 

kubectl delete service first-app

### delete deployment

kubectl delete deployment first-app

### apply config file

kubectl apply -f=deployment.yml

kubectl apply -f=service.yml

### instructions

### build a local image using docker build

docker build -t kub-fist-app .

docker build -t docker_id/repository_name:1 .

### tag to docker repository

docker tag kub-fist-app docker_id/repository_name
docker tag kub-fist-app docker_id/repository_name:2

### push to remote docker hub

docker push docker_id/repository_name
docker push docker_id/repository_name:2

### start minikube, using docker as driver, docker must be running

minikube start --driver=docker

### deploy using kubectl 

kubectl create deployment first-app --image=docker_id/repository_name
kubectl create deployment first-app --image=docker_id/repository_name:2

### check deployment status

kubectl get pods

kubectl get deployments

### stop minikube

minikube stop
