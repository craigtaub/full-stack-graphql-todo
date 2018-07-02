# Full stack graphql TODO app

### Frontend
- react, webpack, styled-components, graphql (Apollo), yarn, jest
- apollo-boost - lots out the box
- `#yarn add apollo-boost graphql-tag graphql react-apollo --save`
- `#create-react-app` + `#npm run eject`

### Backend
- Elixir + Pheonix
- Pheonix 
  - web framework + generator
  - dictates file structure "seperation of concerns"
  - comes with test setups too
- Absinthe 
  - GraphQl toolkit
  - GraphQl documentation generated based on schemas (via introspection)
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

#### Elixir Walkthrough
- https://www.howtographql.com/graphql-elixir/1-getting-started/
- added Pheonix
- added Postrges table + seeded
- added basic resolver
- step 1+2 done, mutations next
- Query:
```
{
  allLinks {
    id
    url
    description
  }
}
```

#### ISSUES
- Elixir needed CORS (easy via https://github.com/mschae/cors_plug)