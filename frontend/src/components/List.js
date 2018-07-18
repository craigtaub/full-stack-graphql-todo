import React from 'react';
import { Query, Mutation } from "react-apollo";
import { removeUpdate } from '../updaters';
import { GET_LINKS, REMOVE_LINK } from '../queries';

const GetLinks = ({ removeLink }) => (
  <Query query={GET_LINKS}>
    {({ loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    return (
      <ul>
        {data.allLinks.map(link => (
          <li className="list-item" key={link.id} >
            <a 
            href={ '' }
            data-attr-id={link.id}
            onClick={ (e) => {
              const id = e.target.getAttribute('data-attr-id');
              removeLink({ variables: { id } });
              e.preventDefault();
            }}
            >X</a>
             - <a href={link.url}>{link.description}</a>
          </li>
        ))}
      </ul>
    );
  }}
  </Query>
);

const RemoveLinks = () => (
  <Mutation 
    mutation={REMOVE_LINK}
    update={removeUpdate}
  >
  {(removeLink, { data, loading, error }) => (
      <GetLinks removeLink={removeLink} />
  )}
  </Mutation>
);

// Wrapped so that can mutate and query
export default () => (
  <RemoveLinks />
);