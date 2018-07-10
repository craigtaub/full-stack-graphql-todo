FROM elixir:alpine

RUN mkdir -p /usr/src/elixir
ADD . /usr/src/elixir
WORKDIR /usr/src/elixir

RUN mix local.hex --force
RUN mix deps.get
EXPOSE 4000

CMD mix do ecto.create, ecto.migrate, phx.server