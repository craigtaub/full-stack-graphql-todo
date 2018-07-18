# Full stack graphql todo app

- Frontend
- Backend
- Docker setup
- Project issues

Run manually (requires local Postgres running):

    ./run.sh

Run with docker container orchestration:

    ./docker-run.sh

Urls:

- frontend = http://192.168.99.100:3000/
- backend = via service name `backend` (`proxy` in `frontend/package.json`)
- Postgres = via service name `db` (`hostname` in `backend/community/config/dev.exs`)

