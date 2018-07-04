import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_LINK = gql`
  mutation removeLink($id: String!) {
    deleteLink(
      id: $id
    ) {
      id
    }
  }
`

export default () => {
  let idInput;

  return (
    <Mutation mutation={ADD_LINK}>
      {(addLink, { data, loading, error }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addLink({ variables: { id: idInput.value } });
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