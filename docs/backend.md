# Backend

- Elixir, Pheonix, Ecto, Absinthe, Postgres
  - https://www.howtographql.com/graphql-elixir/1-getting-started/
- Pheonix 
  - web framework + generator
  - dictates file structure "seperation of concerns"
  - comes with test setups too
  - Testing 
    - endpoint testing with  `Pheonix.ConnTest` 
    - imports all functions like real conn
    - https://hexdocs.pm/phoenix/Phoenix.ConnTest.html 
- Absinthe 
  - https://hexdocs.pm/absinthe/Absinthe.Schema.Notation.html
  - GraphQl toolkit
  - GraphQl documentation generated based on schemas (via introspection)
- Ecto 
  - https://hexdocs.pm/ecto/Ecto.Repo.html#content
  - https://hexdocs.pm/ecto/Ecto.Adapters.SQL.Sandbox.html#content
  - DSL for interacting with dbs. Adapters for many SQL-based dbs.
  - Seeds
  - Migrations - used to modify your db schema over time. db-dependence
    - `up` is update, `down` is rollback
    - provides mix tasks
      - generate migration file `repo/migrations/*.exs`
      - `mix ecto.setup` -> ? perhaps both below
      - `mix ecto.create && mix ecto.migrate` -> create database for Community repo + run migrations to create table
  - Testing
    - use sandbox adapter - `Ecto.Adapters.SQL.Sandbox`
    - don't mock. Contracts via Adapters
    - use Adapter to setup data for the test
- Mix 
  - environment toolkit
  - `#mix phx.new community` -> bootstrap app with generator
  - mix.exs -> dependencies file
  - `mix deps.get` -> use file + install
  - testing `mix test`
    - uses `test.exs` config for stuff (db).
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