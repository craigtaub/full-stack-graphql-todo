# Project issues

- Elixir needed CORS (easy via https://github.com/mschae/cors_plug)
- Type for mutation->deleteLink (1. import 'Link' type into resolver. 2. get item before delete, for 'id')
- Giving Adapter of a test Repo to control method responses, doesn't work.
- react-apollo Mutation wudnt trigger Query so page would need refresh for content. Fix = Imperative Store API 'update'.
- `docker-compose up` failure -> `eval "$(docker-machine env default)"`
- docker create+migrate at build time when no db running. move to CMD time.
- `react-create-app` once eject config is a mess, can't add server route - was easy add package.json `proxy`