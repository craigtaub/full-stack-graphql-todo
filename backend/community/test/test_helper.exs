ExUnit.start()

# Set the pool mode to manual for explicit checkouts
Ecto.Adapters.SQL.Sandbox.mode(Community.Repo, :manual)

# Didn't use Absinthe.test, used Pheonix test methods to call graphql
# Absinthe.Test.prime(CommunityWeb.Schema)