# Docker setup

- `192.168.99.100:3000` -> APP
- docker-compose top level
- Dockerfiles for each app
- PLAN. (FE) JS -> (BE) Elixir -> (DB) Postgress
- `#docker ps` -> check running apps
- `#docker images` -> check images
- via Dockerfile
  - useful to run each by itself initially
  - `#docker build -t craigtaub/frontend .` -> build
  - `#docker run -p 3000:3000 -d craigtaub/frontend` -> run
  - `#docker exec -it <container id> /bin/bash` -> enter container
  - `#docker stop <container id>` -> stop container
- via composer
  - `#docker-compose build` -> build images from composer
  - `#docker-compose up` -> run images from composer 
  - `#docker-compose rm` -> rm images
- Kitamatic works with them now (start, stop, screenshots)