defmodule CommunityWeb.NewsResolverTest do
  use ExUnit.Case, async: true
  alias CommunityWeb.NewsResolver
  alias Community.Repo
  alias Community.News.Link

  describe "News Resolver" do
    test "Basic assert" do
      assert true == true
    end

    # test "test assert" do
    #   # IO.inspect NewsResolver.testme
    #   assert NewsResolver.testme("when") == "when"
    # end

    test "all_links - should fetch and return all inserted links" do
      # Explicitly get a connection before each test
      :ok = Ecto.Adapters.SQL.Sandbox.checkout(Repo)
      
      # Seems to advise interacting with Adapter in order to test
      link_one = %Link{url: "first", description: "one", id: 1, inserted_at: ~N[2018-07-05 18:42:42.888888], updated_at: ~N[2018-07-05 18:42:42.555555]}
      link_two = %Link{url: "second", description: "two", id: 2, inserted_at: ~N[2018-07-05 18:42:42.888888], updated_at: ~N[2018-07-05 18:42:42.555555]}
      inserted_one = Repo.insert!(link_one)
      inserted_two = Repo.insert!(link_two)

      # IO.inspect Repo.all(Link)
      # Call code itself
      {:ok, result} = NewsResolver.all_links("","","")

      assert result == [inserted_one, inserted_two] # check by comparing results
      assert result == Repo.all(Link) # check by calling same code again (bad)
    end


  end

end
