import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const GET_LINKS = gql`
  {
    allLinks {
      id
      url
      description
    }
  }
`;

export default () => (
  <Query query={GET_LINKS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <ul>
          {data.allLinks.map(link => (
            <li className="list-item" key={link.id} ><a href={link.url}>{link.id} - {link.description}</a></li>
          ))}
        </ul>
      );
    }}
  </Query>
);