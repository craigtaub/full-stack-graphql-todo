import gql from "graphql-tag";

export const GET_LINKS = gql`
  {
    allLinks {
      id
      url
      description
    }
  }
`;

export const REMOVE_LINK = gql`
  mutation removeLink($id: String!) {
    deleteLink(
      id: $id
    ) {
      id
    }
  }
`