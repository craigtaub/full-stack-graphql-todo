import React from 'react';
import gql from "graphql-tag";
import { GET_LINKS } from './List';
import { Mutation } from "react-apollo";

export const REMOVE_LINK = gql`
  mutation removeLink($id: String!) {
    deleteLink(
      id: $id
    ) {
      id
    }
  }
`

// Manual Remove component
export default () => {
  let idInput;

  return (
    <Mutation 
      mutation={REMOVE_LINK}
      update={(cache, { data }) => {
        const { allLinks } = cache.readQuery({ query: GET_LINKS })
        const updatedLinks = allLinks.filter(item => item.id !== data.deleteLink.id);
        cache.writeQuery({
          query: GET_LINKS,
          data: { allLinks: updatedLinks },
        });
      }}
    >
      {(removeLink, { data, loading, error }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              removeLink({ variables: { id: idInput.value } });
              idInput.value = "";
            }}
          >
            ID: 
            <input
              ref={node => {
                idInput = node;
              }}
            />
            <br />
            <button type="submit">Remove Link</button>
          </form>
          {loading && <p>Loading...</p>}
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};