FROM elixir:alpine

RUN mkdir -p /usr/src/elixir
ADD . /usr/src/elixir
WORKDIR /usr/src/elixir

RUN mix local.hex --force
RUN mix deps.get
RUN mix ecto.create && mix ecto.migrate
EXPOSE 4000

CMD [ "mix", "phx.server" ]