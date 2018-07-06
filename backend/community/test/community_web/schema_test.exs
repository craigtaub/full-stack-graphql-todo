defmodule CommunityWeb.SchemaTest do
  use ExUnit.Case, async: true

  # adds pheonix methods
  use CommunityWeb.ConnCase

  # for testing data
  alias CommunityWeb.NewsResolver
  alias Community.Repo
  alias Community.News.Link

  describe "Schema test" do

    test "validate query allLink schema" do
      query = """
      {
        allLinks {
          id,
          url,
          description
        }
      }
      """

      # make test connection
      conn = Phoenix.ConnTest.build_conn()
      res = conn |> post("/graphiql", query: query)

      status  = res.status
      assert status == 200
    end

    test "validate query allLink schema response" do
      query = """
      {
        allLinks {
          id,
          url,
          description
        }
      }
      """

      # manually insert
      link_one = %Link{url: "first", description: "one", id: 1, inserted_at: ~N[2018-07-05 18:42:42.888888], updated_at: ~N[2018-07-05 18:42:42.555555]}
      Repo.insert!(link_one)
      {:ok, data} = NewsResolver.all_links("","","")
      expected_description = Enum.at(data, 0).description

      # make test connection
      conn = Phoenix.ConnTest.build_conn()
      res = conn |> post("/graphiql", query: query)

      # check response data, compare against inserted
      all_links = Enum.at(json_response(res, 200)["data"]["allLinks"],0)
      real_description = all_links["description"]

      assert real_description == expected_description
    end

  end
end