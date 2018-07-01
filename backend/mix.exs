defp deps do
  [{:graphql, "~> 0.1.1"}]
end

def application do
  # Add the application to your list of applications.
  # This will ensure that it will be included in a release.
  [applications: [:logger, :graphql]]
end