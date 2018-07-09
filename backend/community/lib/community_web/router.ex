defmodule CommunityWeb.Router do
  use CommunityWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug
  end

  scope "/check", CommunityWeb do
    get "/", WelcomeController, :index
  end

  scope "/" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: CommunityWeb.Schema,
      interface: :simple,
      context: %{pubsub: CommunityWeb.Endpoint}
  end

end