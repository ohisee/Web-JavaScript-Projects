### start

### build one image

docker build -t kub-fist-app .

docker tag kub-fist-app <i>docker_id/some_tag_name</i>

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

docker tag kub-fist-app <i>docker_id/some_tag_name</i>
docker push <i>docker_id/some_tag_name</i>

### create a new deployment object, imperative approach, pull from remote docker hub respository

kubectl create deployment first-app --image=<i>docker_id/some_tag_name</i>

### delete deployment

kubectl delete deployment first-app

kubectl get pods

kubectl get deployments
