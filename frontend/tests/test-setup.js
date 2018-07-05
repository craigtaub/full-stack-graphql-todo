import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from 'react-apollo/test-utils';

Enzyme.configure({ adapter: new Adapter() });

export default async function setupMockedContainer(Container, query, result) {
  const mocks = [
    {
      request: { query: query },
      result: {
        data: {
          ...result
        },
      },
    },
  ];

  const wrapper = mount((
    <MockedProvider mocks={mocks}>
      <Container />
    </MockedProvider>
  ));
  await wait(0);
  wrapper.update();
  return wrapper;
}

export const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
