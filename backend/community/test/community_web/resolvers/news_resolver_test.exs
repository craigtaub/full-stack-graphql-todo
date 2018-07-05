defmodule CommunityWeb.NewsResolverTest do
  use ExUnit.Case, async: true
  alias CommunityWeb.NewsResolver

  describe "news resolver" do
    test "basic assert" do
      assert true == true
    end

    # test "test assert" do
    #   # IO.inspect NewsResolver.testme
    #   assert NewsResolver.testme("when") == "when"
    # end

    test "first assert" do
      # IO.inspect NewsResolver.testme
      IO.inspect NewsResolver.all_links("","","")
    end


  end

end
