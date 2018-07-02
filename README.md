# Full stack graphql TODO app

### Frontend
- `#create-react-app`
- `#npm run eject`

### Backend - Elixir
- Pheonix 
  - web framework + generator
  - dictates file structure "seperation of concerns"
  - comes with test setups too
- Absinthe 
  - GraphQl toolkit
- Ecto 
  - DSL for interacting with dbs. Adapters for many SQL-based dbs.
  - Seeds
  - Migrations - used to modify your db schema over time. db-dependence
    - `up` is update, `down` is rollback
    - provides mix tasks
      - `mix ecto.setup` -> creates `repo/migrations/*.exs`
- Mix 
  - environment toolkit
  - mix.exs -> dependencies file
  - `mix deps.get` -> use file + install
- Postgress 
  - docker image + settings in `dev.exs`
  - pgAdmin ui tool
  - SQL
- `#brew install elixir`
- `#brew install postgres`

- https://www.howtographql.com/graphql-elixir/1-getting-started/ -> a guide