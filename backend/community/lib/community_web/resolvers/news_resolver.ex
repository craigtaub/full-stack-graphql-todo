
defmodule CommunityWeb.NewsResolver do
  alias Community.News
  alias Community.News.Link

  # def testme(text) do
  #   text
  # end 

  def all_links(_root, _args, _info) do
    links = News.list_links()
    {:ok, links}
  end

  def create_link(_root, args, _info) do
    case News.create_link(args) do
      {:ok, link} ->
        {:ok, link}
      _error ->
        {:error, "could not create link"}
    end
  end

  def delete_link(_root, args, _info) do
    # IO.puts args.id
    # IO.inspect args
    link = %Link{id: args.id} # imported above for this
    case News.delete_link(link) do
      {:ok, link} ->
        {:ok, link}
      _error ->
        {:error, "could not remove link"}
    end
  end
  
end