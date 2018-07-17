defmodule Misc.Application do
  alias Misc.Simple, as: Simple

  # "application's start/2 function should start and return the top level process of the application, usually a supervisor instance." 
  def start(_type, _args) do
    IO.puts("APP START")
    # Simple.main # log main
    # IO.puts Simple.process "some" # log process

    # List all child processes to be supervised
    children = [
      # Starts a worker by calling: A.Worker.start_link(arg)
      # {A.Worker, arg},
    ]
    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: A.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
