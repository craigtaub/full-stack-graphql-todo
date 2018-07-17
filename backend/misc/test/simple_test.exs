# elixir simple.exs
# ExUnit.start()
# Code.load_file("simple.exs")

defmodule Misc.SimpleTest do
  alias Misc.Simple, as: Simple
  use ExUnit.Case, async: true
  test "basic assert" do
    IO.puts Simple.process "some"
    assert true
  end

end
