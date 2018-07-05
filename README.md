# Full stack graphql TODO app

### Frontend
- react, webpack, styled-components, graphql (Apollo), yarn, jest
- apollo-boost - lots out the box
- `#yarn add apollo-boost graphql-tag graphql react-apollo --save`
- `#create-react-app` + `#npm run eject`
- Apollo
  - query + mutation components super easy to use
- Jest
  - install + lockfile easy
  - tests use watcher by default, run very fast, docs good
  - paired with Apollo very easily
- SETUP -> `#yarn`

### Backend
- Elixir, Pheonix, Ecto, Absinthe, Postgres
  - https://www.howtographql.com/graphql-elixir/1-getting-started/
- Pheonix 
  - web framework + generator
  - dictates file structure "seperation of concerns"
  - comes with test setups too
- Absinthe 
  - https://hexdocs.pm/absinthe/Absinthe.Schema.Notation.html
  - GraphQl toolkit
  - GraphQl documentation generated based on schemas (via introspection)
- Ecto 
  - https://hexdocs.pm/ecto/Ecto.Repo.html#content
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
- SETUP -> `#mix deps.get && mix ecto.setup`

Query:
```
{
  allLinks {
    id
    url
    description
  }
}
```
Mutations:
```
mutation {
  createLink(
    url: "http://npmjs.com/package/graphql-tools",
    description: "Best Tools!",
  ) {
    id
    url
    description
  }
}
mutation {
  deleteLink(
    id: 18
  ) {
    id
  }
}
```

#### ISSUES
- Elixir needed CORS (easy via https://github.com/mschae/cors_plug)
- Type for mutation->deleteLink (1. import 'Link' type into resolver. 2. get item before delete, for 'id')