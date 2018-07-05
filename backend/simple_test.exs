#elixir simple.exs

ExUnit.start()

defmodule CraigsTest do
  use ExUnit.Case, async: true
  test "basic assert" do
    assert true
  end

end
