import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { addUpdate } from '../updaters';

export const ADD_LINK = gql`
  mutation addLink($url: String!, $desc: String!) {
    createLink(
      url: $url,
      description: $desc,
    ) {
      id
      url
      description
    }
  }
`

export default () => {
  let urlInput, descInput;

  return (
    <Mutation 
      mutation={ADD_LINK}
      update={addUpdate}
    >
      {(addLink, { data, loading, error }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addLink({ variables: { url: urlInput.value, desc: descInput.value } });
              urlInput.value = "";
              descInput.value = "";
            }}
          >
            Url: 
            <input
              ref={node => {
                urlInput = node;
              }}
            />
            <br />
            Description: 
            <input
              ref={node => {
                descInput = node;
              }}
            />
            <br />
            <button type="submit">Add Link</button>
          </form>
          {loading && <p>Loading...</p>}
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};