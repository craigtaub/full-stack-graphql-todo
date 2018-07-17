# elixir simple.exs
# ExUnit.start()
# Code.load_file("simple.exs")

defmodule Misc.SimpleTest do
  use ExUnit.Case, async: true
  doctest Misc.Simple
  alias Misc.Simple, as: Simple

  test "basic assert" do
    IO.inspect Simple.process "some"
    assert true
  end

end
