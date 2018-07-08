import React from 'react';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { REMOVE_LINK } from './Remove';

export const GET_LINKS = gql`
  {
    allLinks {
      id
      url
      description
    }
  }
`;

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
             - <a href={link.url}>{link.id} - {link.description}</a>
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
      <GetLinks removeLink={removeLink} />
  )}
  </Mutation>
);

// Wrapped so that can mutate and query
export default () => (
  <RemoveLinks />
);