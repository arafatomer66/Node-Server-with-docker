
#List of images
 docker image ls

#give image a name before creating container for a port
 docker run -p 3000:3000 -d --name node-app node-app-image

#For creating an image
 docker build .

#list of created and opened containers (-a for show all)
 docker ps -a

#remove container
 docker rm node-app -fv


#log in to docker container
 docker exec -it node-app bash   // exit to exit

printenv --> for env logs


#sync code with docker container
 docker run -p 3000:3000 -d --name node-app node-app-image -v C:\Users\arafa\OneDrive\Desktop\nodeDocker\:/app

 shortcut :   docker run -v ${pwd}:/app -p 3000:3000 -d --name node-app node-app-image

 more optimized : docker run -v ${pwd}:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image

#logs for specific container
 docker logs node-app



 #Docker compose
   docker-compose up -d -v --build
   docker-compose down -d -v



#Dev and production yml seperation and run command
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
