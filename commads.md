
#List of images
docker image ls

#give image a name before creating container for a port
docker run -p 3000:3000 -d --name node-app node-app-image

#For creating an image
docker build .

#list of created and opened containers
docker ps

#remove container
docker rm node-app
