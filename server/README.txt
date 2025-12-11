App Description

1. create server and client like normal

2. in ubuntu go to file location and run git init to initialize the folder for githut

3. git remote add origin git@github.com:adambooth/pushing-existing-project-deployment.git

4. git add ., git commint -m "", git push but this time we use git push -u origin main

5. Open render create new static site. Choose github repo, change Root Directory to client, build command to npm install; npm run build, Publish Directory to dist, click deploy

6. Create a web service connect the repo,
add -web to the name. region Frankfurt, root directory server, build command npm i, start command node server.js, copy your .env ad paste it into enviroment variables.

7. make sure they are in the same project in render if not move them into the same one
