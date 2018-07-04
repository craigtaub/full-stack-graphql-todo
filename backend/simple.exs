
defmodule User do
  defstruct name: "John", age: 27
  def ran(%User{} = craig) do 
    IO.puts(craig.name)
    IO.puts(craig.age)
  end
end

defmodule Main do
  def main do
    john = %User{}
    # john = %{} # error = "no function clause matching in User.ran/1"
    User.ran(john)
  end
end

Main.main