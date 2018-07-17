#elixir simple.exs

defmodule Misc.Simple do
  def main do
    IO.puts("simple.main ran")
  end

  def process(value) do
    "add value = #{value}"
  end
end

# Simple.main

#######

# defmodule User do
#   defstruct name: "John", age: 27
#   def ran(%User{} = craig) do 
#     IO.puts(craig.name)
#     IO.puts(craig.age)
#   end
# end

# defmodule Main do
#   def main do
#     john = %User{}
#     # john = %{} # error = "no function clause matching in User.ran/1"
#     User.ran(john)
#   end
# end

# Main.main

#########

# defmodule Craig do
#   def one(steve) do 
#     "#{steve} one"
#   end 

#   def two(steve) do 
#     "#{steve} two" 
#   end 
# end

# attrs = 'hey steve'
# blah = attrs
#       |> Craig.one()
#       |> Craig.two()

# IO.puts blah

########

# colors = %{:primary, secondary: "blue"}
# colors = {:primary, 'dsfd'}
# colors.primary
# %{secondary: second_color} = colors
# IO.inspect colors

# colors = [{:primary, "red"}, {:secondary, "green"}]
# IO.inspect colors

# colors = [primary: "red", secondary: "green"]
# IO.inspect colors